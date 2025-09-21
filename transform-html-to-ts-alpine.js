// Alpine.js-style HTML to TypeScript transformation
// Uses DOM parsing and Alpine's exact directive parsing logic

const { JSDOM } = require('jsdom');

// Alpine.js constants and functions (copied exactly)
var prefixAsString = "x-";
function prefix(subject = "") {
  return prefixAsString + subject;
}

var alpineAttributeRegex = () => new RegExp(`^${prefixAsString}([^:^.]+)\\b`);

function outNonAlpineAttributes({ name }) {
  return alpineAttributeRegex().test(name);
}

var startingWith = (subject, replacement) => ({ name, value }) => {
  if (name.startsWith(subject))
    name = name.replace(subject, replacement);
  return { name, value };
};

var into = (i) => i;

// Alpine's attribute transformers (for @click -> x-on:click, :bind -> x-bind:bind)
var attributeTransformers = [];
function mapAttributes(callback) {
  attributeTransformers.push(callback);
}

// Setup Alpine's attribute mappings exactly like Alpine.js
mapAttributes(startingWith("@", into(prefix("on:"))));
mapAttributes(startingWith(":", into(prefix("bind:"))));

function toTransformedAttributes(callback = () => {}) {
  return ({ name, value }) => {
    let { name: newName, value: newValue } = attributeTransformers.reduce((carry, transform) => {
      return transform(carry);
    }, { name, value });
    if (newName !== name)
      callback(newName, name);
    return { name: newName, value: newValue };
  };
}

function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
  return ({ name, value }) => {
    let typeMatch = name.match(alpineAttributeRegex());
    let valueMatch = name.match(/:([a-zA-Z0-9\-_:]+)/);
    let modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
    let original = originalAttributeOverride || transformedAttributeMap[name] || name;
    return {
      type: typeMatch ? typeMatch[1] : null,
      value: valueMatch ? valueMatch[1] : null,
      modifiers: modifiers.map((i) => i.replace(".", "")),
      expression: value,
      original
    };
  };
}

// Alpine's parseForExpression - copied exactly from source
function parseForExpression(expression) {
  let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
  let stripParensRE = /^\s*\(|\)\s*$/g;
  let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
  let inMatch = expression.match(forAliasRE);
  if (!inMatch) return;

  let res = {};
  res.items = inMatch[2].trim();
  let item = inMatch[1].replace(stripParensRE, '').trim();
  let iteratorMatch = item.match(forIteratorRE);

  if (iteratorMatch) {
    res.item = item.replace(forIteratorRE, '').trim();
    res.index = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.collection = iteratorMatch[2].trim();
    }
  } else {
    res.item = item;
  }

  return res;
}

// Find Alpine directives using DOM parsing (exactly like Alpine.js)
function findAlpineDirectives(html) {
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const directives = [];

  // Walk the DOM like Alpine.js does
  function walk(el, callback) {
    callback(el);
    let node = el.firstElementChild;
    while (node) {
      walk(node, callback);
      node = node.nextElementSibling;
    }
  }

  // Process each element like Alpine.js
  walk(document.documentElement, (el) => {
    if (!el.attributes) return;

    // Convert attributes to Alpine's format
    const attributes = Array.from(el.attributes).map(attr => ({
      name: attr.name,
      value: attr.value
    }));

    // Apply Alpine's exact parsing logic
    let transformedAttributeMap = {};
    let alpineDirectives = attributes
      .map(toTransformedAttributes((newName, oldName) => transformedAttributeMap[newName] = oldName))
      .filter(outNonAlpineAttributes)
      .map(toParsedDirectives(transformedAttributeMap));

    // Convert to our format with accurate position info
    alpineDirectives.forEach(directive => {
      if (directive.type) {
        // Find each attribute occurrence in HTML with unique identification
        const attrName = directive.original;
        const expression = directive.expression;

        // Create a unique pattern for this specific attribute value
        const escapedAttr = escapeRegex(attrName);
        const escapedValue = escapeRegex(expression);
        const attrRegex = new RegExp(`\\b${escapedAttr}\\s*=\\s*(['"])${escapedValue}\\1`, 'gs');

        let match = attrRegex.exec(html);
        if (match) {
          // Find the exact position where the expression content starts
          const fullMatch = match[0];
          const quote = match[1];
          const quoteIndex = fullMatch.indexOf(quote, fullMatch.indexOf('='));
          const expressionStart = match.index + quoteIndex + 1;

          const htmlStart = getPositionFromOffset(html, expressionStart);
          const htmlEnd = getPositionFromOffset(html, expressionStart + expression.length);

          directives.push({
            type: directive.type,
            value: expression,
            htmlStart,
            htmlEnd,
            position: match.index,
            modifiers: directive.modifiers,
            directiveName: attrName
          });
        }
      }
    });
  });

  return directives.sort((a, b) => a.position - b.position);
}

