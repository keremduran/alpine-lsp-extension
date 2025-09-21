// Test TypeScript file to verify type inference for Alpine.js patterns

// Test 1: Simple array with for-of loop
function testSimpleArray() {
  const data = ({ fruits: ['Apple', 'Banana', 'Orange'] });
  const { fruits } = data;

  // This is what we generate for x-for
  for (const fruit of fruits) {
    // Hover over 'fruit' - should show: const fruit: string
    console.log(fruit);
  }

  // This is what we generate for x-text inside x-for
  const test1 = (() => {
    const fruit = fruits[0];
    return fruit; // Hover over 'fruit' - should show type
  })();
}

// Test 2: Array of objects
function testObjectArray() {
  const data = ({
    users: [
      { id: 1, name: 'John', age: 30, email: 'john@example.com' },
      { id: 2, name: 'Jane', age: 25, email: 'jane@example.com' }
    ]
  });
  const { users } = data;

  // What we generate for x-for with objects
  for (const user of users) {
    // Hover over 'user' - should show the object type with id, name, age, email
    console.log(user.name); // Hover over 'name' - should show it's a string property
  }

  // What we generate for expressions using loop variables
  const test2 = (() => {
    const user = users[0];
    return user.name; // Hover here - should show property type
  })();

  // Alternative approach with explicit type extraction
  type UserType = typeof users[0];
  const user2: UserType = users[0];
  console.log(user2.email); // Should have full intellisense
}

// Test 3: Nested arrays
function testNestedArrays() {
  const data = ({
    departments: [
      {
        name: 'Engineering',
        employees: [
          { name: 'Alice', role: 'Senior Dev', skills: ['JS', 'Python'] }
        ]
      }
    ]
  });
  const { departments } = data;

  // Nested x-for simulation
  for (const dept of departments) {
    console.log(dept.name); // Should show string
    for (const emp of dept.employees) {
      console.log(emp.role); // Should show string
      for (const skill of emp.skills) {
        console.log(skill); // Should show string
      }
    }
  }

  // Our IIFE pattern for nested loops
  const test3 = (() => {
    const dept = departments[0];
    return (() => {
      const emp = dept.employees[0];
      return emp.name;
    })();
  })();
}

// Test 4: Function-based data with ReturnType
function counter() {
  return {
    count: 2,
    hello: "world",
    items: [
      {id: "1", name: "test"},
      {id: "2", name: "test", age: "20"}
    ],
    increment() {
      this.count++
    }
  }
}

function testFunctionData() {
  const data = counter() as ReturnType<typeof counter>;
  const { count, hello, items } = data;

  // Should have type info
  console.log(count); // number
  console.log(hello); // string

  for (const item of items) {
    console.log(item.name); // Should show string
    console.log(item.id); // Should show string
    // item.age might be string | undefined depending on TS inference
  }

  // Our pattern
  const test4 = (() => {
    const item = items[0];
    return item.name;
  })();
}

// Test 5: Array with index
function testArrayWithIndex() {
  const data = ({ colors: ['red', 'green', 'blue'] });
  const { colors } = data;

  // Using forEach for index pattern
  colors.forEach((color, index) => {
    console.log(color); // string
    console.log(index); // number
  });

  // Our patterns
  const testIndex = (() => {
    const index: number = 0;
    return index;
  })();

  const testColor = (() => {
    const color = colors[0];
    return color;
  })();
}

// Run the tests
testSimpleArray();
testObjectArray();
testNestedArrays();
testFunctionData();
testArrayWithIndex();

// Export to prevent TS errors
export {};