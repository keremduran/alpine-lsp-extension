// Quick test to see what TypeScript shows for hover
import * as ts from 'typescript';

const testCode = `
const data = ({ items: ['Apple', 'Banana', 'Orange'] });
const { items } = data;

// Test 1: Direct array element access
const item1 = items[0];  // What type does TS infer?

// Test 2: IIFE with array element
const test2 = (() => {
  const item = items[0];
  return item;  // Hover position here
})();

// Test 3: For loop
for (const item of items) {
  console.log(item);  // What type here?
}

// Test 4: Object array
const users = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 }
];

const user = users[0];
console.log(user.name);  // Should show property type

// Test 5: Our exact pattern
const test5 = (() => {
  const user = users[0];
  return user.name;
})();
`;

// Create a simple TS program to analyze types
const sourceFile = ts.createSourceFile(
  'test.ts',
  testCode,
  ts.ScriptTarget.Latest,
  true
);

console.log('TypeScript AST created successfully');
console.log('To test hover: Open test-types.ts in VS Code and hover over the variables');
console.log('\nOur virtual file patterns:');
console.log('1. Simple: const item = items[0]; return item;');
console.log('2. Property: const user = users[0]; return user.name;');
console.log('3. For loop: for(const item of items) { return item; }');