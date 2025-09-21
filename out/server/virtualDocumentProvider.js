"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualDocumentProvider = void 0;
class VirtualDocumentProvider {
    /**
     * Creates a virtual TypeScript document with Alpine component context
     */
    createVirtualDocument(component, directive) {
        const contextType = this.generateContextType(component);
        const expression = directive.value;
        // Create a virtual TypeScript document that represents the Alpine scope
        return `
${contextType}

// Alpine magic properties
interface AlpineMagic {
  $el: HTMLElement;
  $refs: Record<string, HTMLElement | HTMLElement[]>;
  $store: any;
  $watch: (property: string, callback: (value: any, oldValue: any) => void) => void;
  $dispatch: (event: string, detail?: any) => void;
  $nextTick: (callback: () => void) => void;
  $root: HTMLElement;
}

// Combined context
type AlpineContext = AlpineComponent & AlpineMagic;

// Expression handler with proper 'this' context
function __alpineExpression(this: AlpineContext) {
  ${this.wrapExpression(expression, directive.name)}
}

// Make variables available without 'this' prefix (Alpine's magic)
${this.generateVariableDeclarations(component)}
`;
    }
    generateContextType(component) {
        let properties = [];
        // Add variables
        component.variables.forEach((variable, name) => {
            if (!name.startsWith('_')) {
                properties.push(`  ${name}: ${this.tsType(variable.type)};`);
            }
        });
        // Add methods
        component.methods.forEach((method, name) => {
            properties.push(`  ${name}: () => void;`);
        });
        return `interface AlpineComponent {
${properties.join('\n')}
}`;
    }
    generateVariableDeclarations(component) {
        let declarations = [];
        component.variables.forEach((variable, name) => {
            if (!name.startsWith('_')) {
                declarations.push(`declare const ${name}: AlpineContext['${name}'];`);
            }
        });
        component.methods.forEach((method, name) => {
            declarations.push(`declare const ${name}: AlpineContext['${name}'];`);
        });
        // Add magic properties as globals
        declarations.push(`declare const $el: AlpineMagic['$el'];`);
        declarations.push(`declare const $refs: AlpineMagic['$refs'];`);
        declarations.push(`declare const $store: AlpineMagic['$store'];`);
        declarations.push(`declare const $watch: AlpineMagic['$watch'];`);
        declarations.push(`declare const $dispatch: AlpineMagic['$dispatch'];`);
        declarations.push(`declare const $nextTick: AlpineMagic['$nextTick'];`);
        declarations.push(`declare const $root: AlpineMagic['$root'];`);
        return declarations.join('\n');
    }
    wrapExpression(expression, directiveName) {
        // Different directives need different handling
        if (directiveName === 'x-for') {
            // x-for="item in items" needs special handling
            const match = expression.match(/^(\w+)(?:\s*,\s*(\w+))?\s+in\s+(.+)$/);
            if (match) {
                const [, item, index, array] = match;
                return `
  for (const ${item} of ${array}) {
    ${index ? `const ${index} = 0;` : ''}
    // Loop body
  }`;
            }
        }
        // For most directives, just return the expression
        return expression;
    }
    tsType(type) {
        switch (type) {
            case 'string': return 'string';
            case 'number': return 'number';
            case 'boolean': return 'boolean';
            case 'array': return 'any[]';
            case 'object': return 'Record<string, any>';
            default: return 'any';
        }
    }
    /**
     * Maps a position in the virtual document back to the original document
     */
    mapToOriginalPosition(virtualOffset, expression) {
        // Find where the expression starts in the virtual document
        const virtualDoc = this.createVirtualDocument({
            element: '',
            variables: new Map(),
            methods: new Map(),
            directives: []
        }, {
            name: '',
            value: expression,
            range: { start: 0, end: expression.length }
        });
        const expressionStart = virtualDoc.indexOf(expression);
        if (expressionStart === -1)
            return 0;
        // Calculate offset within the expression
        const offsetInExpression = virtualOffset - expressionStart;
        return Math.max(0, Math.min(offsetInExpression, expression.length));
    }
}
exports.VirtualDocumentProvider = VirtualDocumentProvider;
//# sourceMappingURL=virtualDocumentProvider.js.map