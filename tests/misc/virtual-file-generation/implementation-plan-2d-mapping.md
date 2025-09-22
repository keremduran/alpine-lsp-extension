# Implementation Plan: 2D Coordinate Mapping for Alpine LSP

## Overview
Implement a "game dev" approach to position mapping between HTML and TypeScript files using 2D coordinate vectors and relative positioning.

## Core Concept
- **1:1 Expression Preservation**: Copy Alpine expressions exactly to TypeScript with zero formatting changes
- **Pure Expression Blocks**: Preserve exact indentation and formatting from HTML
- **Direct Regex Search**: Find expressions using `const expr_ID = ... return expr_ID;` pattern
- **Perfect Coordinate Mapping**: Row/column positions map 1:1 between HTML and pure TS expression
- **One Function Per Expression**: Each Alpine directive gets its own TypeScript function

---

## 1. New Data Structures

### Position2D Interface
```typescript
interface Position2D {
  line: number;
  character: number;
}

interface RelativeOffset {
  line: number;
  character: number;
}
```

### Enhanced SimpleMapping
```typescript
interface SimpleMapping {
  expressionId: string;          // "expr_445_8"
  expression: string;            // Exact Alpine expression text (pure, unmodified)
  directiveName: string;         // "x-text", "x-show", "@click", etc.

  // HTML source coordinates (relative to expression start)
  htmlExpressionStart: Position2D;  // Where expression content starts
  htmlExpressionEnd: Position2D;    // Where expression content ends

  // No TypeScript coordinates needed! Use regex search instead
  // The pure expression block maps 1:1 to HTML coordinates

  // Context information
  inLoop?: boolean;
  loopContext?: LoopContext;
  parentData: string;            // x-data content
}

interface LoopContext {
  item: string;                  // "user", "todo", etc.
  items: string;                 // "users", "todos", etc.
  index?: string;                // "index", "i", etc.
  parent?: LoopContext;          // For nested loops
}
```

---

## 2. HTML Parsing and Position Tracking

### Enhanced findAlpineDirectives Function
```typescript
function findAlpineDirectives(html: string): DirectiveWithPosition[] {
  const lines = html.split('\n');
  const directives: DirectiveWithPosition[] = [];

  for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
    const line = lines[lineIndex];

    // Find all Alpine directives in this line
    const directiveRegex = /(x-\w+|@\w+)=(['"])((?:\\.|(?!\2)[^\\])*?)\2/g;
    let match;

    while ((match = directiveRegex.exec(line)) !== null) {
      const directiveName = match[1];
      const expression = match[3];
      const expressionStart = match.index + match[1].length + 2; // Skip 'x-text="'

      // Calculate multi-line positions if expression contains newlines
      const expressionLines = expression.split('\n');
      const htmlStart: Position2D = {
        line: lineIndex,
        character: expressionStart
      };

      const htmlEnd: Position2D = expressionLines.length === 1
        ? {
            line: lineIndex,
            character: expressionStart + expression.length
          }
        : {
            line: lineIndex + expressionLines.length - 1,
            character: expressionLines[expressionLines.length - 1].length
          };

      directives.push({
        type: directiveName,
        value: expression,
        htmlStart,
        htmlEnd,
        position: match.index // For x-for context detection
      });
    }
  }

  return directives.sort((a, b) => a.position - b.position);
}
```

### X-for Context Detection
```typescript
function buildLoopContextMap(html: string, directives: DirectiveWithPosition[]): Map<number, LoopContext[]> {
  const contextMap = new Map<number, LoopContext[]>();
  const loopStack: Array<{ context: LoopContext; endPosition: number }> = [];

  for (const directive of directives) {
    // Check if we've exited any loops
    while (loopStack.length > 0 && directive.position > loopStack[loopStack.length - 1].endPosition) {
      loopStack.pop();
    }

    if (directive.type === 'x-for') {
      const parsed = parseForExpression(directive.value);
      if (parsed) {
        const loopContext: LoopContext = {
          item: parsed.item,
          items: parsed.items,
          index: parsed.index,
          parent: loopStack.length > 0 ? loopStack[loopStack.length - 1].context : undefined
        };

        // Find the closing </template> for this x-for
        const templateEndPosition = findTemplateEndPosition(html, directive.position);

        loopStack.push({ context: loopContext, endPosition: templateEndPosition });
      }
    }

    // Store current loop context for this directive
    contextMap.set(directive.position, [...loopStack.map(l => l.context)]);
  }

  return contextMap;
}
```

---

## 3. TypeScript Generation with Position Tracking

