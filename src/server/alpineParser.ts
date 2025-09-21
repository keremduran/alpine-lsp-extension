import { TextDocument, Position } from 'vscode-languageserver-textdocument';
import { getLanguageService as getHTMLLanguageService, HTMLDocument, TokenType } from 'vscode-html-languageservice';

export interface AlpineComponent {
  element: string;
  xDataRange?: { start: number; end: number };
  xDataContent?: string;
  variables: Map<string, { name: string; type: string; value?: any }>;
  methods: Map<string, { name: string; params: string[] }>;
  directives: AlpineDirective[];
}

export interface AlpineDirective {
  name: string;
  value: string;
  range: { start: number; end: number };
  parentComponent?: AlpineComponent;
}

export class AlpineParser {
  private htmlService = getHTMLLanguageService();
  private components: AlpineComponent[] = [];
  private directives: AlpineDirective[] = [];

  parseDocument(document: TextDocument): { components: AlpineComponent[], directives: AlpineDirective[] } {
    this.components = [];
    this.directives = [];

    const text = document.getText();
    const htmlDoc = this.htmlService.parseHTMLDocument(document);

    // First, extract any script content for function resolution
    const scriptFunctions = this.extractScriptFunctions(text);

    this.extractAlpineData(htmlDoc, text);

    // Resolve function calls in x-data
    this.components.forEach(component => {
      const functionCall = component.variables.get('_function_call');
      if (functionCall && functionCall.type === 'function_call') {
        const functionDef = scriptFunctions.get(functionCall.name);
        if (functionDef) {
          // Clear the placeholder
          component.variables.delete('_function_call');
          // Parse the function's return value
          this.parseObjectLiteral(functionDef, component);
        }
      }
    });

    return {
      components: this.components,
      directives: this.directives
    };
  }

  private extractAlpineData(htmlDoc: HTMLDocument, text: string) {
    const scanner = this.htmlService.createScanner(text);
    let token = scanner.scan();

    let currentTag = '';
    let currentAttrName = '';
    let componentsStack: AlpineComponent[] = [];

    while (token !== TokenType.EOS) {
      switch (token) {
        case TokenType.StartTag:
          currentTag = scanner.getTokenText();
          break;

        case TokenType.AttributeName:
          currentAttrName = scanner.getTokenText();
          break;

        case TokenType.AttributeValue:
          if (this.isAlpineDirective(currentAttrName)) {
            const value = this.unquoteValue(scanner.getTokenText());
            const start = scanner.getTokenOffset();
            const end = scanner.getTokenEnd();

            if (currentAttrName === 'x-data') {
              const component = this.parseXData(value, start, end, currentTag);
              this.components.push(component);
              componentsStack.push(component);
            } else {
              const directive: AlpineDirective = {
                name: currentAttrName,
                value: value,
                range: { start, end },
                parentComponent: componentsStack[componentsStack.length - 1]
              };
              this.directives.push(directive);

              if (componentsStack.length > 0) {
                componentsStack[componentsStack.length - 1].directives.push(directive);
              }
            }
          }
          break;

        case TokenType.EndTag:
          // Pop component stack if needed
          if (componentsStack.length > 0 && componentsStack[componentsStack.length - 1].element === scanner.getTokenText()) {
            componentsStack.pop();
          }
          break;
      }
      token = scanner.scan();
    }
  }

  private parseXData(value: string, start: number, end: number, element: string): AlpineComponent {
    const component: AlpineComponent = {
      element,
      xDataRange: { start, end },
      xDataContent: value,
      variables: new Map(),
      methods: new Map(),
      directives: []
    };

    // Parse x-data content
    try {
      // Handle object literal: { count: 0, message: 'hello' }
      if (value.trim().startsWith('{')) {
        this.parseObjectLiteral(value, component);
      }
      // Handle function call: counter()
      else if (value.match(/^[a-zA-Z_]\w*\s*\(\s*\)$/)) {
        const functionName = value.split('(')[0].trim();
        // Mark this as a function call that needs resolution
        component.variables.set('_function_call', {
          name: functionName,
          type: 'function_call'
        });
      }
      // Handle inline arrow function: () => ({ count: 0 })
      else if (value.includes('=>')) {
        // Try to parse the return value
        const arrowMatch = value.match(/\(.*?\)\s*=>\s*(\{[\s\S]*\}|\([\s\S]*\))/);
        if (arrowMatch) {
          let returnValue = arrowMatch[1];
          // Remove wrapping parentheses if present
          if (returnValue.startsWith('(') && returnValue.endsWith(')')) {
            returnValue = returnValue.slice(1, -1);
          }
          this.parseObjectLiteral(returnValue, component);
        }
      }
    } catch (e) {
      console.error('Error parsing x-data:', e);
    }

    return component;
  }

