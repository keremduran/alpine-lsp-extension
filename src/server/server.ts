import {
  createConnection,
  TextDocuments,
  ProposedFeatures,
  InitializeParams,
  InitializeResult,
  TextDocumentSyncKind,
  CompletionParams,
  CompletionList,
  CompletionItem,
  CompletionItemKind,
  DefinitionParams,
  Definition,
  Location,
  Range,
  Position,
  Hover,
  HoverParams,
  Diagnostic,
  DiagnosticSeverity,
  MarkupKind
} from 'vscode-languageserver/node';

import { TextDocument } from 'vscode-languageserver-textdocument';
import { AlpineParser } from './alpineParser';
import { SimpleVirtualFileManager } from './simpleVirtualFile';
import { LineBasedTypeScriptService } from './lineBasedTypeScriptService';
import { transformHtmlToTypeScript, AlpineMapping } from './transform-html-to-ts-alpine';

// Helper functions
function mapTsCompletionKind(tsKind: string): CompletionItemKind {
  switch (tsKind) {
    case 'method': return CompletionItemKind.Method;
    case 'function': return CompletionItemKind.Function;
    case 'property': return CompletionItemKind.Property;
    case 'var':
    case 'let':
    case 'const': return CompletionItemKind.Variable;
    case 'class': return CompletionItemKind.Class;
    case 'interface': return CompletionItemKind.Interface;
    case 'enum': return CompletionItemKind.Enum;
    case 'keyword': return CompletionItemKind.Keyword;
    default: return CompletionItemKind.Text;
  }
}

const connection = createConnection(ProposedFeatures.all);
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

const alpineParser = new AlpineParser();
const virtualFileManager = new SimpleVirtualFileManager();
const virtualTsService = new LineBasedTypeScriptService();

connection.onInitialize((params: InitializeParams): InitializeResult => {
  return {
    capabilities: {
      textDocumentSync: TextDocumentSyncKind.Incremental,
      completionProvider: {
        resolveProvider: true,
        triggerCharacters: ['.', '"', "'", ' ', '@', '$']
      },
      definitionProvider: true,
      hoverProvider: true
    }
  };
});

connection.onCompletion(async (params: CompletionParams): Promise<CompletionList> => {
  connection.console.log('LINE-BASED: Completion requested at: ' + JSON.stringify(params.position));

  const document = documents.get(params.textDocument.uri);
  if (!document) {
    return { isIncomplete: false, items: [] };
  }

  try {
    // Parse Alpine components and directives
    const parsed = alpineParser.parseDocument(document);
    connection.console.log(`Found ${parsed.components.length} components, ${parsed.directives.length} directives`);

    // Generate simple line-based virtual file
    const virtualFile = virtualFileManager.generateVirtualFile(
      document,
      parsed.components,
      parsed.directives
    );
    connection.console.log('Virtual file created with ' + virtualFile.mappings.length + ' line mappings');

    // Update TypeScript service
    virtualTsService.updateVirtualFile(virtualFile);

    // Find which virtual line corresponds to this HTML position
    const mapping = virtualFileManager.findMappingForHtmlPosition(params.position, virtualFile.mappings);

    if (!mapping) {
      connection.console.log('Not in an Alpine expression');
      return { isIncomplete: false, items: [] };
    }

    // Find the actual virtual line by searching for the expression ID
    const virtualLine = virtualFileManager.findVirtualLineForExpressionId(mapping.expressionId, virtualFile.content);
    if (virtualLine === null) {
      connection.console.log('Expression ID not found in virtual file');
      return { isIncomplete: false, items: [] };
    }

    connection.console.log(`Mapped to expression ${mapping.expressionId} at virtual line ${virtualLine}: "${mapping.expression}"`);

    // Get TypeScript completions for this line
    const tsCompletions = virtualTsService.getCompletionsForVirtualLine(
      virtualFile.uri,
      virtualLine
    );

    if (!tsCompletions) {
      return { isIncomplete: false, items: [] };
    }

    // Convert to LSP format
    const completionItems: CompletionItem[] = tsCompletions.entries.map(entry => ({
      label: entry.name,
      kind: mapTsCompletionKind(entry.kind),
      detail: entry.kindModifiers ? `${entry.kind} ${entry.kindModifiers}` : entry.kind,
      sortText: entry.sortText,
      insertText: entry.insertText || entry.name
    }));

    connection.console.log(`Returning ${completionItems.length} completions`);
    return {
      isIncomplete: false,
      items: completionItems
    };

  } catch (error) {
    connection.console.error('Error in line-based completion: ' + String(error));
    return { isIncomplete: false, items: [] };
  }
});

