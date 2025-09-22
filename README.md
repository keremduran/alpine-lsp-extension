# Alpine.js LSP Extension

Language Server Protocol extension for Alpine.js that provides IntelliSense, hover information, and type checking for Alpine.js expressions in HTML files.

## Features

- **Hover Information**: Get type information when hovering over Alpine.js expressions
- **IntelliSense**: Auto-completion for Alpine.js expressions
- **Type Checking**: TypeScript-powered type checking for Alpine.js code
- **Cross-file Support**: Works across multiple HTML files in your workspace

## Supported Alpine.js Features

- `x-data` directives (including function-based data)
- `x-text`, `x-html` expressions
- `x-for` loops with proper scope handling
- `x-on` event handlers
- `x-show`, `x-if` conditional rendering
- Nested Alpine.js components
- Complex expressions and method calls

## Usage

1. Install the extension
2. Open an HTML file with Alpine.js directives
3. Hover over Alpine.js expressions to see type information
4. Get IntelliSense while editing expressions

## Development

To develop this extension:

```bash
npm install
npm run compile
code . # Open in VSCode and press F5 to run
```

## Architecture

The extension transforms Alpine.js expressions in HTML into TypeScript for analysis:

1. Parses HTML files to find Alpine.js directives
2. Extracts expressions and creates TypeScript context
3. Provides LSP features using TypeScript language service
4. Maps TypeScript results back to HTML positions