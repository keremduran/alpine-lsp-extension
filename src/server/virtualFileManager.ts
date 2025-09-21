import { TextDocument, Position, Range } from 'vscode-languageserver-textdocument';
import { AlpineComponent, AlpineDirective } from './alpineParser';

export interface VirtualFile {
  uri: string;
  content: string;
  mappings: PositionMapping[];
}

export interface PositionMapping {
  // Original HTML position
  htmlStart: Position;
  htmlEnd: Position;
  htmlText: string;

  // Virtual TypeScript position
  virtualStart: Position;
  virtualEnd: Position;
  virtualText: string;

  // Context info
  componentId: string;
  directiveName: string;
}

export class AlpineVirtualFileManager {
  private virtualFiles = new Map<string, VirtualFile>();
  private positionMappings = new Map<string, PositionMapping[]>();

  /**
   * Generate a virtual TypeScript file for Alpine components
   */
  generateVirtualFile(document: TextDocument, components: AlpineComponent[], directives: AlpineDirective[]): VirtualFile {
    const htmlUri = document.uri;
    const virtualUri = this.getVirtualUri(htmlUri);

    let virtualContent = '';
    let currentLine = 0;
    const mappings: PositionMapping[] = [];

    // Add type definitions
    virtualContent += this.generateTypeDefinitions();
    currentLine += this.countLines(virtualContent);

    // Process each component
    components.forEach((component, componentIndex) => {
      const componentId = `component_${componentIndex}`;

      // Generate interface for this component
      const componentInterface = this.generateComponentInterface(component, componentId);
      virtualContent += '\n' + componentInterface;
      currentLine += this.countLines(componentInterface);

      // Generate component instance
      const componentInstance = `\nconst ${componentId}: ${componentId.charAt(0).toUpperCase() + componentId.slice(1)}Type = null!;\n`;
      virtualContent += componentInstance;
      currentLine += this.countLines(componentInstance);

      // Process directives for this component
      const componentDirectives = directives.filter(d => d.parentComponent === component);

      componentDirectives.forEach((directive, directiveIndex) => {
        const expressionComment = `\n// ${directive.name}="${directive.value}"\n`;
        virtualContent += expressionComment;
        currentLine += this.countLines(expressionComment);

        // Convert Alpine expression to TypeScript
        const { tsExpression, mapping } = this.convertAlpineExpressionToTS(
          directive,
          componentId,
          document,
          currentLine
        );

        virtualContent += tsExpression + ';\n';

        if (mapping) {
          mappings.push(mapping);
        }

        currentLine += this.countLines(tsExpression + ';\n');
      });
    });

    const virtualFile: VirtualFile = {
      uri: virtualUri,
      content: virtualContent,
      mappings
    };

    this.virtualFiles.set(htmlUri, virtualFile);
    this.positionMappings.set(htmlUri, mappings);

    return virtualFile;
  }

  /**
   * Map position from HTML to virtual TypeScript file
   */
  mapHtmlToVirtual(htmlUri: string, htmlPosition: Position): Position | null {
    const mappings = this.positionMappings.get(htmlUri);
    if (!mappings) return null;

    for (const mapping of mappings) {
      if (this.isPositionInRange(htmlPosition, mapping.htmlStart, mapping.htmlEnd)) {
        // Calculate offset within the HTML range
        const htmlOffset = this.getOffsetInRange(htmlPosition, mapping.htmlStart, mapping.htmlEnd);
        // Apply same offset to virtual range
        return this.applyOffsetToPosition(mapping.virtualStart, htmlOffset, mapping.virtualText.length);
      }
    }

    return null;
  }

  /**
   * Map position from virtual TypeScript back to HTML
   */
  mapVirtualToHtml(htmlUri: string, virtualPosition: Position): Position | null {
    const mappings = this.positionMappings.get(htmlUri);
    if (!mappings) return null;

    for (const mapping of mappings) {
      if (this.isPositionInRange(virtualPosition, mapping.virtualStart, mapping.virtualEnd)) {
        // Calculate offset within the virtual range
        const virtualOffset = this.getOffsetInRange(virtualPosition, mapping.virtualStart, mapping.virtualEnd);
        // Apply same offset to HTML range
        return this.applyOffsetToPosition(mapping.htmlStart, virtualOffset, mapping.htmlText.length);
      }
    }

    return null;
  }

