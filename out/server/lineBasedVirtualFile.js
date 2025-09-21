"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineBasedVirtualFileManager = void 0;
class LineBasedVirtualFileManager {
    /**
     * Generate a simple line-based virtual TypeScript file
     * Each Alpine expression gets its own line for easy mapping
     */
    generateVirtualFile(document, components, directives) {
        const lines = [];
        const mappings = [];
        // Extract script functions first (like your test.ts)
        const scriptFunctions = this.extractScriptFunctions(document);
        scriptFunctions.forEach(func => {
            lines.push(func);
            lines.push('');
        });
        // Process each component like your testExpression() approach
        for (let i = 0; i < components.length; i++) {
            const component = components[i];
            const componentId = `component_${i}`;
            lines.push(`function ${componentId}() {`);
            if (component.xDataContent) {
                // Destructure the data directly like your example
                lines.push(`  const {${Array.from(component.variables.keys()).join(', ')}} = (${component.xDataContent});`);
                // Add Alpine magic properties to scope
                lines.push(`  const $el = document.createElement('div');`);
                lines.push(`  const $dispatch = (event, detail?) => {};`);
                lines.push(`  const $refs = {};`);
                lines.push('');
            }
            // Add each directive as a block statement like your test.ts
            const componentDirectives = directives.filter(d => this.isDirectiveInComponent(d, component));
            for (const directive of componentDirectives) {
                const htmlPosition = document.positionAt(directive.range.start);
                // Convert Alpine expression to proper TypeScript
                const tsExpression = this.convertAlpineToTypeScript(directive.value, directive.name);
                lines.push(`  ${tsExpression}; // ${directive.name}`);
                const virtualLine = lines.length - 1;
                mappings.push({
                    virtualLine,
                    htmlPosition,
                    expression: directive.value,
                    directiveName: directive.name,
                    componentId
                });
            }
            lines.push('}');
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
     * Map HTML position to virtual TypeScript line
     * Simple line-based mapping instead of complex character math!
     */
    mapHtmlToVirtual(htmlPosition, mappings) {
        console.log('Mapping HTML position:', htmlPosition);
        console.log('Available mappings:');
        mappings.forEach((m, i) => {
            console.log(`  ${i}: Line ${m.htmlPosition.line} "${m.expression}" -> Virtual line ${m.virtualLine}`);
        });
        // Find the closest mapping by line and character
        for (const mapping of mappings) {
            const htmlLine = mapping.htmlPosition.line;
            // Check if we're on the same line as this directive
            if (htmlLine === htmlPosition.line) {
                console.log('Found mapping:', mapping);
                return mapping;
            }
        }
        console.log('No mapping found for position');
        return null;
    }
    /**
     * Map virtual TypeScript line back to HTML position
     */
    mapVirtualToHtml(virtualLine, mappings) {
        return mappings.find(m => m.virtualLine === virtualLine) || null;
    }
    extractScriptFunctions(document) {
        const content = document.getText();
        const functions = [];
        // Find all script tags and extract function definitions
        const scriptTagRegex = /<script[^>]*>([\s\S]*?)<\/script>/gi;
        let scriptMatch;
        while ((scriptMatch = scriptTagRegex.exec(content)) !== null) {
            const scriptContent = scriptMatch[1];
            // Extract function definitions with proper brace matching
            const functionMatches = scriptContent.match(/function\s+\w+\s*\([^)]*\)\s*\{/g);
            if (functionMatches) {
                for (const match of functionMatches) {
                    const startIndex = scriptContent.indexOf(match);
                    const openBrace = startIndex + match.indexOf('{');
                    // Count braces to find the matching closing brace
                    let braceCount = 1;
                    let i = openBrace + 1;
                    while (i < scriptContent.length && braceCount > 0) {
                        if (scriptContent[i] === '{')
                            braceCount++;
                        else if (scriptContent[i] === '}')
                            braceCount--;
                        i++;
                    }
                    if (braceCount === 0) {
                        const functionText = scriptContent.substring(startIndex, i);
                        functions.push(functionText);
                    }
                }
            }
        }
        return functions;
    }
    convertAlpineToTypeScript(expression, directiveName) {
        // Convert Alpine expressions to proper TypeScript like test.ts
        // Handle x-for specially - convert "item in items" to "for(let item of items){}"
        if (directiveName === 'x-for') {
            const forMatch = expression.match(/(\w+)\s+in\s+(.+)/);
            if (forMatch) {
                const [, item, items] = forMatch;
                return `for(let ${item} of ${items}){}`;
            }
        }
        // For most directives, just wrap in block statement like test.ts
        if (directiveName.startsWith('@') || directiveName.startsWith('x-')) {
            return `{${expression}}`;
        }
        return `{${expression}}`;
    }
    isDirectiveInComponent(directive, component) {
        // Simple approach: check if directive belongs to this component via parentComponent
        return directive.parentComponent === component || component.directives.includes(directive);
    }
}
exports.LineBasedVirtualFileManager = LineBasedVirtualFileManager;
//# sourceMappingURL=lineBasedVirtualFile.js.map