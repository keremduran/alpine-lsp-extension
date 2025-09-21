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

  // Track loop context as we walk the DOM
  const loopStack = [];

  // Walk the DOM like Alpine.js does
  function walk(el, callback, loopContext = []) {
    // Check if this element has x-for
    let currentLoopContext = [...loopContext];

    if (el.hasAttribute && el.hasAttribute('x-for')) {
      const forExpression = el.getAttribute('x-for');
      const parsed = parseForExpression(forExpression);
      if (parsed) {
        // Add this loop to the context for children
        currentLoopContext.push({
          item: parsed.item,
          items: parsed.items,
          index: parsed.index
        });
      }
    }

    callback(el, currentLoopContext);

    // Handle template content specially
    if (el.tagName && el.tagName.toLowerCase() === 'template' && el.content) {
      // Process template content with the current loop context
      const templateChildren = el.content.children;
      for (let i = 0; i < templateChildren.length; i++) {
        walk(templateChildren[i], callback, currentLoopContext);
      }
    }

    let node = el.firstElementChild;
    while (node) {
      walk(node, callback, currentLoopContext);
      node = node.nextElementSibling;
    }
  }

  // Process each element like Alpine.js
  walk(document.documentElement, (el, loopContext) => {
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
            directiveName: attrName,
            loopContext: loopContext // x-for needs parent context to reference parent variables
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
    // Handle function-based x-data
    if (xDataContent.trim().startsWith('() =>') || xDataContent.trim().startsWith('function')) {
      // Execute the function to get the actual object
      const dataObject = eval(`(${xDataContent})()`);
      return Object.keys(dataObject);
    }

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

  // Group directives by their loop context for optimization
  const contextGroups = new Map();

  // Track which x-data component each directive belongs to
  let currentXDataIndex = 0;
  const xDataBoundaries = [];

  for (let i = 0; i < directives.length; i++) {
    if (directives[i].type === 'data') {
      currentXDataIndex++;
      xDataBoundaries.push(i);
    }
    directives[i].xDataIndex = currentXDataIndex;
  }

  for (const directive of directives) {
    const loopContextKey = directive.loopContext ?
      directive.loopContext.map(l => {
        const itemPart = l.index ? `${l.item}_${l.index}` : l.item;
        return `${itemPart}_of_${l.items.replace(/[^a-zA-Z0-9_]/g, '_')}`;
      }).join('__') :
      'global';

    // For x-for directives, also include their own signature in the context
    let fullContextKey = `xdata${directive.xDataIndex}_${loopContextKey}`;
    if (directive.type === 'for') {
      const parsed = parseForExpression(directive.value);
      if (parsed) {
        const forSignature = parsed.index ? `${parsed.item}_${parsed.index}` : parsed.item;
        fullContextKey += `__${forSignature}_of_${parsed.items.replace(/[^a-zA-Z0-9_]/g, '_')}`;
      }
    }

    const contextKey = fullContextKey;

    if (!contextGroups.has(contextKey)) {
      contextGroups.set(contextKey, []);
    }
    contextGroups.get(contextKey).push(directive);
  }

  console.log(`📦 Grouped ${directives.length} directives into ${contextGroups.size} context groups`);

  // Generate TypeScript with EXACT column preservation - grouped by context
  for (const [contextKey, groupDirectives] of contextGroups) {
    const functionName = `${contextKey}Expressions`;
    const firstDirective = groupDirectives[0];

    // Find the x-data directive for this group
    const xDataDirective = directives.find(d => d.type === 'data' && d.xDataIndex === firstDirective.xDataIndex);
    const groupXDataContent = xDataDirective ? xDataDirective.value : '{}';
    const groupDataProperties = extractXDataProperties(groupXDataContent);

    console.log(`\n🔨 Generating grouped function ${functionName} for ${groupDirectives.length} expressions`);
    console.log(`   Context: ${contextKey}`);
    console.log(`   X-data: ${groupXDataContent.substring(0, 50)}...`);
    if (firstDirective.loopContext && firstDirective.loopContext.length > 0) {
      console.log(`   Loop context: ${firstDirective.loopContext.map(l => `${l.item} of ${l.items}`).join(' > ')}`);
    }

    // Function declaration
    lines.push(`function ${functionName}() {`);

    // Add x-data context (once per group) - use let for mutability
    // Handle function-based x-data by calling the function
    const isFunctionBased = groupXDataContent.trim().startsWith('() =>') || groupXDataContent.trim().startsWith('function');
    if (isFunctionBased) {
      lines.push(`  const data = (${groupXDataContent})();`);
    } else {
      lines.push(`  const data = ${groupXDataContent};`);
    }

    if (groupDataProperties.length > 0) {
      lines.push(`  let { ${groupDataProperties.join(', ')} } = data;`);
    }

    // Add loop contexts (nested loops) - once per group
    if (firstDirective.loopContext && firstDirective.loopContext.length > 0) {
      for (const loop of firstDirective.loopContext) {
        // Convert Alpine's "in" to TypeScript's "of" with index support
        if (loop.index) {
          lines.push(`  ${loop.items}.forEach((${loop.item}, ${loop.index}) => {`);
        } else {
          lines.push(`  for (const ${loop.item} of ${loop.items}) {`);
        }
      }
    }

    // Process all directives in this group
    for (const directive of groupDirectives) {
      const expressionId = `expr_${directive.htmlStart.line}_${directive.htmlStart.character}`;

      console.log(`   📍 ${expressionId}: "${directive.value}" at line ${directive.htmlStart.line}, col ${directive.htmlStart.character}`);

      // NEW WAY: Window approach with perfect column alignment
      const originalColumn = directive.htmlStart.character;

      // Add metadata as string literals (won't cause syntax errors)
      const indent = '  ' + '  '.repeat(firstDirective.loopContext ? firstDirective.loopContext.length : 0);
      lines.push(`${indent}"${expressionId}_START";`);

      // Create exact column padding to match HTML position
      const padding = ' '.repeat(originalColumn);

      // Special handling for x-for directive - create TWO separate expressions
      if (directive.type === 'for') {
        const parsed = parseForExpression(directive.value);
        if (parsed) {
          lines.push(`${indent}// x-for: ${parsed.item} of ${parsed.items}`);

          // Create TWO separate hoverable expressions:

          // 1. Expression for the loop variable (tag)
          lines.push(`${indent}"${expressionId}_item_START";`);
          const itemStartInValue = directive.value.indexOf(parsed.item);
          const itemPadding = ' '.repeat(originalColumn + itemStartInValue);
          lines.push(itemPadding + `${parsed.item};`);
          lines.push(`${indent}"${expressionId}_item_END";`);

          // 2. Expression for the collection (product.tags)
          lines.push(`${indent}"${expressionId}_items_START";`);
          const itemsStartInValue = directive.value.indexOf(parsed.items);
          const itemsPadding = ' '.repeat(originalColumn + itemsStartInValue);
          lines.push(itemsPadding + parsed.items + ';');
          lines.push(`${indent}"${expressionId}_items_END";`);
        } else {
          lines.push(padding + directive.value + ';');
        }
      } else {
        // Regular expression - no assignment, just the expression
        // Wrap object/array literals in parentheses to make valid statements
        const value = directive.value.trim();
        if ((value.startsWith('{') && value.endsWith('}')) ||
            (value.startsWith('[') && value.endsWith(']'))) {
          lines.push(padding + '(' + directive.value + ');');
        } else {
          lines.push(padding + directive.value + ';');
        }
      }

      lines.push(`${indent}"${expressionId}_END";`);
      lines.push('');

      // Create mapping(s)
      if (directive.type === 'for') {
        const parsed = parseForExpression(directive.value);
        if (parsed) {
          // Create two separate mappings for x-for with correct column positions
          const itemStartInValue = directive.value.indexOf(parsed.item);
          const itemsStartInValue = directive.value.indexOf(parsed.items);

          mappings.push({
            expressionId: `${expressionId}_item`,
            expression: parsed.item,
            directiveName: 'for-item',
            htmlExpressionStart: {
              line: directive.htmlStart.line,
              character: directive.htmlStart.character + itemStartInValue
            },
            htmlExpressionEnd: {
              line: directive.htmlStart.line,
              character: directive.htmlStart.character + itemStartInValue + parsed.item.length
            },
            modifiers: directive.modifiers,
            parentData: groupXDataContent,
            loopContext: directive.loopContext
          });

          mappings.push({
            expressionId: `${expressionId}_items`,
            expression: parsed.items,
            directiveName: 'for-items',
            htmlExpressionStart: {
              line: directive.htmlStart.line,
              character: directive.htmlStart.character + itemsStartInValue
            },
            htmlExpressionEnd: {
              line: directive.htmlStart.line,
              character: directive.htmlStart.character + itemsStartInValue + parsed.items.length
            },
            modifiers: directive.modifiers,
            parentData: groupXDataContent,
            loopContext: directive.loopContext
          });
        }
      } else {
        mappings.push({
          expressionId,
          expression: directive.value,
          directiveName: directive.type,
          htmlExpressionStart: directive.htmlStart,
          htmlExpressionEnd: directive.htmlEnd,
          modifiers: directive.modifiers,
          parentData: xDataContent,
          loopContext: directive.loopContext
        });
      }
    }

    // Close loop contexts (once per group)
    if (firstDirective.loopContext && firstDirective.loopContext.length > 0) {
      for (let i = firstDirective.loopContext.length - 1; i >= 0; i--) {
        const loop = firstDirective.loopContext[i];
        if (loop.index) {
          lines.push('  ' + '  '.repeat(i) + '});');
        } else {
          lines.push('  ' + '  '.repeat(i) + '}');
        }
      }
    }

    // Close function (once per group)
    lines.push(`}`);
    lines.push('');
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