### Main Generation Function
```typescript
function generateTypeScriptWithPositionMapping(
  html: string,
  xDataContent: string
): { content: string; mappings: SimpleMapping[] } {

  const directives = findAlpineDirectives(html);
  const loopContextMap = buildLoopContextMap(html, directives);
  const mappings: SimpleMapping[] = [];
  const lines: string[] = [];

  // Extract x-data properties
  const dataProperties = extractXDataProperties(xDataContent);

  // Add x-data context
  lines.push(`// Alpine x-data context`);
  lines.push(`const data = ${xDataContent};`);
  lines.push(`const { ${dataProperties.join(', ')} } = data;`);
  lines.push('');

  // Generate one function per expression
  for (const directive of directives) {
    const expressionId = `expr_${directive.htmlStart.line}_${directive.htmlStart.character}`;
    const loopContexts = loopContextMap.get(directive.position) || [];

    // Function declaration
    const functionStartLine = lines.length;
    lines.push(`function ${expressionId}() {`);

    // Add x-data context
    lines.push(`  const data = ${xDataContent};`);
    lines.push(`  const { ${dataProperties.join(', ')} } = data;`);

    // Add loop contexts (from outer to inner)
    for (const loopContext of loopContexts) {
      if (loopContext.index) {
        lines.push(`  for (let ${loopContext.index} = 0; ${loopContext.index} < ${loopContext.items}.length; ${loopContext.index}++) {`);
        lines.push(`    let ${loopContext.item} = ${loopContext.items}[${loopContext.index}];`);
      } else {
        lines.push(`  for (let ${loopContext.item} of ${loopContext.items}) {`);
      }
    }

    // Add the return statement with exact expression
    const indentation = '  ' + '  '.repeat(loopContexts.length);
    const returnLine = lines.length;

    // Handle multi-line expressions
    const expressionLines = directive.value.split('\n');
    if (expressionLines.length === 1) {
      lines.push(`${indentation}return ${directive.value};`);
    } else {
      lines.push(`${indentation}return ${expressionLines[0]}`);
      for (let i = 1; i < expressionLines.length; i++) {
        lines.push(`${indentation}  ${expressionLines[i]}${i === expressionLines.length - 1 ? ';' : ''}`);
      }
    }

    // Calculate TypeScript coordinates
    const tsStart: Position2D = {
      line: returnLine,
      character: indentation.length + 'return '.length
    };

    const tsEnd: Position2D = expressionLines.length === 1
      ? {
          line: returnLine,
          character: tsStart.character + directive.value.length
        }
      : {
          line: returnLine + expressionLines.length - 1,
          character: indentation.length + 2 + expressionLines[expressionLines.length - 1].length
        };

    // Close loop contexts
    for (let i = 0; i < loopContexts.length; i++) {
      lines.push(`  ${'  '.repeat(loopContexts.length - 1 - i)}}`);
    }

    // Close function
    lines.push(`}`);
    lines.push('');

    // Create mapping
    mappings.push({
      expressionId,
      expression: directive.value,
      directiveName: directive.type,
      htmlStart: directive.htmlStart,
      htmlEnd: directive.htmlEnd,
      tsStart,
      tsEnd,
      inLoop: loopContexts.length > 0,
      loopContext: loopContexts[loopContexts.length - 1], // Innermost context
      parentData: xDataContent
    });
  }

  return {
    content: lines.join('\n'),
    mappings
  };
}
```

---

## 4. Position Mapping Utilities

### Relative Position Calculation
```typescript
function calculateRelativeOffset(position: Position2D, start: Position2D): RelativeOffset {
  if (position.line === start.line) {
    // Same line - simple character offset
    return {
      line: 0,
      character: position.character - start.character
    };
  } else {
    // Different line - line offset + character position
    return {
      line: position.line - start.line,
      character: position.character
    };
  }
}

function applyRelativeOffset(start: Position2D, offset: RelativeOffset): Position2D {
  return {
    line: start.line + offset.line,
    character: offset.line === 0
      ? start.character + offset.character  // Same line: add to start char
      : offset.character                    // Different line: use offset char directly
  };
}

function isPositionInRange(position: Position2D, start: Position2D, end: Position2D): boolean {
  // Check if position is within the 2D range
  if (position.line < start.line || position.line > end.line) {
    return false;
  }

  if (position.line === start.line && position.character < start.character) {
    return false;
  }

  if (position.line === end.line && position.character > end.character) {
    return false;
  }

  return true;
}
```

### Enhanced Mapping Lookup
```typescript
function findMappingForHtmlPosition(position: Position2D, mappings: SimpleMapping[]): SimpleMapping | null {
  return mappings.find(mapping =>
    isPositionInRange(position, mapping.htmlStart, mapping.htmlEnd)
  ) || null;
}