connection.onDefinition((params: DefinitionParams): Definition | null => {
  // TODO: Implement line-based definition mapping
  return null;
/*
  const document = documents.get(params.textDocument.uri);
  if (!document) return null;

  try {
    // Parse Alpine components and directives
    const parsed = alpineParser.parseDocument(document);

    // Generate virtual TypeScript file
    const virtualFile = virtualFileManager.generateVirtualFile(
      document,
      parsed.components,
      parsed.directives
    );

    // Update virtual TypeScript service
    virtualTsService.updateVirtualFile(document, virtualFile);

    // Map HTML position to virtual file position
    const virtualPosition = null; // TODO: Implement mapping

    if (!virtualPosition) {
      return null;
    }

    // Convert position to offset
    const offset = virtualTsService.positionToOffset(
      virtualFile.uri,
      virtualPosition.line,
      virtualPosition.character
    );

    // Get TypeScript definition
    const tsDefinition = virtualTsService.getDefinition(virtualFile.uri, offset);

    if (!tsDefinition || tsDefinition.length === 0) {
      return null;
    }

    // Map back to HTML positions
    const locations: Location[] = [];

    for (const def of tsDefinition) {
      if (def.fileName === virtualFile.uri) {
        // Definition is in our virtual file, map back to HTML
        const defPosition = virtualTsService.offsetToPosition(virtualFile.uri, def.textSpan.start);
        const htmlPosition = virtualFileManager.mapVirtualToHtml(document.uri, defPosition);

        if (htmlPosition) {
          locations.push(Location.create(
            document.uri,
            Range.create(htmlPosition, htmlPosition)
          ));
        }
      }
    }

    return locations.length > 0 ? locations : null;

  } catch (error) {
    console.error('Error in definition:', error);
    return null;
  }
*/
});

connection.onHover((params: HoverParams): Hover | null => {
  const document = documents.get(params.textDocument.uri);
  if (!document) return null;

  try {
    // Get the HTML line content to see what we're actually hovering on
    const htmlLines = document.getText().split('\n');
    const hoverLine = htmlLines[params.position.line] || '';
    const hoverChar = hoverLine[params.position.character] || '';

    console.log(`🎯 HOVER DEBUG:`);
    console.log(`  HTML line ${params.position.line}, char ${params.position.character}`);
    console.log(`  Line content: "${hoverLine}"`);
    console.log(`  Character at position: "${hoverChar}"`);
    console.log(`  Context: "${hoverLine.substring(Math.max(0, params.position.character - 10), params.position.character + 10)}"`);

    // Use our new transformation system
    const transformation = transformHtmlToTypeScript(document.getText());

    // Find the mapping for this HTML position
    const mapping = transformation.mappings.find((m: AlpineMapping) =>
      m.htmlExpressionStart.line === params.position.line &&
      params.position.character >= m.htmlExpressionStart.character &&
      params.position.character <= m.htmlExpressionEnd.character
    );

    if (!mapping) {
      console.log(`❌ NO MAPPING FOUND`);
      console.log(`  Looking for expressions containing line ${params.position.line}, char ${params.position.character}`);
      const lineMatches = transformation.mappings.filter(m => m.htmlExpressionStart.line === params.position.line);
      if (lineMatches.length > 0) {
        console.log(`  Found ${lineMatches.length} expressions on this line:`);
        lineMatches.forEach(m => {
          console.log(`    ${m.expressionId}: chars ${m.htmlExpressionStart.character}-${m.htmlExpressionEnd.character} = "${m.expression}"`);
        });
      } else {
        console.log(`  No expressions found on line ${params.position.line}`);
      }
      return null;
    }

    console.log(`✅ FOUND MAPPING: ${mapping.expressionId}`);
    console.log(`  Expression: "${mapping.expression}"`);
    console.log(`  HTML range: line ${mapping.htmlExpressionStart.line}, chars ${mapping.htmlExpressionStart.character}-${mapping.htmlExpressionEnd.character}`);

    // Create a temporary TypeScript file with our generated content
    const tempFileUri = document.uri + '.alpine.ts';

    // Update TypeScript service with our generated content
    virtualTsService.updateFileContent(tempFileUri, transformation.tsContent);

    // Find the expression in the generated TypeScript
    const expressionStartMarker = `"${mapping.expressionId}_START";`;
    const lines = transformation.tsContent.split('\n');
    let expressionLineIndex = -1;

    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(expressionStartMarker)) {
        // The actual expression is on the next line or nearby
        for (let j = i + 1; j < Math.min(i + 5, lines.length); j++) {
          const line = lines[j];
          if (line.trim() && !line.includes('_START') && !line.includes('_END') && !line.includes('//')) {
            expressionLineIndex = j;
            break;
          }
        }
        break;
      }
    }

    if (expressionLineIndex === -1) {
      connection.console.log('❌ Could not find expression in generated TypeScript');
      return null;
    }


    // Calculate the character offset within the expression
    const htmlCharOffset = params.position.character - mapping.htmlExpressionStart.character;
    const expressionLine = lines[expressionLineIndex];
    const expressionContent = expressionLine.trim();

    // Find where the actual expression starts in the line (after indentation)
    const expressionStartInLine = expressionLine.indexOf(expressionContent);
    const tsPosition = expressionStartInLine + htmlCharOffset;

    console.log(`🔍 TYPESCRIPT QUERY:`);
    console.log(`  TS file: ${tempFileUri}`);
    console.log(`  TS line ${expressionLineIndex}: "${expressionLine}"`);
    console.log(`  TS character: ${tsPosition}`);
    console.log(`  Char at position: "${expressionLine[tsPosition] || 'EOF'}"`);

    // Get TypeScript hover information
    const tsHover = virtualTsService.getQuickInfoAtPosition(
      tempFileUri,
      expressionLineIndex,
      tsPosition
    );

    if (!tsHover) {
      console.log(`❌ NO TYPESCRIPT HOVER INFO`);
      return null;
    }

    console.log(`✅ TYPESCRIPT RESULT: ${tsHover}`);

    return {
      contents: {
        kind: MarkupKind.Markdown,
        value: `\`\`\`typescript\n${tsHover}\n\`\`\``
      },
      range: {
        start: { line: mapping.htmlExpressionStart.line, character: mapping.htmlExpressionStart.character },
        end: { line: mapping.htmlExpressionEnd.line, character: mapping.htmlExpressionEnd.character }
      }
    };

  } catch (error) {
    connection.console.error('❌ Hover error: ' + String(error));
    return null;
  }