  private generateTypeDefinitions(): string {
    return `// Alpine.js Type Definitions
interface AlpineMagicProperties {
  $el: HTMLElement;
  $refs: Record<string, HTMLElement | HTMLElement[]>;
  $store: any;
  $watch: (property: string, callback: (value: any, oldValue: any) => void) => void;
  $dispatch: (event: string, detail?: any) => void;
  $nextTick: (callback: () => void) => void;
  $root: HTMLElement;
}

`;
  }

  private generateComponentInterface(component: AlpineComponent, componentId: string): string {
    const typeName = componentId.charAt(0).toUpperCase() + componentId.slice(1) + 'Type';
    let interfaceBody = '';

    // Add component variables
    component.variables.forEach((variable, name) => {
      if (!name.startsWith('_')) {
        interfaceBody += `  ${name}: ${this.mapAlpineTypeToTS(variable.type)};\n`;
      }
    });

    // Add component methods
    component.methods.forEach((method, name) => {
      interfaceBody += `  ${name}: () => any;\n`;
    });

    return `interface ${typeName} extends AlpineMagicProperties {
${interfaceBody}}`;
  }

  private convertAlpineExpressionToTS(
    directive: AlpineDirective,
    componentId: string,
    document: TextDocument,
    currentVirtualLine: number
  ): { tsExpression: string, mapping: PositionMapping | null } {
    const expression = directive.value;

    // SIMPLIFIED: Just wrap expression in component context
    // This is much simpler than trying to parse different directive types
    const tsExpression = `(function() { with(${componentId}) { return (${expression}); } })()`;

    // Create position mapping - map the entire expression
    const htmlStart = document.positionAt(directive.range.start);
    const htmlEnd = document.positionAt(directive.range.end);

    // Find where the actual expression starts in the virtual TS
    const expressionStartInVirtual = tsExpression.indexOf(expression);

    const mapping: PositionMapping = {
      htmlStart,
      htmlEnd,
      htmlText: expression,
      virtualStart: { line: currentVirtualLine, character: expressionStartInVirtual },
      virtualEnd: { line: currentVirtualLine, character: expressionStartInVirtual + expression.length },
      virtualText: expression, // Just the expression part
      componentId,
      directiveName: directive.name
    };

    return { tsExpression, mapping };
  }

  private prefixWithComponent(expression: string, componentId: string): string {
    // Simple approach: wrap in function with component context
    return `(function() {
      with (${componentId}) {
        return ${expression};
      }
    })()`;
  }

  private mapAlpineTypeToTS(alpineType: string): string {
    switch (alpineType) {
      case 'string': return 'string';
      case 'number': return 'number';
      case 'boolean': return 'boolean';
      case 'array': return 'any[]';
      case 'object': return 'Record<string, any>';
      default: return 'any';
    }
  }

  private getVirtualUri(htmlUri: string): string {
    return htmlUri.replace(/\.(html|astro)$/, '.alpine.ts');
  }

  private countLines(text: string): number {
    return (text.match(/\n/g) || []).length;
  }

  private isPositionInRange(position: Position, start: Position, end: Position): boolean {
    if (position.line < start.line || position.line > end.line) {
      return false;
    }
    if (position.line === start.line && position.character < start.character) {
      return false;
    }
    if (position.line === end.line && position.character > end.character) {
      return false;
    }
    return true;
  }

  private getOffsetInRange(position: Position, start: Position, end: Position): number {
    if (position.line === start.line) {
      return position.character - start.character;
    }
    // Multi-line ranges - simplified for now
    return 0;
  }

  private applyOffsetToPosition(start: Position, offset: number, maxLength: number): Position {
    const actualOffset = Math.min(offset, maxLength);
    return {
      line: start.line,
      character: start.character + actualOffset
    };
  }

  getVirtualFile(htmlUri: string): VirtualFile | undefined {
    return this.virtualFiles.get(htmlUri);
  }

  clearVirtualFile(htmlUri: string): void {
    this.virtualFiles.delete(htmlUri);
    this.positionMappings.delete(htmlUri);
  }
}