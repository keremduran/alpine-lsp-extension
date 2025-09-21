import * as ts from 'typescript';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { AlpineVirtualFileManager, VirtualFile } from './virtualFileManager';

export class VirtualTypeScriptService {
  private languageService: ts.LanguageService;
  private languageServiceHost!: ts.LanguageServiceHost;
  private virtualFileManager: AlpineVirtualFileManager;
  private virtualFiles = new Map<string, string>();
  private compilerOptions: ts.CompilerOptions;

  constructor(virtualFileManager: AlpineVirtualFileManager) {
    this.virtualFileManager = virtualFileManager;
    this.compilerOptions = {
      target: ts.ScriptTarget.ES2020,
      module: ts.ModuleKind.ESNext,
      lib: ['ES2020', 'DOM'],
      allowJs: true,
      checkJs: true,
      strict: false,
      noEmit: true,
      skipLibCheck: true,
      moduleResolution: ts.ModuleResolutionKind.NodeJs,
      allowSyntheticDefaultImports: true,
      esModuleInterop: true
    };

    this.createLanguageServiceHost();
    this.languageService = ts.createLanguageService(this.languageServiceHost, ts.createDocumentRegistry());
  }

  private createLanguageServiceHost(): void {
    this.languageServiceHost = {
      getScriptFileNames: () => {
        return Array.from(this.virtualFiles.keys());
      },

      getScriptVersion: (fileName: string) => {
        // Simple versioning - could be improved
        return '1';
      },

      getScriptSnapshot: (fileName: string) => {
        const content = this.virtualFiles.get(fileName);
        if (content === undefined) {
          return undefined;
        }
        return ts.ScriptSnapshot.fromString(content);
      },

      getCurrentDirectory: () => process.cwd(),

      getCompilationSettings: () => this.compilerOptions,

      getDefaultLibFileName: (options: ts.CompilerOptions) => {
        return ts.getDefaultLibFilePath(options);
      },

      fileExists: (path: string) => {
        return this.virtualFiles.has(path) || ts.sys.fileExists(path);
      },

      readFile: (path: string) => {
        const virtualContent = this.virtualFiles.get(path);
        if (virtualContent !== undefined) {
          return virtualContent;
        }
        return ts.sys.readFile(path);
      },

      readDirectory: ts.sys.readDirectory,
      getDirectories: ts.sys.getDirectories,
      directoryExists: ts.sys.directoryExists,
      realpath: ts.sys.realpath
    };
  }

  /**
   * Update virtual file content for a document
   */
  updateVirtualFile(document: TextDocument, virtualFile: VirtualFile): void {
    this.virtualFiles.set(virtualFile.uri, virtualFile.content);

    // Force TypeScript to recognize the file change
    this.languageService.cleanupSemanticCache();
  }

  /**
   * Get TypeScript completions for a virtual file position
   */
  getCompletions(virtualUri: string, position: number): ts.CompletionInfo | undefined {
    console.log('getCompletions called with:', virtualUri, position);

    if (!this.virtualFiles.has(virtualUri)) {
      console.log('Virtual file not found:', virtualUri);
      console.log('Available files:', Array.from(this.virtualFiles.keys()));
      return undefined;
    }

    const content = this.virtualFiles.get(virtualUri);
    console.log('File content length:', content?.length);
    console.log('Context around position:', content?.substring(Math.max(0, position - 50), position + 50));

    try {
      const result = this.languageService.getCompletionsAtPosition(
        virtualUri,
        position,
        {
          includeExternalModuleExports: false,
          includeInsertTextCompletions: true
        }
      );
      console.log('TypeScript completion result:', result ? 'success' : 'null');
      return result;
    } catch (error) {
      console.error('Error getting completions:', error);
      return undefined;
    }
  }

  /**
   * Get TypeScript diagnostics for a virtual file
   */
  getDiagnostics(virtualUri: string): ts.Diagnostic[] {
    if (!this.virtualFiles.has(virtualUri)) {
      return [];
    }

    try {
      const syntacticDiagnostics = this.languageService.getSyntacticDiagnostics(virtualUri);
      const semanticDiagnostics = this.languageService.getSemanticDiagnostics(virtualUri);

      return [...syntacticDiagnostics, ...semanticDiagnostics];
    } catch (error) {
      console.error('Error getting diagnostics:', error);
      return [];
    }
  }

  /**
   * Get definition location for a virtual file position
   */
  getDefinition(virtualUri: string, position: number): readonly ts.DefinitionInfo[] | undefined {
    if (!this.virtualFiles.has(virtualUri)) {
      return undefined;
    }

    try {
      return this.languageService.getDefinitionAtPosition(virtualUri, position);
    } catch (error) {
      console.error('Error getting definition:', error);
      return undefined;
    }
  }

  /**
   * Get hover information for a virtual file position
   */
  getHover(virtualUri: string, position: number): ts.QuickInfo | undefined {
    if (!this.virtualFiles.has(virtualUri)) {
      return undefined;
    }

    try {
      return this.languageService.getQuickInfoAtPosition(virtualUri, position);
    } catch (error) {
      console.error('Error getting hover info:', error);
      return undefined;
    }
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
    const absolutePosition = this.positionToOffset(virtualUri, virtualLine, targetPosition);
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

  /**
   * Convert position in virtual file content to offset
   */
  positionToOffset(virtualUri: string, line: number, character: number): number {
    const content = this.virtualFiles.get(virtualUri);
    if (!content) return 0;

    const lines = content.split('\n');
    let offset = 0;

    for (let i = 0; i < Math.min(line, lines.length - 1); i++) {
      offset += lines[i].length + 1; // +1 for newline
    }

    offset += Math.min(character, lines[line]?.length || 0);
    return offset;
  }

  /**
   * Convert offset in virtual file content to position
   */
  offsetToPosition(virtualUri: string, offset: number): { line: number; character: number } {
    const content = this.virtualFiles.get(virtualUri);
    if (!content) return { line: 0, character: 0 };

    const lines = content.split('\n');
    let currentOffset = 0;

    for (let line = 0; line < lines.length; line++) {
      const lineLength = lines[line].length;

      if (currentOffset + lineLength >= offset) {
        return {
          line,
          character: offset - currentOffset
        };
      }

      currentOffset += lineLength + 1; // +1 for newline
    }

    // Fallback to end of file
    return {
      line: lines.length - 1,
      character: lines[lines.length - 1]?.length || 0
    };
  }

  /**
   * Remove virtual file
   */
  removeVirtualFile(virtualUri: string): void {
    this.virtualFiles.delete(virtualUri);
    this.languageService.cleanupSemanticCache();
  }

  /**
   * Get all virtual file URIs
   */
  getVirtualFileUris(): string[] {
    return Array.from(this.virtualFiles.keys());
  }

  /**
   * Check if a URI is a virtual file
   */
  isVirtualFile(uri: string): boolean {
    return this.virtualFiles.has(uri);
  }

  /**
   * Get the content of a virtual file
   */
  getVirtualFileContent(virtualUri: string): string | undefined {
    return this.virtualFiles.get(virtualUri);
  }

  /**
   * Dispose the language service
   */
  dispose(): void {
    this.languageService.dispose();
    this.virtualFiles.clear();
  }
}