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
exports.ExpressionParser = void 0;
const ts = __importStar(require("typescript"));
class ExpressionParser {
    /**
     * Parse a JavaScript expression and extract variable references
     * This uses TypeScript's AST parser instead of regex
     */
    parseExpression(expression) {
        const result = {
            identifiers: new Set(),
            literals: new Set(),
            memberAccesses: []
        };
        // Wrap expression in a function to make it valid TypeScript
        const wrappedCode = `(function() { return ${expression}; })`;
        try {
            const sourceFile = ts.createSourceFile('temp.ts', wrappedCode, ts.ScriptTarget.Latest, true);
            const visit = (node) => {
                // Identifier (variable name)
                if (ts.isIdentifier(node)) {
                    const text = node.getText(sourceFile);
                    // Check if it's not a property access (e.g., not the 'log' in console.log)
                    const parent = node.parent;
                    if (parent && ts.isPropertyAccessExpression(parent) && parent.name === node) {
                        // This is a property name, not a variable
                        return;
                    }
                    // Skip 'this' keyword
                    if (text !== 'this') {
                        result.identifiers.add(text);
                    }
                }
                // Numeric literal
                else if (ts.isNumericLiteral(node)) {
                    result.literals.add(node.getText(sourceFile));
                }
                // String literal
                else if (ts.isStringLiteral(node)) {
                    result.literals.add(node.getText(sourceFile));
                }
                // Boolean literal
                else if (node.kind === ts.SyntaxKind.TrueKeyword ||
                    node.kind === ts.SyntaxKind.FalseKeyword) {
                    result.literals.add(node.getText(sourceFile));
                }
                // Member access (e.g., console.log)
                else if (ts.isPropertyAccessExpression(node)) {
                    const memberAccess = node.getText(sourceFile);
                    result.memberAccesses.push(memberAccess);
                }
                ts.forEachChild(node, visit);
            };
            visit(sourceFile);
        }
        catch (error) {
            console.error('Failed to parse expression:', expression, error);
        }
        return result;
    }
    /**
     * Check if a string is a JavaScript keyword or global
     */
    isJavaScriptBuiltin(name) {
        const builtins = new Set([
            // Keywords
            'true', 'false', 'null', 'undefined', 'this', 'new', 'typeof', 'instanceof',
            'if', 'else', 'return', 'function', 'const', 'let', 'var', 'class', 'extends',
            'static', 'async', 'await', 'try', 'catch', 'finally', 'throw',
            // Global objects
            'console', 'window', 'document', 'Math', 'Array', 'Object', 'String',
            'Number', 'Boolean', 'Date', 'RegExp', 'Error', 'JSON', 'Promise',
            // Common browser globals
            'alert', 'confirm', 'prompt', 'setTimeout', 'setInterval', 'clearTimeout',
            'clearInterval', 'fetch', 'localStorage', 'sessionStorage'
        ]);
        return builtins.has(name);
    }
    /**
     * Extract variables used in x-for expressions
     */
    parseForExpression(expression) {
        // Parse "item in items" or "item, index in items"
        const match = expression.match(/^(\w+)(?:\s*,\s*(\w+))?\s+in\s+(.+)$/);
        if (match) {
            const iterators = [match[1]];
            if (match[2])
                iterators.push(match[2]);
            return {
                iterators,
                array: match[3].trim()
            };
        }
        return null;
    }
}
exports.ExpressionParser = ExpressionParser;
//# sourceMappingURL=expressionParser.js.map