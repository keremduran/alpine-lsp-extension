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
    // Parse and generate virtual file
    const parsed = alpineParser.parseDocument(document);
    const virtualFile = virtualFileManager.generateVirtualFile(document, parsed.components, parsed.directives);

    // Update TypeScript service with clean virtual file
    virtualTsService.updateVirtualFile(virtualFile);

    // Find mapping using simple approach
    const mapping = virtualFileManager.findMappingForHtmlPosition(params.position, virtualFile.mappings);
    if (!mapping) return null;

    // Find the actual virtual line by searching for the expression ID
    const virtualLine = virtualFileManager.findVirtualLineForExpressionId(mapping.expressionId, virtualFile.content);
    if (virtualLine === null) return null;

    console.log('Simple mapping found:', mapping);
    console.log('Virtual line for expression:', virtualLine);

    // Calculate which character in the expression we're hovering on
    const expressionStartInHtml = mapping.htmlPosition.character;
    const hoverCharInHtml = params.position.character;
    const charOffsetInExpression = hoverCharInHtml - expressionStartInHtml;

    console.log(`Hover at HTML char ${hoverCharInHtml}, expression starts at ${expressionStartInHtml}, offset: ${charOffsetInExpression}`);

    // Get TypeScript hover for the specific character position
    const tsHover = virtualTsService.getHoverForVirtualLineAtChar(
      virtualFile.uri,
      virtualLine,
      mapping.expression,
      charOffsetInExpression
    );
    if (!tsHover) return null;

    return {
      contents: {
        kind: MarkupKind.Markdown,
        value: `\`\`\`typescript\n${tsHover}\n\`\`\``
      }
    };
  } catch (error) {
    console.error('Hover error:', error);
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