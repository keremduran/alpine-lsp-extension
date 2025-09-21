"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleVirtualFileManager = void 0;
const ts = __importStar(require("typescript"));
class SimpleVirtualFileManager {
    /**
     * Generate clean virtual TypeScript file like test.ts
     * SIMPLE: One directive = One line = One mapping
     */
    generateVirtualFile(document, components, directives) {
        const lines = [];
        const mappings = [];
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
                // Alpine data is mutable - use let not const! Don't change this to const
                lines.push(`  let data = ${component.xDataContent};`);
                if (allProperties.length > 0) {
                    // Alpine properties are mutable - use let not const! Don't change this to const
                    lines.push(`  let {${allProperties.join(', ')}} = data;`);
                }
                else {
                    // Function-based x-data - properly type with ReturnType
                    lines.push(`  // Function-based x-data`);
                    // Extract variables from directives to know what to destructure
                    const usedVariables = this.extractVariablesFromDirectives(directives.filter(d => d.parentComponent === component || component.directives.includes(d)));
                    const allVars = [...new Set([...Array.from(component.variables.keys()), ...usedVariables])];
                    if (allVars.length > 0) {
                        // Alpine variables are mutable - use let not const! Don't change this to const
                        lines.push(`  let {${allVars.join(', ')}} = data;`);
                    }
                }
                lines.push('');
            }
            // Get directives for this component
            const componentDirectives = directives.filter(d => d.parentComponent === component || component.directives.includes(d));
            // Alpine expressions reference mutable data - use let not const! Don't change this to const
            lines.push(`  let expressionMap = {`);
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
                    }
                    else {
                        tsExpression = directive.value;
                    }
                }
                else {
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
    findMappingForHtmlPosition(htmlPosition, mappings) {
        // Find exact line match
        return mappings.find(m => m.htmlPosition.line === htmlPosition.line) || null;
    }
    /**
     * Find virtual line for expression ID in content
     */
    findVirtualLineForExpressionId(expressionId, virtualContent) {
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
    extractPropertiesUsingObjectKeys(xDataContent) {
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
        }
        catch (error) {
            console.error('Error evaluating x-data object:', error);
            // Fallback to regex if eval fails
            return this.extractAllPropertiesFromXData(xDataContent);
        }
    }
    extractScriptFunctionsWithTS(document) {
        const content = document.getText();
        const functions = [];
        // Find all script tags
        const scriptTagRegex = /<script[^>]*>([\s\S]*?)<\/script>/gi;
        let scriptMatch;
        while ((scriptMatch = scriptTagRegex.exec(content)) !== null) {
            const scriptContent = scriptMatch[1];
            try {
                // Use TypeScript to parse the JavaScript properly!
                const sourceFile = ts.createSourceFile('temp.js', scriptContent, ts.ScriptTarget.ES2020, true);
                // Extract function declarations
                const visit = (node) => {
                    if (ts.isFunctionDeclaration(node) && node.name) {
                        // Get the full function text
                        const functionText = scriptContent.substring(node.pos, node.end).trim();
                        functions.push(functionText);
                    }
                    ts.forEachChild(node, visit);
                };
                visit(sourceFile);
                console.log('Extracted functions with TypeScript parser:', functions);
            }
            catch (error) {
                console.error('Error parsing script with TypeScript:', error);
            }
        }
        return functions;
    }
    extractAllPropertiesFromXData(xDataContent) {
        const properties = [];
        try {
            // Match property names in object literal
            // Match: propertyName: or propertyName()
            const propertyRegex = /(\w+)\s*(?:\(.*?\)\s*{|:)/g;
            let match;
            while ((match = propertyRegex.exec(xDataContent)) !== null) {
                properties.push(match[1]);
            }
            console.log('Extracted properties from x-data:', properties);
        }
        catch (error) {
            console.error('Error parsing x-data:', error);
        }
        return [...new Set(properties)]; // Remove duplicates
    }
    extractVariablesFromDirectives(directives) {
        const variables = [];
        for (const directive of directives) {
            // Simple regex to extract identifiers from expressions
            const identifiers = directive.value.match(/\b[a-zA-Z_$][a-zA-Z0-9_$]*\b/g) || [];
            variables.push(...identifiers.filter(id => 
            // Filter out JavaScript keywords and common functions
            !['true', 'false', 'null', 'undefined', 'return', 'if', 'else', 'for', 'while', 'function', 'this'].includes(id)));
        }
        return [...new Set(variables)]; // Remove duplicates
    }
}
exports.SimpleVirtualFileManager = SimpleVirtualFileManager;
function component_0() {
    const data = {
        company: {
            name: 'TechCorp',
            info: {
                address: {
                    street: '123 Main St',
                    city: 'San Francisco',
                    state: 'CA',
                    country: {
                        code: 'US',
                        name: 'United States',
                        continent: 'North America'
                    }
                },
                contact: {
                    phone: {
                        main: '+1-555-0100',
                        support: '+1-555-0199',
                        fax: '+1-555-0101'
                    },
                    email: {
                        general: 'info@techcorp.com',
                        support: 'support@techcorp.com',
                        sales: 'sales@techcorp.com'
                    }
                }
            },
            departments: {
                engineering: {
                    head: 'John Doe',
                    budget: 1000000,
                    teams: {
                        frontend: {
                            lead: 'Jane Smith',
                            members: 5,
                            projects: ['Website', 'Mobile App']
                        },
                        backend: {
                            lead: 'Bob Johnson',
                            members: 8,
                            projects: ['API', 'Database', 'Microservices']
                        }
                    }
                },
                marketing: {
                    head: 'Alice Brown',
                    budget: 500000,
                    campaigns: {
                        active: ['Summer Sale', 'Product Launch'],
                        planned: ['Black Friday', 'Holiday Season']
                    }
                }
            }
        }
    };
    const { company } = data;
    const expressionMap = {
        "expr_63_18": () => { company.name; }, // x-text
        "expr_64_18": () => { company.info.address.street; }, // x-text
        "expr_65_18": () => { company.info.address.city; }, // x-text
        "expr_66_18": () => { company.info.address.country.name; }, // x-text
        "expr_67_18": () => { company.info.address.country.continent; }, // x-text
        "expr_68_18": () => { company.info.contact.phone.main; }, // x-text
        "expr_69_18": () => { company.info.contact.email.support; }, // x-text
        "expr_70_18": () => { company.departments.engineering.head; }, // x-text
        "expr_71_18": () => { company.departments.engineering.teams.frontend.lead; }, // x-text
        "expr_72_18": () => { company.departments.engineering.teams.frontend.members; }, // x-text
        "expr_75_24": () => { for (let project of company.departments.engineering.teams.frontend.projects) { } }, // x-for
        "expr_76_23": () => { }, // x-text
    };
}
//# sourceMappingURL=simpleVirtualFile.js.map