import * as ts from 'typescript';
import { LineBasedVirtualFile, LineMapping } from './lineBasedVirtualFile';
import { SimpleVirtualFile, SimpleMapping } from './simpleVirtualFile';

export class LineBasedTypeScriptService {
  private languageService!: ts.LanguageService;
  private languageServiceHost!: ts.LanguageServiceHost;
  private virtualFiles = new Map<string, string>();
  private currentMappings: LineMapping[] = [];
  private fileVersions = new Map<string, number>();
  private maxVersionHistory = 10; // Prevent memory leaks

  constructor() {
    this.setupLanguageService();
  }

  private setupLanguageService() {
    this.languageServiceHost = {
      getScriptFileNames: () => Array.from(this.virtualFiles.keys()),
      getScriptVersion: (fileName: string) => {
        return (this.fileVersions.get(fileName) || 0).toString();
      },
      getScriptSnapshot: (fileName: string) => {
        const content = this.virtualFiles.get(fileName);
        return content ? ts.ScriptSnapshot.fromString(content) : undefined;
      },
      getCurrentDirectory: () => process.cwd(),
      getCompilationSettings: () => ({
        target: ts.ScriptTarget.ES2020,
        module: ts.ModuleKind.CommonJS,
        strict: false, // Allow Alpine's loose typing
        noImplicitAny: false, // Allow implicit any for Alpine
        esModuleInterop: true,
        skipLibCheck: true,
        forceConsistentCasingInFileNames: true,
        allowJs: true,
        checkJs: false, // Don't check JS files too strictly
        noEmit: true
      }),
      getDefaultLibFileName: (options) => ts.getDefaultLibFilePath(options),
      fileExists: ts.sys.fileExists,
      readFile: ts.sys.readFile,
      readDirectory: ts.sys.readDirectory,
      directoryExists: ts.sys.directoryExists,
      getDirectories: ts.sys.getDirectories,
    };

    this.languageService = ts.createLanguageService(this.languageServiceHost);
  }

  /**
   * Update the virtual file - much simpler than the complex character-based approach!
   */
  updateVirtualFile(virtualFile: LineBasedVirtualFile | SimpleVirtualFile) {
    console.log('Updating virtual file:', virtualFile.uri);
    console.log('Content length:', virtualFile.content.length);
    console.log('Mappings count:', virtualFile.mappings.length);

    this.virtualFiles.set(virtualFile.uri, virtualFile.content);
    // Convert SimpleMapping to LineMapping if needed for compatibility
    this.currentMappings = virtualFile.mappings.map(m => {
      if ('virtualLine' in m) {
        // LineMapping - use as is
        return m;
      } else {
        // SimpleMapping - convert expressionId to virtualLine by finding it in content
        const virtualLine = this.findVirtualLineForExpressionId(m.expressionId, virtualFile.content);
        return {
          virtualLine: virtualLine !== null ? virtualLine : -1,
          htmlPosition: m.htmlPosition,
          expression: m.expression,
          directiveName: m.directiveName,
          componentId: 'unknown'
        };
      }
    });

    // CRITICAL: Increment version to force TypeScript cache invalidation
    const currentVersion = this.fileVersions.get(virtualFile.uri) || 0;
    const newVersion = currentVersion + 1;
    this.fileVersions.set(virtualFile.uri, newVersion);

    // Prevent memory leaks - keep only recent versions
    if (newVersion > this.maxVersionHistory) {
      // Don't clean fileVersions since we need current version for getScriptVersion
      // TypeScript handles its own cleanup
    }

    console.log(`File version incremented to ${newVersion} for ${virtualFile.uri}`);

    // Force TypeScript to refresh its understanding of this file
    this.languageService.getProgram();

    // Debug: Show the virtual file content
    console.log('Virtual file content:');
    console.log(virtualFile.content);
  }

  /**
   * Get completions for a specific virtual line
   * Much simpler than character-based positioning!
   */
  getCompletionsForVirtualLine(virtualUri: string, virtualLine: number): ts.CompletionInfo | undefined {
    console.log('Getting completions for virtual line:', virtualLine);

    if (!this.virtualFiles.has(virtualUri)) {
      console.log('Virtual file not found:', virtualUri);
      return undefined;
    }

    const content = this.virtualFiles.get(virtualUri)!;
    const lines = content.split('\n');

    if (virtualLine >= lines.length) {
      console.log('Virtual line out of bounds:', virtualLine, 'max:', lines.length - 1);
      return undefined;
    }

    const line = lines[virtualLine];
    console.log('Content of virtual line:', line);

    // Position at the end of the expression (before the semicolon and comment)
    // Find where the actual expression ends
    const expressionEnd = line.indexOf(';');
    const position = this.getPositionFromLineAndCharacter(
      content,
      virtualLine,
      expressionEnd > 0 ? expressionEnd : line.length
    );
    console.log('Position in file:', position);

    try {
      const result = this.languageService.getCompletionsAtPosition(
        virtualUri,
        position,
        {
          includeExternalModuleExports: false,
          includeInsertTextCompletions: true
        }
      );

      console.log('TypeScript completions result:', result ? `${result.entries.length} items` : 'null');

      if (result) {
        console.log('First few completions:', result.entries.slice(0, 5).map(e => e.name));
      }

      return result;
    } catch (error) {
      console.error('Error getting completions:', error);
      return undefined;
    }
  }