  private parseObjectLiteral(value: string, component: AlpineComponent) {
    // First, find shorthand methods: methodName() { ... }
    const shorthandMethodRegex = /(\w+)\s*\([^)]*\)\s*\{[^}]*\}/g;
    let match;

    const methodNames = new Set<string>();
    while ((match = shorthandMethodRegex.exec(value)) !== null) {
      const methodName = match[1];
      component.methods.set(methodName, {
        name: methodName,
        params: []
      });
      methodNames.add(methodName);
    }

    // Then find regular properties: name: value
    const propRegex = /(\w+)\s*:\s*([^,}]+(?:\{[^}]*\})?[^,}]*)/g;

    while ((match = propRegex.exec(value)) !== null) {
      const propName = match[1];

      // Skip if already identified as method
      if (methodNames.has(propName)) continue;

      const propValue = match[2].trim();

      // It's a method if value contains function keyword or arrow function
      if (propValue.includes('function') || propValue.includes('=>')) {
        component.methods.set(propName, {
          name: propName,
          params: []
        });
      } else {
        // It's a variable
        let type = 'any';
        if (propValue === 'true' || propValue === 'false') type = 'boolean';
        else if (!isNaN(Number(propValue))) type = 'number';
        else if (propValue.startsWith('"') || propValue.startsWith("'")) type = 'string';
        else if (propValue.startsWith('[')) type = 'array';
        else if (propValue.startsWith('{')) type = 'object';

        component.variables.set(propName, {
          name: propName,
          type,
          value: propValue
        });
      }
    }
  }

  private extractScriptFunctions(text: string): Map<string, string> {
    const functions = new Map<string, string>();

    // Find all script tags
    const scriptRegex = /<script[^>]*>([\s\S]*?)<\/script>/gi;
    let scriptMatch;

    while ((scriptMatch = scriptRegex.exec(text)) !== null) {
      const scriptContent = scriptMatch[1];

      // Find function declarations that return objects
      // Match: function name() { return { ... } }
      const funcRegex = /function\s+(\w+)\s*\([^)]*\)\s*\{[\s\S]*?return\s+(\{[\s\S]*?\})(?=\s*\})/g;
      let funcMatch;

      while ((funcMatch = funcRegex.exec(scriptContent)) !== null) {
        const functionName = funcMatch[1];
        const returnObject = funcMatch[2];
        functions.set(functionName, returnObject);
      }

      // Also match arrow functions assigned to const/let/var
      // Match: const name = () => ({ ... }) or const name = () => { return { ... } }
      const arrowRegex = /(?:const|let|var)\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*(?:\((\{[\s\S]*?\})\)|(?:\{[\s\S]*?return\s+(\{[\s\S]*?\})[\s\S]*?\}))/g;
      let arrowMatch;

      while ((arrowMatch = arrowRegex.exec(scriptContent)) !== null) {
        const functionName = arrowMatch[1];
        const returnObject = arrowMatch[2] || arrowMatch[3];
        if (returnObject) {
          functions.set(functionName, returnObject);
        }
      }
    }

    return functions;
  }

  private isAlpineDirective(attr: string): boolean {
    return /^(x-data|x-show|x-if|x-for|x-text|x-html|x-model|x-modelable|x-effect|x-ignore|x-ref|x-cloak|x-teleport|x-intersect|x-init|x-transition|@\w+|x-on:\w+)/.test(attr);
  }

  private unquoteValue(value: string): string {
    if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
      return value.slice(1, -1);
    }
    return value;
  }

  findComponentAtPosition(document: TextDocument, position: Position): AlpineComponent | undefined {
    const parsed = this.parseDocument(document);
    const offset = document.offsetAt(position);

    // Find the component that contains this position
    for (const component of parsed.components) {
      if (component.xDataRange &&
          offset >= component.xDataRange.start &&
          offset <= component.xDataRange.end) {
        return component;
      }
    }

    // Check if position is in any directive
    for (const directive of parsed.directives) {
      if (offset >= directive.range.start && offset <= directive.range.end) {
        return directive.parentComponent;
      }
    }

    return undefined;
  }
}