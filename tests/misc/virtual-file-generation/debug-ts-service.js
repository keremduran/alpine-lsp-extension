// Test our TypeScript service directly
const { LineBasedTypeScriptService } = require('../../out/server/lineBasedTypeScriptService');

const tsService = new LineBasedTypeScriptService();

// Test with the exact same code that should work
const testCode = `function test() {
  const str = "hello";
  const num = 42;
  str; // This should be string
  num; // This should be number
}`;

const testUri = '/tmp/test.ts';
tsService.updateFileContent(testUri, testCode);

// Get quick info at the position of "str"
const line = 3; // Line with str
const char = 2; // Position of "str"

const quickInfo = tsService.getQuickInfoAtPosition(testUri, line, char);
console.log('Quick info result:', quickInfo);

// Let's also try getting completions to see what TypeScript thinks
console.log('\n--- Testing TypeScript service directly ---');
console.log('Code:', testCode);
console.log('Position:', line, char);
console.log('Result:', quickInfo);