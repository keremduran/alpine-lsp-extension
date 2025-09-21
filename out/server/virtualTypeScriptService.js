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
exports.VirtualTypeScriptService = void 0;
const ts = __importStar(require("typescript"));
class VirtualTypeScriptService {
    constructor(virtualFileManager) {
        this.virtualFiles = new Map();
        this.virtualFileManager = virtualFileManager;
        this.compilerOptions = {
            target: ts.ScriptTarget.ES2020,
            module: ts.ModuleKind.ESNext,
            lib: ['ES2020', 'DOM'],
            allowJs: true,
            checkJs: true,
            strict: false,
            noEmit: true,
            skipLibCheck: true,
            moduleResolution: ts.ModuleResolutionKind.NodeJs,
            allowSyntheticDefaultImports: true,
            esModuleInterop: true
        };
        this.createLanguageServiceHost();
        this.languageService = ts.createLanguageService(this.languageServiceHost, ts.createDocumentRegistry());
    }
    createLanguageServiceHost() {
        this.languageServiceHost = {
            getScriptFileNames: () => {
                return Array.from(this.virtualFiles.keys());
            },
            getScriptVersion: (fileName) => {
                // Simple versioning - could be improved
                return '1';
            },
            getScriptSnapshot: (fileName) => {
                const content = this.virtualFiles.get(fileName);
                if (content === undefined) {
                    return undefined;
                }
                return ts.ScriptSnapshot.fromString(content);
            },
            getCurrentDirectory: () => process.cwd(),
            getCompilationSettings: () => this.compilerOptions,
            getDefaultLibFileName: (options) => {
                return ts.getDefaultLibFilePath(options);
            },
            fileExists: (path) => {
                return this.virtualFiles.has(path) || ts.sys.fileExists(path);
            },
            readFile: (path) => {
                const virtualContent = this.virtualFiles.get(path);
                if (virtualContent !== undefined) {
                    return virtualContent;
                }
                return ts.sys.readFile(path);
            },
            readDirectory: ts.sys.readDirectory,
            getDirectories: ts.sys.getDirectories,
            directoryExists: ts.sys.directoryExists,
            realpath: ts.sys.realpath
        };
    }
    /**
     * Update virtual file content for a document
     */
    updateVirtualFile(document, virtualFile) {
        this.virtualFiles.set(virtualFile.uri, virtualFile.content);
        // Force TypeScript to recognize the file change
        this.languageService.cleanupSemanticCache();
    }
    /**
     * Get TypeScript completions for a virtual file position
     */
    getCompletions(virtualUri, position) {
        console.log('getCompletions called with:', virtualUri, position);
        if (!this.virtualFiles.has(virtualUri)) {
            console.log('Virtual file not found:', virtualUri);
            console.log('Available files:', Array.from(this.virtualFiles.keys()));
            return undefined;
        }
        const content = this.virtualFiles.get(virtualUri);
        console.log('File content length:', content?.length);
        console.log('Context around position:', content?.substring(Math.max(0, position - 50), position + 50));
        try {
            const result = this.languageService.getCompletionsAtPosition(virtualUri, position, {
                includeExternalModuleExports: false,
                includeInsertTextCompletions: true
            });
            console.log('TypeScript completion result:', result ? 'success' : 'null');
            return result;
        }
        catch (error) {
            console.error('Error getting completions:', error);
            return undefined;
        }
    }
    /**
     * Get TypeScript diagnostics for a virtual file
     */
    getDiagnostics(virtualUri) {
        if (!this.virtualFiles.has(virtualUri)) {
            return [];
        }
        try {
            const syntacticDiagnostics = this.languageService.getSyntacticDiagnostics(virtualUri);
            const semanticDiagnostics = this.languageService.getSemanticDiagnostics(virtualUri);
            return [...syntacticDiagnostics, ...semanticDiagnostics];
        }
        catch (error) {
            console.error('Error getting diagnostics:', error);
            return [];
        }
    }
    /**
     * Get definition location for a virtual file position
     */
    getDefinition(virtualUri, position) {
        if (!this.virtualFiles.has(virtualUri)) {
            return undefined;
        }
        try {
            return this.languageService.getDefinitionAtPosition(virtualUri, position);
        }
        catch (error) {
            console.error('Error getting definition:', error);
            return undefined;
        }
    }
    /**
     * Get hover information for a virtual file position
     */
    getHover(virtualUri, position) {
        if (!this.virtualFiles.has(virtualUri)) {
            return undefined;
        }
        try {
            return this.languageService.getQuickInfoAtPosition(virtualUri, position);
        }
        catch (error) {
            console.error('Error getting hover info:', error);
            return undefined;
        }
    }
    /**
     * Convert position in virtual file content to offset
     */
    positionToOffset(virtualUri, line, character) {
        const content = this.virtualFiles.get(virtualUri);
        if (!content)
            return 0;
        const lines = content.split('\n');
        let offset = 0;
        for (let i = 0; i < Math.min(line, lines.length - 1); i++) {
            offset += lines[i].length + 1; // +1 for newline
        }
        offset += Math.min(character, lines[line]?.length || 0);
        return offset;
    }
    /**
     * Convert offset in virtual file content to position
     */
    offsetToPosition(virtualUri, offset) {
        const content = this.virtualFiles.get(virtualUri);
        if (!content)
            return { line: 0, character: 0 };
        const lines = content.split('\n');
        let currentOffset = 0;
        for (let line = 0; line < lines.length; line++) {
            const lineLength = lines[line].length;
            if (currentOffset + lineLength >= offset) {
                return {
                    line,
                    character: offset - currentOffset
                };
            }
            currentOffset += lineLength + 1; // +1 for newline
        }
        // Fallback to end of file
        return {
            line: lines.length - 1,
            character: lines[lines.length - 1]?.length || 0
        };
    }
    /**
     * Remove virtual file
     */
    removeVirtualFile(virtualUri) {
        this.virtualFiles.delete(virtualUri);
        this.languageService.cleanupSemanticCache();
    }
    /**
     * Get all virtual file URIs
     */
    getVirtualFileUris() {
        return Array.from(this.virtualFiles.keys());
    }
    /**
     * Check if a URI is a virtual file
     */
    isVirtualFile(uri) {
        return this.virtualFiles.has(uri);
    }
    /**
     * Get the content of a virtual file
     */
    getVirtualFileContent(virtualUri) {
        return this.virtualFiles.get(virtualUri);
    }
    /**
     * Dispose the language service
     */
    dispose() {
        this.languageService.dispose();
        this.virtualFiles.clear();
    }
}
exports.VirtualTypeScriptService = VirtualTypeScriptService;
//# sourceMappingURL=virtualTypeScriptService.js.map