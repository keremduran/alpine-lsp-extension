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
exports.LineBasedTypeScriptService = void 0;
const ts = __importStar(require("typescript"));
class LineBasedTypeScriptService {
    constructor() {
        this.virtualFiles = new Map();
        this.currentMappings = [];
        this.fileVersions = new Map();
        this.maxVersionHistory = 10; // Prevent memory leaks
        this.setupLanguageService();
    }
    setupLanguageService() {
        this.languageServiceHost = {
            getScriptFileNames: () => Array.from(this.virtualFiles.keys()),
            getScriptVersion: (fileName) => {
                return (this.fileVersions.get(fileName) || 0).toString();
            },
            getScriptSnapshot: (fileName) => {
                const content = this.virtualFiles.get(fileName);
                return content ? ts.ScriptSnapshot.fromString(content) : undefined;
            },
            getCurrentDirectory: () => process.cwd(),
            getCompilationSettings: () => ts.getDefaultCompilerOptions(),
            getDefaultLibFileName: (options) => ts.getDefaultLibFilePath(options),
            fileExists: ts.sys.fileExists,
            readFile: ts.sys.readFile,
            readDirectory: ts.sys.readDirectory,
            directoryExists: ts.sys.directoryExists,
            getDirectories: ts.sys.getDirectories,
        };
        this.languageService = ts.createLanguageService(this.languageServiceHost);
    }
    /**
     * Update the virtual file - much simpler than the complex character-based approach!
     */
    updateVirtualFile(virtualFile) {
        console.log('Updating virtual file:', virtualFile.uri);
        console.log('Content length:', virtualFile.content.length);
        console.log('Mappings count:', virtualFile.mappings.length);
        this.virtualFiles.set(virtualFile.uri, virtualFile.content);
        // Convert SimpleMapping to LineMapping if needed for compatibility
        this.currentMappings = virtualFile.mappings.map(m => {
            if ('virtualLine' in m) {
                // LineMapping - use as is
                return m;
            }
            else {
                // SimpleMapping - convert expressionId to virtualLine by finding it in content
                const virtualLine = this.findVirtualLineForExpressionId(m.expressionId, virtualFile.content);
                return {
                    virtualLine: virtualLine !== null ? virtualLine : -1,
                    htmlPosition: m.htmlPosition,
                    expression: m.expression,
                    directiveName: m.directiveName,
                    componentId: 'unknown'
                };
            }
        });
        // CRITICAL: Increment version to force TypeScript cache invalidation
        const currentVersion = this.fileVersions.get(virtualFile.uri) || 0;
        const newVersion = currentVersion + 1;
        this.fileVersions.set(virtualFile.uri, newVersion);
        // Prevent memory leaks - keep only recent versions
        if (newVersion > this.maxVersionHistory) {
            // Don't clean fileVersions since we need current version for getScriptVersion
            // TypeScript handles its own cleanup
        }
        console.log(`File version incremented to ${newVersion} for ${virtualFile.uri}`);
        // Force TypeScript to refresh its understanding of this file
        this.languageService.getProgram();
        // Debug: Show the virtual file content
        console.log('Virtual file content:');
        console.log(virtualFile.content);
    }
    /**
     * Get completions for a specific virtual line
     * Much simpler than character-based positioning!
     */
    getCompletionsForVirtualLine(virtualUri, virtualLine) {
        console.log('Getting completions for virtual line:', virtualLine);
        if (!this.virtualFiles.has(virtualUri)) {
            console.log('Virtual file not found:', virtualUri);
            return undefined;
        }
        const content = this.virtualFiles.get(virtualUri);
        const lines = content.split('\n');
        if (virtualLine >= lines.length) {
            console.log('Virtual line out of bounds:', virtualLine, 'max:', lines.length - 1);
            return undefined;
        }
        const line = lines[virtualLine];
        console.log('Content of virtual line:', line);
        // Position at the end of the expression (before the semicolon and comment)
        // Find where the actual expression ends
        const expressionEnd = line.indexOf(';');
        const position = this.getPositionFromLineAndCharacter(content, virtualLine, expressionEnd > 0 ? expressionEnd : line.length);
        console.log('Position in file:', position);
        try {
            const result = this.languageService.getCompletionsAtPosition(virtualUri, position, {
                includeExternalModuleExports: false,
                includeInsertTextCompletions: true
            });
            console.log('TypeScript completions result:', result ? `${result.entries.length} items` : 'null');
            if (result) {
                console.log('First few completions:', result.entries.slice(0, 5).map(e => e.name));
            }
            return result;
        }
        catch (error) {
            console.error('Error getting completions:', error);
            return undefined;
        }
    }
    /**
     * Simple helper to convert line/character to absolute position
     */
    getPositionFromLineAndCharacter(content, line, character) {
        const lines = content.split('\n');
        let position = 0;
        for (let i = 0; i < line && i < lines.length; i++) {
            position += lines[i].length + 1; // +1 for newline
        }
        position += Math.min(character, lines[line]?.length || 0);
        return position;
    }
    /**
     * Get the mapping for a specific virtual line
     */
    getMappingForVirtualLine(virtualLine) {
        return this.currentMappings.find(m => m.virtualLine === virtualLine);
    }
    /**
     * Find which virtual line corresponds to an HTML position
     */
    findVirtualLineForHtmlPosition(htmlLine) {
        return this.currentMappings.find(m => m.htmlPosition.line === htmlLine);
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
     * Get hover info for a virtual line
     */
    getHoverForVirtualLine(virtualUri, virtualLine) {
        console.log('Getting hover for virtual line:', virtualLine);
        if (!this.virtualFiles.has(virtualUri)) {
            return undefined;
        }
        const content = this.virtualFiles.get(virtualUri);
        const lines = content.split('\n');
        if (virtualLine >= lines.length) {
            return undefined;
        }
        const line = lines[virtualLine];
        // For expression map lines, find the actual expression inside arrow function
        let positions;
        const arrowFunctionMatch = line.match(/\(\) => \{ (.*?) \}/);
        if (arrowFunctionMatch) {
            // We have an arrow function, find the expression inside
            const expressionStart = line.indexOf(arrowFunctionMatch[1]);
            positions = [
                expressionStart + Math.floor(arrowFunctionMatch[1].length / 2), // Middle of expression
                expressionStart, // Start of expression
                expressionStart + arrowFunctionMatch[1].length - 1 // End of expression
            ];
        }
        else {
            // Fallback for regular lines
            const expressionEnd = line.indexOf(';');
            positions = [
                expressionEnd > 0 ? expressionEnd - 1 : line.length - 1,
                Math.floor((expressionEnd > 0 ? expressionEnd : line.length) / 2),
                line.indexOf('  ') + 2
            ];
        }
        for (const charPos of positions) {
            if (charPos < 0)
                continue;
            const position = this.getPositionFromLineAndCharacter(content, virtualLine, charPos);
            console.log(`Trying hover at position ${charPos} (offset ${position}) in line: "${line}"`);
            try {
                const tsHover = this.languageService.getQuickInfoAtPosition(virtualUri, position);
                if (tsHover && tsHover.displayParts && tsHover.displayParts.length > 0) {
                    const hoverText = tsHover.displayParts.map(part => part.text).join('');
                    const documentation = tsHover.documentation?.map(doc => doc.text).join('\n') || '';
                    console.log('Successfully got hover:', hoverText);
                    return `${hoverText}${documentation ? `\n\n${documentation}` : ''}`;
                }
            }
            catch (error) {
                console.error('Error getting hover at position', charPos, ':', error);
            }
        }
        console.log('No hover info found for any position');
        return undefined;
    }
    /**
     * Get hover for a specific character within an expression on a virtual line
     */
    getHoverForVirtualLineAtChar(virtualUri, virtualLine, expression, charInExpression) {
        console.log(`Getting hover for virtual line ${virtualLine}, char ${charInExpression} in expression: "${expression}"`);
        if (!this.virtualFiles.has(virtualUri)) {
            return undefined;
        }
        const content = this.virtualFiles.get(virtualUri);
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
        const absolutePosition = this.getPositionFromLineAndCharacter(content, virtualLine, targetPosition);
        console.log(`Final hover position: char ${targetPosition} (offset ${absolutePosition}) in line: "${line}"`);
        try {
            const quickInfo = this.languageService.getQuickInfoAtPosition(virtualUri, absolutePosition);
            if (quickInfo && quickInfo.displayParts) {
                return quickInfo.displayParts.map(part => part.text).join('');
            }
        }
        catch (error) {
            console.error('Error getting quick info:', error);
        }
        return undefined;
    }
    /**
     * Update file content directly (for our new transformation system)
     */
    updateFileContent(uri, content) {
        console.log(`Updating file content for ${uri}, length: ${content.length}`);
        this.virtualFiles.set(uri, content);
        // Increment version to force TypeScript cache invalidation
        const currentVersion = this.fileVersions.get(uri) || 0;
        const newVersion = currentVersion + 1;
        this.fileVersions.set(uri, newVersion);
        console.log(`File version incremented to ${newVersion} for ${uri}`);
        // Force TypeScript to refresh
        this.languageService.getProgram();
    }
    /**
     * Get quick info at a specific position in a file
     */
    getQuickInfoAtPosition(uri, line, character) {
        console.log(`Getting quick info at ${uri}:${line}:${character}`);
        if (!this.virtualFiles.has(uri)) {
            console.log('File not found:', uri);
            return undefined;
        }
        const content = this.virtualFiles.get(uri);
        const absolutePosition = this.getPositionFromLineAndCharacter(content, line, character);
        console.log(`Absolute position: ${absolutePosition}`);
        try {
            const quickInfo = this.languageService.getQuickInfoAtPosition(uri, absolutePosition);
            if (quickInfo && quickInfo.displayParts) {
                const text = quickInfo.displayParts.map(part => part.text).join('');
                console.log(`Quick info: ${text}`);
                return text;
            }
        }
        catch (error) {
            console.error('Error getting quick info:', error);
        }
        return undefined;
    }
}
exports.LineBasedTypeScriptService = LineBasedTypeScriptService;
//# sourceMappingURL=lineBasedTypeScriptService.js.map