function calculateTypeScriptHoverPosition(
  htmlHoverPosition: Position2D,
  mapping: SimpleMapping
): Position2D {
  const relativeOffset = calculateRelativeOffset(htmlHoverPosition, mapping.htmlStart);
  return applyRelativeOffset(mapping.tsStart, relativeOffset);
}
```

---

## 5. Updated LSP Integration

### Enhanced Hover Handler
```typescript
connection.onHover((params: HoverParams): Hover | null => {
  const document = documents.get(params.textDocument.uri);
  if (!document) return null;

  try {
    // Parse and generate virtual file with 2D mapping
    const parsed = alpineParser.parseDocument(document);
    const { content, mappings } = generateTypeScriptWithPositionMapping(
      document.getText(),
      parsed.components[0]?.xDataContent || '{}'
    );

    // Create virtual file
    const virtualFile: SimpleVirtualFile = {
      uri: document.uri.replace('.html', '.alpine.ts'),
      content,
      mappings
    };

    // Update TypeScript service
    virtualTsService.updateVirtualFile(virtualFile);

    // Find mapping using 2D position
    const mapping = findMappingForHtmlPosition(params.position, mappings);
    if (!mapping) return null;

    // Calculate exact TypeScript position using 2D coordinates
    const tsPosition = calculateTypeScriptHoverPosition(params.position, mapping);

    // Convert 2D position to absolute offset for TypeScript service
    const tsOffset = convertPositionToOffset(virtualFile.content, tsPosition);

    // Get TypeScript hover info
    const tsHover = virtualTsService.getQuickInfoAtPosition(virtualFile.uri, tsOffset);
    if (!tsHover) return null;

    return {
      contents: {
        kind: MarkupKind.Markdown,
        value: `\`\`\`typescript\n${tsHover}\n\`\`\``
      }
    };

  } catch (error) {
    console.error('Hover error:', error);
    return null;
  }
});
```

### Position Conversion Utilities
```typescript
function convertPositionToOffset(content: string, position: Position2D): number {
  const lines = content.split('\n');
  let offset = 0;

  for (let i = 0; i < position.line && i < lines.length; i++) {
    offset += lines[i].length + 1; // +1 for newline
  }

  offset += Math.min(position.character, lines[position.line]?.length || 0);
  return offset;
}

function convertOffsetToPosition(content: string, offset: number): Position2D {
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
```

---

## 6. Refactor Steps

### Phase 1: Data Structures
1. Update `SimpleMapping` interface with 2D coordinates
2. Create position utility functions
3. Add multi-line expression support

### Phase 2: HTML Parsing
1. Enhance `findAlpineDirectives` to track exact positions
2. Implement loop context detection
3. Handle multi-line directive parsing

### Phase 3: TypeScript Generation
1. Refactor processor to generate individual functions
2. Track TypeScript positions during generation
3. Implement proper indentation for loop contexts

### Phase 4: LSP Integration
1. Update hover handler to use 2D coordinate mapping
2. Enhance TypeScript service integration
3. Add position conversion utilities

### Phase 5: Testing
1. Test single-line expressions
2. Test multi-line expressions
3. Test nested x-for loops
4. Test complex object property access

---

## 7. Example Transformations

### Simple Expression
**HTML:**
```html
<!-- Line 5, chars 15-27 -->
<h1 x-text="company.name"></h1>
```

**Generated TypeScript:**
```typescript
function expr_5_15() {
  const data = { company: { name: 'TechCorp' } };
  const { company } = data;
  return company.name; // Line 3, chars 9-21
}
```

**Mapping:**
```typescript
{
  expressionId: "expr_5_15",
  expression: "company.name",
  directiveName: "x-text",
  htmlStart: { line: 5, character: 15 },
  htmlEnd: { line: 5, character: 27 },
  tsStart: { line: 3, character: 9 },
  tsEnd: { line: 3, character: 21 }
}
```

### Multi-line Expression
**HTML:**
```html
<!-- Lines 10-12 -->
<div x-text="`Hello ${user.name}
Welcome back!
Score: ${user.score}`"></div>
```

**Generated TypeScript:**
```typescript
function expr_10_15() {
  const data = { user: { name: 'John', score: 100 } };
  const { user } = data;
  return `Hello ${user.name}
    Welcome back!
    Score: ${user.score}`;
}
```

### Nested Loop Expression
**HTML:**
```html
<template x-for="user in users">
  <template x-for="hobby in user.hobbies">
    <!-- Line 15, chars 24-54 -->
    <span x-text="`${user.name} likes ${hobby}`"></span>
  </template>
</template>
```

**Generated TypeScript:**
```typescript
function expr_15_24() {
  const data = { users: [...] };
  const { users } = data;
  for (let user of users) {
    for (let hobby of user.hobbies) {
      return `${user.name} likes ${hobby}`; // Proper scope
    }
  }
}
```

This implementation provides precise 2D coordinate mapping between HTML and TypeScript while preserving exact expression text and maintaining proper scope contexts for x-for loops.