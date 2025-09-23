// Alpine.js-style HTML to TypeScript transformation
// Uses parse5 for precise source location mapping

const { parse } = require('parse5');

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


// Find Alpine directives using parse5 for precise source location mapping
function findAlpineDirectives(html) {
  const document = parse(html, { sourceCodeLocationInfo: true });
  const directives = [];

  // Walk the parse5 AST and find Alpine directives
  function walkNode(node, loopContext = []) {

    // Check if this element has x-for to update loop context
    let currentLoopContext = [...loopContext];

    if (node.tagName && node.attrs && node.sourceCodeLocation) {
      const forAttr = node.attrs.find(attr => attr.name === 'x-for');
      if (forAttr) {
        const lineNum = node.sourceCodeLocation?.startLine || 0;
        console.log(`🔄 Found x-for="${forAttr.value}" on line ${lineNum}`);
        console.log(`    Inherited context: [${loopContext.map(c => `${c.item} of ${c.items}`).join(', ')}]`);

        const parsed = parseForExpression(forAttr.value);
        if (parsed) {
          currentLoopContext.push({
            item: parsed.item,
            items: parsed.items,
            index: parsed.index
          });
          console.log(`    New context: [${currentLoopContext.map(c => `${c.item} of ${c.items}`).join(', ')}]`);
        } else {
          console.log(`    ❌ Failed to parse x-for expression`);
        }
      }

      // Process all Alpine attributes on this element
      node.attrs.forEach(attr => {
        const attrName = attr.name;
        const attrValue = attr.value;

        // Debug: Log directive processing
        if (alpineAttributeRegex().test(attrName) || attrName.startsWith('@') || attrName.startsWith(':')) {
          console.log(`🧭 ${attrName}="${attrValue}" → context: [${currentLoopContext.map(c => `${c.item} of ${c.items}`).join(', ')}]`);
        }

        // Check if it's an Alpine directive
        if (alpineAttributeRegex().test(attrName) || attrName.startsWith('@') || attrName.startsWith(':')) {
          // Transform attribute name like Alpine.js does
          let transformedName = attrName;
          if (attrName.startsWith('@')) {
            transformedName = attrName.replace('@', 'x-on:');
          } else if (attrName.startsWith(':')) {
            transformedName = attrName.replace(':', 'x-bind:');
          }

          // Parse the directive using Alpine's logic
          const typeMatch = transformedName.match(alpineAttributeRegex());
          const valueMatch = transformedName.match(/:([a-zA-Z0-9\-_:]+)/);
          const modifiers = transformedName.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];

          if (typeMatch) {
            // Get precise source location from parse5
            const attrLocation = node.sourceCodeLocation.attrs[attrName];
            if (attrLocation) {
              // Calculate expression position (inside quotes)
              // The attr location includes the entire attribute: x-text="expression"
              // We need to find the start of the expression value
              const attrText = html.substring(attrLocation.startOffset, attrLocation.endOffset);
              const equalIndex = attrText.indexOf('=');
              const quoteIndex = equalIndex + 1;

              // Find the quote character and skip it
              let quote = '';
              for (let i = quoteIndex; i < attrText.length; i++) {
                if (attrText[i] === '"' || attrText[i] === "'") {
                  quote = attrText[i];
                  break;
                }
              }

              const expressionStart = attrLocation.startOffset + attrText.indexOf(quote) + 1;
              const expressionEnd = expressionStart + attrValue.length;

              directives.push({
                type: typeMatch[1],
                value: attrValue,
                htmlStart: getPositionFromOffset(html, expressionStart),
                htmlEnd: getPositionFromOffset(html, expressionEnd),
                position: node.sourceCodeLocation.startOffset,
                modifiers: modifiers.map(m => m.replace(".", "")),
                directiveName: attrName,
                loopContext: currentLoopContext
              });
            }
          }
        }
      });
    }

    // Template content is now handled by DOM walker below - no regex fallback needed

    // Recursively process child nodes
    if (node.childNodes) {
      node.childNodes.forEach(child => walkNode(child, currentLoopContext));
    }

    // Special handling for <template> elements - their content is in node.content, not childNodes
    if (node.tagName === 'template' && node.content && node.content.childNodes) {
      console.log(`🌟 Processing <template> content on line ${node.sourceCodeLocation?.startLine}`);
      node.content.childNodes.forEach(child => walkNode(child, currentLoopContext));
    }
  }

  walkNode(document);
  return directives.sort((a, b) => a.position - b.position);
}

