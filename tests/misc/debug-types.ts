// Debug TypeScript type inference

function test1() {
  let data = { items: ['Apple', 'Banana', 'Orange'] };
  let items = data.items;

  // Hover over items here - should show string[]
  console.log(items);
}

function test2() {
  const data = { items: ['Apple', 'Banana', 'Orange'] };
  const { items } = data;

  // Hover over items here - should show string[]
  console.log(items);
}

function test3() {
  const data = ({ items: ['Apple', 'Banana', 'Orange'] });
  const { items } = data;

  // Hover over items here - might show {}
  console.log(items);
}

function test4() {
  let data = { items: ['Apple', 'Banana', 'Orange'] };

  const expressionMap = {
    "test": () => { items }, // Error: items not in scope
  };
}

function test5() {
  let data = { items: ['Apple', 'Banana', 'Orange'] };
  let items = data.items;

  const expressionMap = {
    "test": () => { items }, // Hover over items here
  };
}