/*
  const document = documents.get(params.textDocument.uri);
  if (!document) return null;

  try {
    // Parse Alpine components and directives
    const parsed = alpineParser.parseDocument(document);

    // Generate virtual TypeScript file
    const virtualFile = virtualFileManager.generateVirtualFile(
      document,
      parsed.components,
      parsed.directives
    );

    // Update virtual TypeScript service
    virtualTsService.updateVirtualFile(document, virtualFile);

    // Map HTML position to virtual file position
    const virtualPosition = null; // TODO: Implement mapping

    if (!virtualPosition) {
      return null;
    }

    // Convert position to offset
    const offset = virtualTsService.positionToOffset(
      virtualFile.uri,
      virtualPosition.line,
      virtualPosition.character
    );

    // Get TypeScript hover info
    const tsHover = virtualTsService.getHover(virtualFile.uri, offset);

    if (!tsHover) {
      return null;
    }

    // Convert to LSP format
    const hoverText = tsHover.displayParts?.map(part => part.text).join('') || '';
    const documentation = tsHover.documentation?.map(doc => doc.text).join('\n') || '';

    return {
      contents: {
        kind: MarkupKind.Markdown,
        value: `\`\`\`typescript\n${hoverText}\n\`\`\`${documentation ? `\n\n${documentation}` : ''}`
      }
    };

  } catch (error) {
    console.error('Error in hover:', error);
    return null;
  }
*/
});

// TODO: Implement line-based diagnostics
/*
documents.onDidChangeContent(async change => {
  const document = change.document;

  try {
    // Parse Alpine components and directives
    const parsed = alpineParser.parseDocument(document);

    // Generate virtual TypeScript file
    const virtualFile = virtualFileManager.generateVirtualFile(
      document,
      parsed.components,
      parsed.directives
    );

    // Update virtual TypeScript service
    virtualTsService.updateVirtualFile(document, virtualFile);

    // Get TypeScript diagnostics
    const tsDiagnostics = virtualTsService.getDiagnostics(virtualFile.uri);

    // Map diagnostics back to HTML
    const htmlDiagnostics: Diagnostic[] = [];

    for (const tsDiag of tsDiagnostics) {
      const startPos = virtualTsService.offsetToPosition(virtualFile.uri, tsDiag.start || 0);
      const htmlStart = virtualFileManager.mapVirtualToHtml(document.uri, startPos);

      if (htmlStart) {
        const endPos = virtualTsService.offsetToPosition(
          virtualFile.uri,
          (tsDiag.start || 0) + (tsDiag.length || 0)
        );
        const htmlEnd = virtualFileManager.mapVirtualToHtml(document.uri, endPos) || htmlStart;

        htmlDiagnostics.push({
          severity: mapTsDiagnosticSeverity(tsDiag.category),
          range: Range.create(htmlStart, htmlEnd),
          message: typeof tsDiag.messageText === 'string'
            ? tsDiag.messageText
            : tsDiag.messageText.messageText,
          source: 'Alpine LSP (TypeScript)'
        });
      }
    }

    connection.sendDiagnostics({ uri: document.uri, diagnostics: htmlDiagnostics });

  } catch (error) {
    console.error('Error in diagnostics:', error);
    connection.sendDiagnostics({ uri: document.uri, diagnostics: [] });
  }
});

function mapTsDiagnosticSeverity(category: any): DiagnosticSeverity {
  switch (category) {
    case 0: // Warning
      return DiagnosticSeverity.Warning;
    case 1: // Error
      return DiagnosticSeverity.Error;
    case 2: // Suggestion
      return DiagnosticSeverity.Hint;
    case 3: // Message
      return DiagnosticSeverity.Information;
    default:
      return DiagnosticSeverity.Error;
  }
}

  }
});
*/

documents.onDidClose(e => {
  // TODO: Clear virtual files when using line-based approach
});

documents.listen(connection);
connection.listen();

connection.console.log('Alpine.js LSP with Virtual TypeScript is active!');