// Helper functions
function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getPositionFromOffset(text, offset) {
  const beforeOffset = text.substring(0, offset);
  const lines = beforeOffset.split('\n');
  return {
    line: lines.length - 1,
    character: lines[lines.length - 1].length
  };
}

// Extract x-data properties using Object.keys
function extractXDataProperties(xDataContent) {
  try {
    if (xDataContent.trim().match(/^\w+\(\)$/)) {
      return [];
    }
    const dataObject = eval(`(${xDataContent})`);
    return Object.keys(dataObject);
  } catch (error) {
    console.log('Could not extract properties from:', xDataContent);
    const propRegex = /^\s*(\w+)\s*:/gm;
    const properties = [];
    let match;
    while ((match = propRegex.exec(xDataContent)) !== null) {
      const prop = match[1];
      if (!['function', 'return', 'if', 'else', 'get'].includes(prop)) {
        properties.push(prop);
      }
    }
    return [...new Set(properties)];
  }
}

// Main transformation function with Alpine.js parsing
function transformHtmlToTypeScript(htmlContent) {
  console.log('🔄 Transforming HTML to TypeScript (Alpine.js style)...');

  // Find x-data content
  const xDataMatch = htmlContent.match(/x-data=(["'])((?:\\.|(?!\1)[^\\])*?)\1/s);
  const xDataContent = xDataMatch ? xDataMatch[2] : '{}';
  console.log('📊 Found x-data:', xDataContent);

  // Use Alpine.js-style directive parsing
  const directives = findAlpineDirectives(htmlContent);
  console.log(`📋 Found ${directives.length} directives:`, directives.map(d => `${d.type}="${d.value}"`));

  const mappings = [];
  const lines = [];

  // Extract x-data properties
  const dataProperties = extractXDataProperties(xDataContent);
  console.log('🔑 Extracted properties:', dataProperties);

  // Track used function names to avoid duplicates
  const usedNames = {};

  // Generate TypeScript with EXACT column preservation
  for (const directive of directives) {
    let expressionId = `expr_${directive.htmlStart.line}_${directive.htmlStart.character}`;

    // If we already used this name, append a counter
    if (usedNames[expressionId]) {
      usedNames[expressionId]++;
      expressionId = `${expressionId}_${usedNames[expressionId]}`;
    } else {
      usedNames[expressionId] = 1;
    }

    console.log(`\n🔨 Generating function ${expressionId} for ${directive.type}`);
    console.log(`   Expression: "${directive.value}"`);
    console.log(`   HTML Position: line ${directive.htmlStart.line}, col ${directive.htmlStart.character}`);

    // Function declaration
    lines.push(`function ${expressionId}() {`);

    // Add x-data context
    lines.push(`  const data = ${xDataContent};`);
    if (dataProperties.length > 0) {
      lines.push(`  const { ${dataProperties.join(', ')} } = data;`);
    }

    // NEW WAY: Window approach with perfect column alignment
    const originalColumn = directive.htmlStart.character;

    // Add metadata as string literals (won't cause syntax errors)
    lines.push(`  "${expressionId}_START";`);

    // Create exact column padding to match HTML position
    const padding = ' '.repeat(originalColumn);

    // Wrap expression in const assignment to ensure valid syntax
    lines.push(`  const ${expressionId} =`);
    lines.push(padding + directive.value + ';');

    lines.push(`  "${expressionId}_END";`);
    lines.push('');

    // Close function
    lines.push(`}`);
    lines.push('');

    // Create mapping
    mappings.push({
      expressionId,
      expression: directive.value,
      directiveName: directive.type,
      htmlExpressionStart: directive.htmlStart,
      htmlExpressionEnd: directive.htmlEnd,
      modifiers: directive.modifiers,
      parentData: xDataContent
    });
  }

  const result = {
    tsContent: lines.join('\n'),
    mappings: mappings
  };

  console.log('✅ Transformation complete!');
  console.log(`📄 Generated ${lines.length} lines of TypeScript`);
  console.log(`🗺️  Created ${mappings.length} mappings`);

  return result;
}

// Export functions
module.exports = {
  transformHtmlToTypeScript,
  findAlpineDirectives,
  parseForExpression,
  extractXDataProperties
};

// Test function
if (require.main === module) {
  const fs = require('fs');
  const htmlFile = process.argv[2] || 'test-complex.html';
  const htmlContent = fs.readFileSync(htmlFile, 'utf-8');
  const result = transformHtmlToTypeScript(htmlContent);

  console.log('\n📄 Generated TypeScript:');
  console.log('=====================================');
  console.log(result.tsContent);
  console.log('=====================================');
}