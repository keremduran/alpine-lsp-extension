# Alpine.js Scope Resolution Strategy

## The Core Challenge
Alpine.js expressions operate in a component-scoped context, not global scope:
- `onclick="count++"` → references `window.count` (global)
- `@click="count++"` → references component's `x-data` scope

## Implementation Strategy

### 1. Component Context Extraction
```typescript
// For each element, find its Alpine component context
function getComponentContext(element: HTMLElement): AlpineContext {
  // Walk up DOM tree to find x-data
  const xDataElement = findParentWithXData(element);

  // Parse x-data to extract variables
  const xDataContent = parseXData(xDataElement);

  return {
    variables: xDataContent.variables,
    methods: xDataContent.methods,
    magicProperties: ALPINE_MAGIC_PROPERTIES
  };
}
```

### 2. Virtual TypeScript Documents
For each Alpine expression, create a virtual TypeScript context:

```typescript
// Original: @click="count++"
// Generated virtual document:
`
type AlpineThis = {
  count: number;
  message: string;
  increment(): void;
  // Magic properties
  $el: HTMLElement;
  $refs: { [key: string]: HTMLElement };
  $store: any;
  $watch: (property: string, callback: Function) => void;
  $dispatch: (event: string, detail?: any) => void;
};

function handler(this: AlpineThis) {
  count++;  // TypeScript now knows 'count' is from AlpineThis
}
`
```

### 3. Scope Chain Resolution
Alpine.js has a specific scope chain:
1. Component's x-data properties
2. Alpine magic properties ($el, $refs, etc.)
3. Alpine.store() globals
4. NOT window/global scope

### 4. x-data Patterns

#### Object Literal
```html
<div x-data="{ count: 0 }">
```
→ Parse as JavaScript object, extract properties

#### Function Call
```html
<div x-data="counter()">
```
→ Find function definition, analyze return type

#### Inline Function
```html
<div x-data="() => ({ count: 0 })">
```
→ Parse arrow function, analyze return value

### 5. Implementation with LSP Embedded Service

Modify `getAttributeLanguage` to detect Alpine:
```typescript
function getAlpineAttributeInfo(attributeName: string): AlpineAttribute | null {
  if (/^x-data$/.test(attributeName)) {
    return { type: 'data-definition', language: 'javascript' };
  }
  if (/^(x-show|x-if|x-text|x-html|x-model|@\w+|x-on:\w+)$/.test(attributeName)) {
    return { type: 'expression', language: 'javascript', needsContext: true };
  }
  return null;
}
```

When processing Alpine expressions:
1. Find parent x-data context
2. Create virtual TypeScript document with proper scope
3. Use TypeScript Language Service for IntelliSense
4. Map positions back to original document

### 6. Example Flow

```html
<div x-data="{ count: 0, increment() { this.count++ } }">
  <button @click="increment()">Click</button>
</div>
```

Processing @click="increment()":
1. Find parent x-data → `{ count: 0, increment() {...} }`
2. Create context type:
   ```typescript
   interface Context {
     count: number;
     increment(): void;
   }
   ```
3. Validate expression against context
4. Provide autocomplete: `[count, increment, $el, $refs, ...]`

## Key Differences from Standard HTML/JS

| Feature | Standard HTML | Alpine.js |
|---------|--------------|-----------|
| Scope | Global (window) | Component (x-data) |
| Variables | Must be global | Component-scoped |
| Magic Properties | None | $el, $refs, $store, etc. |
| Evaluation | Direct JS | Within Alpine proxy |

## Benefits of This Approach

1. **Accurate IntelliSense**: Only shows variables actually available in Alpine scope
2. **Type Safety**: Can leverage TypeScript for type checking
3. **No False Positives**: Won't suggest global variables that Alpine can't access
4. **JSDoc Support**: Can read type annotations from x-data functions
5. **Proper Diagnostics**: Can detect undefined variables in Alpine context