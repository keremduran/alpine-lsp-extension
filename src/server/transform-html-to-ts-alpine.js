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
        const parsed = parseForExpression(forAttr.value);
        if (parsed) {
          currentLoopContext.push({
            item: parsed.item,
            items: parsed.items,
            index: parsed.index
          });
        }
      }

      // Process all Alpine attributes on this element
      node.attrs.forEach(attr => {
        const attrName = attr.name;
        const attrValue = attr.value;

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

    // Handle template content specially
    if (node.tagName === 'template' && node.content && node.content.childNodes) {
      // Template content doesn't have sourceCodeLocation, so we need to parse it differently
      // For now, fall back to the old regex approach for template content
      if (node.sourceCodeLocation) {
        const templateStart = node.sourceCodeLocation.startTag.endOffset;
        const templateEnd = node.sourceCodeLocation.endTag.startOffset;
        const templateHtml = html.substring(templateStart, templateEnd);

        // Use regex to find Alpine directives within template content
        const templateDirectives = findDirectivesInTemplateContent(templateHtml, templateStart, currentLoopContext, html);
        directives.push(...templateDirectives);
      }
    }

    // Recursively process child nodes
    if (node.childNodes) {
      node.childNodes.forEach(child => walkNode(child, currentLoopContext));
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