// Helper function to find Alpine directives in template content using regex
function findDirectivesInTemplateContent(templateHtml, startOffset, loopContext, html) {
  const directives = [];

  // Use regex to find all Alpine attributes in template content
  const alpineAttrRegex = /\s(x-[\w-]+|[@:][\w-]+)\s*=\s*(['"])((?:\\.|(?!\2)[^\\])*?)\2/g;

  let match;
  while ((match = alpineAttrRegex.exec(templateHtml)) !== null) {
    const attrName = match[1];
    const quote = match[2];
    const attrValue = match[3];

    // Transform attribute name like Alpine.js does
    let transformedName = attrName;
    if (attrName.startsWith('@')) {
      transformedName = attrName.replace('@', 'x-on:');
    } else if (attrName.startsWith(':')) {
      transformedName = attrName.replace(':', 'x-bind:');
    }

    // Parse the directive using Alpine's logic
    const typeMatch = transformedName.match(alpineAttributeRegex());
    if (typeMatch) {
      // Calculate absolute position in original HTML
      const attrStartInTemplate = match.index + match[0].indexOf(quote) + 1;
      const expressionStart = startOffset + attrStartInTemplate;
      const expressionEnd = expressionStart + attrValue.length;

      directives.push({
        type: typeMatch[1],
        value: attrValue,
        htmlStart: getPositionFromOffset(html, expressionStart),
        htmlEnd: getPositionFromOffset(html, expressionEnd),
        position: startOffset + match.index,
        modifiers: [],
        directiveName: attrName,
        loopContext: loopContext
      });
    }
  }

  return directives;
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
  // Find x-data content
  const xDataMatch = htmlContent.match(/x-data=(["'])((?:\\.|(?!\1)[^\\])*?)\1/s);
  const xDataContent = xDataMatch ? xDataMatch[2] : '{}';

  // Use Alpine.js-style directive parsing (working version)
  const directives = findAlpineDirectives(htmlContent);


  const mappings = [];
  const lines = [];

  // Extract x-data properties
  const dataProperties = extractXDataProperties(xDataContent);

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

    // Debug: Log context assignment (condensed)
    console.log(`🔨 ${fullContextKey} ← "${directive.value}" (line ${directive.htmlStart.line})`);

    const contextKey = fullContextKey;

    if (!contextGroups.has(contextKey)) {
      contextGroups.set(contextKey, []);
    }
    contextGroups.get(contextKey).push(directive);
  }

  // Generate TypeScript with EXACT column preservation - grouped by context
  for (const [contextKey, groupDirectives] of contextGroups) {
    const functionName = `${contextKey}Expressions`;
    const firstDirective = groupDirectives[0];

    // Find the x-data directive for this group
    const xDataDirective = directives.find(d => d.type === 'data' && d.xDataIndex === firstDirective.xDataIndex);
    const groupXDataContent = xDataDirective ? xDataDirective.value : '{}';
    const groupDataProperties = extractXDataProperties(groupXDataContent);

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

    // Parse nested loops from context name (e.g., "user_of_users__task_of_user_tasks")
    function parseContextLoops(contextKey) {
      const loops = [];
      // Remove the "xdata1_" prefix and split on "__"
      const contextPart = contextKey.replace(/^xdata\d+_/, '');
      if (contextPart === 'global') return loops;

      const levels = contextPart.split('__');

      for (const level of levels) {
        // Parse "user_of_users" or "task_of_user_tasks" or "user_userIndex_of_users"
        const match = level.match(/^(.+)_of_(.+)$/);
        if (match) {
          const itemPart = match[1];
          const itemsPart = match[2];

          // Check if there's an index (e.g., "item_index")
          const itemMatch = itemPart.match(/^(.+)_(.+)$/);
          if (itemMatch && (itemMatch[2].includes('index') || itemMatch[2].includes('Index'))) {
            // Has index: "item_index" -> item="item", index="index"
            loops.push({
              item: itemMatch[1],
              index: itemMatch[2],
              items: itemsPart.replace(/_/g, '.')
            });
          } else {
            // No index: "task" -> item="task"
            loops.push({
              item: itemPart,
              items: itemsPart.replace(/_/g, '.')
            });
          }
        }
      }

      return loops;
    }

    // Add loop contexts (nested loops) - parse from context name
    const allLoops = parseContextLoops(contextKey);
    for (const loop of allLoops) {
      // Generate TypeScript loops - forEach for index, for-of for simple
      if (loop.index) {
        lines.push(`  ${loop.items}.forEach((${loop.item}, ${loop.index}) => {`);
      } else {
        lines.push(`  for (const ${loop.item} of ${loop.items}) {`);
      }
    }

    // Process all directives in this group
    for (const directive of groupDirectives) {
      const expressionId = `expr_${directive.htmlStart.line}_${directive.htmlStart.character}`;

      // NEW WAY: Window approach with perfect column alignment
      const originalColumn = directive.htmlStart.character;

      // Add metadata as string literals (won't cause syntax errors)
      const indent = '  ' + '  '.repeat(allLoops.length);
      lines.push(`${indent}// ${directive.type}: ${directive.value}`);
      lines.push(`${indent}"${expressionId}_START";`);

      // Create exact column padding to match HTML position
      const padding = ' '.repeat(originalColumn);

      // Special handling for x-for directive - create TWO separate expressions
      if (directive.type === 'for') {
        const parsed = parseForExpression(directive.value);
        if (parsed) {
          lines.push(`${indent}// x-for: ${parsed.item} of ${parsed.items}`);

          // Create TWO separate hoverable expressions:

          // 1. Expression for the loop variable (item)
          lines.push(`${indent}"${expressionId}_item_START";`);
          const itemStartInValue = directive.value.indexOf(parsed.item);
          const itemPadding = ' '.repeat(originalColumn + itemStartInValue);
          lines.push(itemPadding + `${parsed.item};`);
          lines.push(`${indent}"${expressionId}_item_END";`);

          // 2. Expression for the index (if present)
          if (parsed.index) {
            lines.push(`${indent}"${expressionId}_index_START";`);
            const indexStartInValue = directive.value.indexOf(parsed.index);
            const indexPadding = ' '.repeat(originalColumn + indexStartInValue);
            lines.push(indexPadding + `${parsed.index};`);
            lines.push(`${indent}"${expressionId}_index_END";`);
          }

          // 3. Expression for the collection (colors)
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
          // Create separate mappings for x-for with correct column positions
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

          // Add index mapping if present
          if (parsed.index) {
            const indexStartInValue = directive.value.indexOf(parsed.index);
            mappings.push({
              expressionId: `${expressionId}_index`,
              expression: parsed.index,
              directiveName: 'for-index',
              htmlExpressionStart: {
                line: directive.htmlStart.line,
                character: directive.htmlStart.character + indexStartInValue
              },
              htmlExpressionEnd: {
                line: directive.htmlStart.line,
                character: directive.htmlStart.character + indexStartInValue + parsed.index.length
              },
              modifiers: directive.modifiers,
              parentData: groupXDataContent,
              loopContext: directive.loopContext
            });
          }

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

    // Close loop contexts (once per group) - close in reverse order
    for (let i = allLoops.length - 1; i >= 0; i--) {
      const loop = allLoops[i];
      if (loop.index) {
        lines.push('  ' + '  '.repeat(i) + '});');  // forEach closing
      } else {
        lines.push('  ' + '  '.repeat(i) + '}');    // for-of closing
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

  console.log(`Generated ${lines.length} lines, ${mappings.length} mappings`);

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

}