  /**
   * Simple helper to convert line/character to absolute position
   */
  private getPositionFromLineAndCharacter(content: string, line: number, character: number): number {
    const lines = content.split('\n');
    let position = 0;

    for (let i = 0; i < line && i < lines.length; i++) {
      position += lines[i].length + 1; // +1 for newline
    }

    position += Math.min(character, lines[line]?.length || 0);
    return position;
  }

  /**
   * Get the mapping for a specific virtual line
   */
  getMappingForVirtualLine(virtualLine: number): LineMapping | undefined {
    return this.currentMappings.find(m => m.virtualLine === virtualLine);
  }

  /**
   * Find which virtual line corresponds to an HTML position
   */
  findVirtualLineForHtmlPosition(htmlLine: number): LineMapping | undefined {
    return this.currentMappings.find(m => m.htmlPosition.line === htmlLine);
  }

  /**
   * Find virtual line for expression ID in content
   */
  private findVirtualLineForExpressionId(expressionId: string, virtualContent: string): number | null {
    const lines = virtualContent.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(`"${expressionId}":`)) {
        return i;
      }
    }
    return null;
  }

  /**
   * Get hover info for a virtual line
   */
  getHoverForVirtualLine(virtualUri: string, virtualLine: number): string | undefined {
    console.log('Getting hover for virtual line:', virtualLine);

    if (!this.virtualFiles.has(virtualUri)) {
      return undefined;
    }

    const content = this.virtualFiles.get(virtualUri)!;
    const lines = content.split('\n');

    if (virtualLine >= lines.length) {
      return undefined;
    }

    const line = lines[virtualLine];

    // For expression map lines, find the actual expression inside arrow function
    let positions: number[];
    const arrowFunctionMatch = line.match(/\(\) => \{ (.*?) \}/);
    if (arrowFunctionMatch) {
      // We have an arrow function, find the expression inside
      const expressionStart = line.indexOf(arrowFunctionMatch[1]);
      positions = [
        expressionStart + Math.floor(arrowFunctionMatch[1].length / 2), // Middle of expression
        expressionStart, // Start of expression
        expressionStart + arrowFunctionMatch[1].length - 1 // End of expression
      ];
    } else {
      // Fallback for regular lines
      const expressionEnd = line.indexOf(';');
      positions = [
        expressionEnd > 0 ? expressionEnd - 1 : line.length - 1,
        Math.floor((expressionEnd > 0 ? expressionEnd : line.length) / 2),
        line.indexOf('  ') + 2
      ];
    }

    for (const charPos of positions) {
      if (charPos < 0) continue;

      const position = this.getPositionFromLineAndCharacter(content, virtualLine, charPos);
      console.log(`Trying hover at position ${charPos} (offset ${position}) in line: "${line}"`);

      try {
        const tsHover = this.languageService.getQuickInfoAtPosition(virtualUri, position);
        if (tsHover && tsHover.displayParts && tsHover.displayParts.length > 0) {
          const hoverText = tsHover.displayParts.map(part => part.text).join('');
          const documentation = tsHover.documentation?.map(doc => doc.text).join('\n') || '';

          console.log('Successfully got hover:', hoverText);
          return `${hoverText}${documentation ? `\n\n${documentation}` : ''}`;
        }
      } catch (error) {
        console.error('Error getting hover at position', charPos, ':', error);
      }
    }

    console.log('No hover info found for any position');
    return undefined;
  }

  /**
   * Get hover for a specific character within an expression on a virtual line
   */
  getHoverForVirtualLineAtChar(
    virtualUri: string,
    virtualLine: number,
    expression: string,
    charInExpression: number
  ): string | undefined {
    console.log(`Getting hover for virtual line ${virtualLine}, char ${charInExpression} in expression: "${expression}"`);

    if (!this.virtualFiles.has(virtualUri)) {
      return undefined;
    }

    const content = this.virtualFiles.get(virtualUri)!;
    const lines = content.split('\n');

    if (virtualLine >= lines.length) {
      return undefined;
    }

    const line = lines[virtualLine];
    console.log(`Line content: "${line}"`);
    console.log(`Looking for expression: "${expression}" at char ${charInExpression}`);

    // Find where the expression appears in the virtual line
    let targetPosition = -1;

    // Look for the expression in the line (it should be inside the arrow function)
    const arrowMatch = line.match(/=>\s*\{\s*(.+?)\s*\}/);
    if (arrowMatch) {
      const expressionInLine = arrowMatch[1];
      console.log(`Arrow match found: "${expressionInLine}", looking for: "${expression}"`);

      if (expressionInLine === expression) {
        // Found exact match - calculate position
        const arrowStart = line.indexOf(arrowMatch[0]);
        const expressionStart = line.indexOf(expressionInLine, arrowStart);
        targetPosition = expressionStart + charInExpression;
        console.log(`Using arrow match at position ${targetPosition}`);
      }
    }

    if (targetPosition === -1) {
      console.log('Could not find expression in line');
      return undefined;
    }

    // Convert line position to absolute position in file
    const absolutePosition = this.getPositionFromLineAndCharacter(content, virtualLine, targetPosition);
    console.log(`Final hover position: char ${targetPosition} (offset ${absolutePosition}) in line: "${line}"`);

    try {
      const quickInfo = this.languageService.getQuickInfoAtPosition(virtualUri, absolutePosition);
      if (quickInfo && quickInfo.displayParts) {
        return quickInfo.displayParts.map(part => part.text).join('');
      }
    } catch (error) {
      console.error('Error getting quick info:', error);
    }

    return undefined;
  }
}