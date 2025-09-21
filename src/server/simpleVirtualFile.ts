import { TextDocument, Position } from 'vscode-languageserver-textdocument';
import { AlpineComponent, AlpineDirective } from './alpineParser';
import * as ts from 'typescript';

export interface SimpleMapping {
  expressionId: string;  // Use ID instead of line number!
  htmlPosition: Position;
  expression: string;
  directiveName: string;
}

export interface SimpleVirtualFile {
  uri: string;
  content: string;
  mappings: SimpleMapping[];
}

export class SimpleVirtualFileManager {

  /**
   * Generate clean virtual TypeScript file like test.ts
   * SIMPLE: One directive = One line = One mapping
   */
  generateVirtualFile(
    document: TextDocument,
    components: AlpineComponent[],
    directives: AlpineDirective[]
  ): SimpleVirtualFile {

    const lines: string[] = [];
    const mappings: SimpleMapping[] = [];

    // Extract script functions and add them FIRST so they're available for type inference
    const scriptFunctions = this.extractScriptFunctionsWithTS(document);
    scriptFunctions.forEach(func => {
      lines.push(func);
      lines.push('');
    });

    // Process each component after functions are defined
    for (let i = 0; i < components.length; i++) {
      const component = components[i];

      lines.push(`function component_${i}() {`);

      if (component.xDataContent) {
        // Evaluate the x-data object to get ALL keys using Object.keys()
        const allProperties = this.extractPropertiesUsingObjectKeys(component.xDataContent);
        lines.push(`  const data = (${component.xDataContent});`);

        if (allProperties.length > 0) {
          // We know the properties, destructure them
          lines.push(`  let {${allProperties.join(', ')}} = data;`);
        } else {
          // Function-based x-data - properly type with ReturnType
          lines.push(`  // Function-based x-data`);

          // Extract variables from directives to know what to destructure
          const usedVariables = this.extractVariablesFromDirectives(directives.filter(d =>
            d.parentComponent === component || component.directives.includes(d)
          ));
          const allVars = [...new Set([...Array.from(component.variables.keys()), ...usedVariables])];

          if (allVars.length > 0) {
            // Simple destructuring - let TypeScript infer the types naturally
            lines.push(`  let {${allVars.join(', ')}} = data;`);
          }
        }
        lines.push('');
      }

      // Get directives for this component
      const componentDirectives = directives.filter(d =>
        d.parentComponent === component || component.directives.includes(d)
      );

      // Create expression map with unique IDs
      lines.push(`  const expressionMap = {`);

      for (const directive of componentDirectives) {
        const htmlPosition = document.positionAt(directive.range.start);

        // Create unique ID based on HTML position
        const expressionId = `expr_${htmlPosition.line}_${htmlPosition.character}`;

        // Convert expression to TypeScript
        let tsExpression;
        if (directive.name === 'x-for') {
          const forMatch = directive.value.match(/(\w+)\s+in\s+(.+)/);
          if (forMatch) {
            const [, item, items] = forMatch;
            tsExpression = `for(let ${item} of ${items}){}`;
          } else {
            tsExpression = directive.value;
          }
        } else {
          tsExpression = directive.value;
        }

        // Add to expression map
        lines.push(`    "${expressionId}": () => { ${tsExpression} }, // ${directive.name}`);

        // Map using the expression ID - NO LINE NUMBERS!
        mappings.push({
          expressionId,
          htmlPosition,
          expression: directive.value,
          directiveName: directive.name
        });
      }

      lines.push(`  };`);

      lines.push('}'); // Close function
      lines.push('');
    }

    const uri = document.uri.replace('.html', '.alpine.ts');
    return {
      uri,
      content: lines.join('\n'),
      mappings
    };
  }

  /**
   * Find mapping for HTML position
   */
  findMappingForHtmlPosition(htmlPosition: Position, mappings: SimpleMapping[]): SimpleMapping | null {
    // Find exact line match
    return mappings.find(m => m.htmlPosition.line === htmlPosition.line) || null;
  }

  /**
   * Find virtual line for expression ID in content
   */
  findVirtualLineForExpressionId(expressionId: string, virtualContent: string): number | null {
    const lines = virtualContent.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(`"${expressionId}":`)) {
        return i;
      }
    }
    return null;
  }

  /**
   * Actually parse the x-data object to extract ALL property names
   * No hardcoding bullshit!
   */
  private extractPropertiesUsingObjectKeys(xDataContent: string): string[] {
    try {
      // Check if it's a function call (like counter())
      if (xDataContent.trim().match(/^\w+\(\)$/)) {
        console.log('Function-based x-data detected, cannot extract keys:', xDataContent);
        // For function calls, we can't determine keys without executing
        // Return empty array - we'll handle this in the virtual file generation
        return [];
      }

      // Actually evaluate the object literal and use Object.keys()!
      const dataObject = eval(`(${xDataContent})`);
      const keys = Object.keys(dataObject);
      console.log('Extracted properties using Object.keys():', keys);
      return keys;
    } catch (error) {
      console.error('Error evaluating x-data object:', error);
      // Fallback to regex if eval fails
      return this.extractAllPropertiesFromXData(xDataContent);
    }
  }

  private extractScriptFunctionsWithTS(document: TextDocument): string[] {
    const content = document.getText();
    const functions: string[] = [];

    // Find all script tags
    const scriptTagRegex = /<script[^>]*>([\s\S]*?)<\/script>/gi;
    let scriptMatch;

    while ((scriptMatch = scriptTagRegex.exec(content)) !== null) {
      const scriptContent = scriptMatch[1];

      try {
        // Use TypeScript to parse the JavaScript properly!
        const sourceFile = ts.createSourceFile(
          'temp.js',
          scriptContent,
          ts.ScriptTarget.ES2020,
          true
        );

        // Extract function declarations
        const visit = (node: ts.Node) => {
          if (ts.isFunctionDeclaration(node) && node.name) {
            // Get the full function text
            const functionText = scriptContent.substring(node.pos, node.end).trim();
            functions.push(functionText);
          }
          ts.forEachChild(node, visit);
        };

        visit(sourceFile);

        console.log('Extracted functions with TypeScript parser:', functions);

      } catch (error) {
        console.error('Error parsing script with TypeScript:', error);
      }
    }

    return functions;
  }

  private extractAllPropertiesFromXData(xDataContent: string): string[] {
    const properties: string[] = [];

    try {
      // Match property names in object literal
      // Match: propertyName: or propertyName()
      const propertyRegex = /(\w+)\s*(?:\(.*?\)\s*{|:)/g;
      let match;

      while ((match = propertyRegex.exec(xDataContent)) !== null) {
        properties.push(match[1]);
      }

      console.log('Extracted properties from x-data:', properties);

    } catch (error) {
      console.error('Error parsing x-data:', error);
    }

    return [...new Set(properties)]; // Remove duplicates
  }

  private extractVariablesFromDirectives(directives: AlpineDirective[]): string[] {
    const variables: string[] = [];

    for (const directive of directives) {
      // Simple regex to extract identifiers from expressions
      const identifiers = directive.value.match(/\b[a-zA-Z_$][a-zA-Z0-9_$]*\b/g) || [];
      variables.push(...identifiers.filter(id =>
        // Filter out JavaScript keywords and common functions
        !['true', 'false', 'null', 'undefined', 'return', 'if', 'else', 'for', 'while', 'function', 'this'].includes(id)
      ));
    }

    return [...new Set(variables)]; // Remove duplicates
  }
}