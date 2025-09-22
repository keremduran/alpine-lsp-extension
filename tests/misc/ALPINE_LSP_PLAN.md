# Alpine.js Language Server Extension - Development Plan

## Project Goal
Build a production-quality Language Server Protocol (LSP) extension for Alpine.js with full IntelliSense, diagnostics, and refactoring support.

## Acceptance Criteria
- ✅ Full language support for Alpine.js directives
- ✅ Autocomplete/IntelliSense for Alpine variables and methods
- ✅ JSDoc support for documentation
- ✅ Support for `x-data` as both object literal and function returning object
- ✅ Syntax highlighting for Alpine directives
- ✅ Diagnostics for invalid function calls and undefined variables
- ✅ Hover information with type hints
- ✅ Go to definition (already implemented basic version)
- ✅ Rename support for variables
- ✅ Support for Alpine magic properties ($refs, $el, $store, etc.)

## Technical Architecture

### 1. Parser Layer
- **HTML Parser**: Use `htmlparser2` or `vscode-html-languageservice` to extract Alpine attributes
- **JavaScript AST Parser**: Use TypeScript compiler API or `acorn` to parse Alpine expressions
- **Incremental Parsing**: Only reparse changed sections for performance

### 2. Language Features Implementation

#### Phase 1: Foundation (Current + Improvements)
- [x] Basic go to definition
- [ ] Proper HTML parsing instead of regex
- [ ] JavaScript AST parsing for expressions
- [ ] Document symbol storage with proper scoping

#### Phase 2: IntelliSense
- [ ] Autocomplete provider for:
  - Variables from `x-data`
  - Alpine directives (x-show, x-if, etc.)
  - Magic properties ($refs, $el, $store)
  - Methods defined in x-data
- [ ] Signature help for functions
- [ ] Quick info on hover

#### Phase 3: Diagnostics
- [ ] Type checking for Alpine expressions
- [ ] Undefined variable detection
- [ ] Invalid directive usage warnings
- [ ] Missing required attributes

#### Phase 4: Advanced Features
- [ ] Rename refactoring
- [ ] Extract variable/function code actions
- [ ] Code lens for x-data definitions
- [ ] Support for Alpine plugins

### 3. Alpine.js Specific Features

#### x-data Patterns to Support:
```html
<!-- Object literal -->
<div x-data="{ count: 0, message: 'hello' }">

<!-- Function returning object -->
<div x-data="counter()">

<!-- With JSDoc -->
<script>
/**
 * @returns {{count: number, increment: Function}}
 */
function counter() {
  return {
    count: 0,
    increment() { this.count++ }
  }
}
</script>
```

#### Magic Properties:
- `$el` - Current DOM element
- `$refs` - References to elements with x-ref
- `$store` - Alpine stores
- `$watch` - Watch for changes
- `$dispatch` - Dispatch custom events
- `$nextTick` - After DOM updates
- `$root` - Root element of component

## Implementation Steps

### Step 1: Setup Proper Project Structure
```
alpine-lsp-extension/
├── client/
│   └── src/
│       └── extension.ts
├── server/
│   └── src/
│       ├── server.ts
│       ├── parser/
│       │   ├── htmlParser.ts
│       │   └── jsParser.ts
│       ├── providers/
│       │   ├── completionProvider.ts
│       │   ├── definitionProvider.ts
│       │   ├── hoverProvider.ts
│       │   └── diagnosticsProvider.ts
│       └── alpine/
│           ├── alpineContext.ts
│           └── alpineMagicProperties.ts
└── syntaxes/
    └── alpine.tmLanguage.json
```

### Step 2: Core Dependencies
```json
{
  "dependencies": {
    "vscode-html-languageservice": "^5.0.0",
    "typescript": "^5.0.0",
    "@typescript/vfs": "^1.0.0",
    "vscode-languageserver": "^8.0.0",
    "vscode-languageserver-textdocument": "^1.0.0"
  }
}
```

### Step 3: Parser Implementation
1. Use `vscode-html-languageservice` to parse HTML
2. Extract Alpine attributes from parsed nodes
3. Use TypeScript compiler API to parse JavaScript in attributes
4. Build symbol table with proper scoping

### Step 4: Language Features
1. Implement each provider following LSP spec
2. Use TypeScript language service for JavaScript intelligence
3. Integrate Alpine-specific knowledge (magic properties, directives)

## Testing Strategy
- Unit tests for parsers
- Integration tests for LSP features
- Test files covering:
  - Basic Alpine patterns
  - Complex nested components
  - x-data as function
  - Alpine stores
  - All directive types

## Reference Implementation
Based on Microsoft's LSP Embedded Language Service sample, which demonstrates:
- Parsing HTML with embedded JavaScript
- Using TypeScript language service for JavaScript intelligence
- Proper LSP server architecture

## Success Metrics
- All Alpine.js official examples work with full IntelliSense
- No false positive diagnostics
- Performance: < 100ms response time for completions
- Support for Alpine.js v3.x features

## Next Session Action Items
1. Clone the LSP Embedded Language Service sample
2. Analyze its architecture for embedded JavaScript handling
3. Start implementing HTML parser to replace regex
4. Build Alpine context extractor using proper AST parsing
5. Implement completion provider for x-data variables