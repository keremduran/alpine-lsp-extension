# Alpine LSP Test Cases: One Function Per Expression Approach

## Overview
This document defines the comprehensive test cases for our "one function per expression" approach to Alpine.js LSP integration. Each Alpine expression gets its own TypeScript function with complete scope context.

## Core Principle
- **One expression = One function** with full scope context
- **Preserve exact expressions** for accurate positioning
- **Include all dependencies** in each function
- **Use existing expression ID mapping** system

---

## Test Case 1: Basic Data Access

### HTML Input
```html
<div x-data="{
  message: 'Hello World',
  count: 42,
  isActive: true,
  user: null
}">
  <!-- Expression: "message" at line 7, chars 15-22 -->
  <h1 x-text="message"></h1>

  <!-- Expression: "count" at line 9, chars 15-20 -->
  <p x-text="count"></p>

  <!-- Expression: "isActive" at line 11, chars 15-23 -->
  <div x-show="isActive"></div>

  <!-- Expression: "!user" at line 13, chars 15-20 -->
  <span x-show="!user"></span>
</div>
```

### Generated TypeScript
```typescript
// expr_7_15: Expression "message" from chars 15-22
function expr_7_15() {
  const data = {
    message: 'Hello World',
    count: 42,
    isActive: true,
    user: null
  };
  const { message, count, isActive, user } = data;

  return message; // TypeScript knows: string
}

// expr_9_15: Expression "count" from chars 15-20
function expr_9_15() {
  const data = {
    message: 'Hello World',
    count: 42,
    isActive: true,
    user: null
  };
  const { message, count, isActive, user } = data;

  return count; // TypeScript knows: number
}

// expr_11_15: Expression "isActive" from chars 15-23
function expr_11_15() {
  const data = {
    message: 'Hello World',
    count: 42,
    isActive: true,
    user: null
  };
  const { message, count, isActive, user } = data;

  return isActive; // TypeScript knows: boolean
}

// expr_13_15: Expression "!user" from chars 15-20
function expr_13_15() {
  const data = {
    message: 'Hello World',
    count: 42,
    isActive: true,
    user: null
  };
  const { message, count, isActive, user } = data;

  return !user; // TypeScript knows: boolean
}
```

### Expected Hover Results
- Hover on `message`: `(property) message: string`
- Hover on `count`: `(property) count: number`
- Hover on `isActive`: `(property) isActive: boolean`
- Hover on `user` in `!user`: `(property) user: null`

---

## Test Case 2: Functions and Event Handlers

### HTML Input
```html
<div x-data="{
  count: 0,
  increment() { this.count++ },
  decrement() { this.count-- },
  reset() { this.count = 0 },
  multiply(factor) { return this.count * factor }
}">
  <!-- Expression: "increment()" at line 8, chars 18-29 -->
  <button @click="increment()">+</button>

  <!-- Expression: "decrement()" at line 10, chars 18-29 -->
  <button @click="decrement()">-</button>

  <!-- Expression: "reset()" at line 12, chars 18-25 -->
  <button @click="reset()">Reset</button>

  <!-- Expression: "count = 10" at line 14, chars 18-28 -->
  <button @click="count = 10">Set to 10</button>

  <!-- Expression: "multiply(2)" at line 16, chars 15-26 -->
  <span x-text="multiply(2)"></span>

  <!-- Expression: "count > 5 ? 'High' : 'Low'" at line 18, chars 15-42 -->
  <p x-text="count > 5 ? 'High' : 'Low'"></p>
</div>
```

### Generated TypeScript
```typescript
// expr_8_18: Expression "increment()" from chars 18-29
function expr_8_18() {
  const data = {
    count: 0,
    increment() { this.count++ },
    decrement() { this.count-- },
    reset() { this.count = 0 },
    multiply(factor: any) { return this.count * factor }
  };
  const { count, increment, decrement, reset, multiply } = data;

  return increment(); // TypeScript knows: void
}

// expr_10_18: Expression "decrement()" from chars 18-29
function expr_10_18() {
  const data = {
    count: 0,
    increment() { this.count++ },
    decrement() { this.count-- },
    reset() { this.count = 0 },
    multiply(factor: any) { return this.count * factor }
  };
  const { count, increment, decrement, reset, multiply } = data;

  return decrement(); // TypeScript knows: void
}

// expr_12_18: Expression "reset()" from chars 18-25
function expr_12_18() {
  const data = {
    count: 0,
    increment() { this.count++ },
    decrement() { this.count-- },
    reset() { this.count = 0 },
    multiply(factor: any) { return this.count * factor }
  };
  const { count, increment, decrement, reset, multiply } = data;

  return reset(); // TypeScript knows: void
}

// expr_14_18: Expression "count = 10" from chars 18-28
function expr_14_18() {
  const data = {
    count: 0,
    increment() { this.count++ },
    decrement() { this.count-- },
    reset() { this.count = 0 },
    multiply(factor: any) { return this.count * factor }
  };
  let { count, increment, decrement, reset, multiply } = data;

  return count = 10; // TypeScript knows: number
}

// expr_16_15: Expression "multiply(2)" from chars 15-26
function expr_16_15() {
  const data = {
    count: 0,
    increment() { this.count++ },
    decrement() { this.count-- },
    reset() { this.count = 0 },
    multiply(factor: any) { return this.count * factor }
  };
  const { count, increment, decrement, reset, multiply } = data;

  return multiply(2); // TypeScript knows: any (return type from multiply)
}

// expr_18_15: Expression "count > 5 ? 'High' : 'Low'" from chars 15-42
function expr_18_15() {
  const data = {
    count: 0,
    increment() { this.count++ },
    decrement() { this.count-- },
    reset() { this.count = 0 },
    multiply(factor: any) { return this.count * factor }
  };
  const { count, increment, decrement, reset, multiply } = data;

  return count > 5 ? 'High' : 'Low'; // TypeScript knows: string
}
```

### Expected Hover Results
- Hover on `increment`: `(method) increment(): void`
- Hover on `count` in assignment: `(property) count: number`
- Hover on `multiply`: `(method) multiply(factor: any): any`
- Hover on conditional: `string` (result of ternary)

---

## Test Case 3: Simple x-for Loops

### HTML Input
```html
<div x-data="{
  colors: ['red', 'green', 'blue'],
  numbers: [1, 2, 3, 4, 5]
}">
  <!-- Expression: "colors.length" at line 5, chars 15-28 -->
  <p x-text="colors.length"></p>

  <template x-for="color in colors">
    <!-- Expression: "color" at line 8, chars 20-25 -->
    <div x-text="color"></div>

    <!-- Expression: "color.toUpperCase()" at line 10, chars 20-39 -->
    <span x-text="color.toUpperCase()"></span>
  </template>

  <template x-for="(num, index) in numbers">
    <!-- Expression: "index" at line 14, chars 20-25 -->
    <div x-text="index"></div>

    <!-- Expression: "num * 2" at line 16, chars 20-27 -->
    <span x-text="num * 2"></span>

    <!-- Expression: "`Item ${index}: ${num}`" at line 18, chars 20-44 -->
    <p x-text="`Item ${index}: ${num}`"></p>
  </template>
</div>
```

### Generated TypeScript
```typescript
// expr_5_15: Expression "colors.length" from chars 15-28 (outside loop)
function expr_5_15() {
  const data = {
    colors: ['red', 'green', 'blue'],
    numbers: [1, 2, 3, 4, 5]
  };
  const { colors, numbers } = data;

  return colors.length; // TypeScript knows: number
}

// expr_8_20: Expression "color" from chars 20-25 (inside x-for)
function expr_8_20() {
  const data = {
    colors: ['red', 'green', 'blue'],
    numbers: [1, 2, 3, 4, 5]
  };
  const { colors, numbers } = data;

  for (let color of colors) {
    return color; // TypeScript knows: string (from string array)
  }
}

// expr_10_20: Expression "color.toUpperCase()" from chars 20-39
function expr_10_20() {
  const data = {
    colors: ['red', 'green', 'blue'],
    numbers: [1, 2, 3, 4, 5]
  };
  const { colors, numbers } = data;

  for (let color of colors) {
    return color.toUpperCase(); // TypeScript knows: string
  }
}

// expr_14_20: Expression "index" from chars 20-25 (with index)
function expr_14_20() {
  const data = {
    colors: ['red', 'green', 'blue'],
    numbers: [1, 2, 3, 4, 5]
  };
  const { colors, numbers } = data;

  for (let index = 0; index < numbers.length; index++) {
    let num = numbers[index];
    return index; // TypeScript knows: number
  }
}

// expr_16_20: Expression "num * 2" from chars 20-27
function expr_16_20() {
  const data = {
    colors: ['red', 'green', 'blue'],
    numbers: [1, 2, 3, 4, 5]
  };
  const { colors, numbers } = data;

  for (let index = 0; index < numbers.length; index++) {
    let num = numbers[index];
    return num * 2; // TypeScript knows: number
  }
}

// expr_18_20: Expression "`Item ${index}: ${num}`" from chars 20-44
function expr_18_20() {
  const data = {
    colors: ['red', 'green', 'blue'],
    numbers: [1, 2, 3, 4, 5]
  };
  const { colors, numbers } = data;

  for (let index = 0; index < numbers.length; index++) {
    let num = numbers[index];
    return `Item ${index}: ${num}`; // TypeScript knows: string
  }
}
```

### Expected Hover Results
- Hover on `color` in loop: `(parameter) color: string`
- Hover on `toUpperCase`: `(method) String.toUpperCase(): string`
- Hover on `index`: `(parameter) index: number`
- Hover on `num`: `(parameter) num: number`

---

## Test Case 4: Object Arrays with Nested Properties

### HTML Input
```html
<div x-data="{
  users: [
    {
      id: 1,
      name: 'John',
      profile: {
        age: 30,
        settings: { theme: 'dark', notifications: true },
        address: { city: 'NYC', country: 'USA' }
      },
      hobbies: ['coding', 'gaming']
    },
    {
      id: 2,
      name: 'Jane',
      profile: {
        age: 25,
        settings: { theme: 'light', notifications: false },
        address: { city: 'LA', country: 'USA' }
      },
      hobbies: ['reading', 'traveling']
    }
  ],
  currentUserId: 1
}">
  <!-- Expression: "users.find(u => u.id === currentUserId)" at line 25, chars 15-55 -->
  <h1 x-text="users.find(u => u.id === currentUserId)"></h1>

  <template x-for="user in users">
    <!-- Expression: "user.name" at line 28, chars 20-29 -->
    <h2 x-text="user.name"></h2>

    <!-- Expression: "user.profile.age" at line 30, chars 20-35 -->
    <p x-text="user.profile.age"></p>

    <!-- Expression: "user.profile.settings.theme" at line 32, chars 20-47 -->
    <div x-text="user.profile.settings.theme"></div>

    <!-- Expression: "user.profile.address.city.toUpperCase()" at line 34, chars 20-57 -->
    <span x-text="user.profile.address.city.toUpperCase()"></span>

    <!-- Expression: "user.hobbies.join(', ')" at line 36, chars 20-43 -->
    <p x-text="user.hobbies.join(', ')"></p>

    <!-- Expression: "user.id === currentUserId" at line 38, chars 15-41 -->
    <div x-show="user.id === currentUserId"></div>

    <template x-for="hobby in user.hobbies">
      <!-- Expression: "hobby" at line 41, chars 24-29 -->
      <span x-text="hobby"></span>

      <!-- Expression: "`${user.name} likes ${hobby}`" at line 43, chars 24-54 -->
      <p x-text="`${user.name} likes ${hobby}`"></p>
    </template>
  </template>
</div>
```

### Generated TypeScript
```typescript
// expr_25_15: Expression "users.find(u => u.id === currentUserId)" from chars 15-55
function expr_25_15() {
  const data = {
    users: [
      {
        id: 1,
        name: 'John',
        profile: {
          age: 30,
          settings: { theme: 'dark', notifications: true },
          address: { city: 'NYC', country: 'USA' }
        },
        hobbies: ['coding', 'gaming']
      },
      {
        id: 2,
        name: 'Jane',
        profile: {
          age: 25,
          settings: { theme: 'light', notifications: false },
          address: { city: 'LA', country: 'USA' }
        },
        hobbies: ['reading', 'traveling']
      }
    ],
    currentUserId: 1
  };
  const { users, currentUserId } = data;

  return users.find(u => u.id === currentUserId); // TypeScript knows: User | undefined
}

// expr_28_20: Expression "user.name" from chars 20-29 (inside user loop)
function expr_28_20() {
  const data = {
    users: [
      {
        id: 1,
        name: 'John',
        profile: {
          age: 30,
          settings: { theme: 'dark', notifications: true },
          address: { city: 'NYC', country: 'USA' }
        },
        hobbies: ['coding', 'gaming']
      },
      {
        id: 2,
        name: 'Jane',
        profile: {
          age: 25,
          settings: { theme: 'light', notifications: false },
          address: { city: 'LA', country: 'USA' }
        },
        hobbies: ['reading', 'traveling']
      }
    ],
    currentUserId: 1
  };
  const { users, currentUserId } = data;

  for (let user of users) {
    return user.name; // TypeScript knows: string
  }
}

// expr_30_20: Expression "user.profile.age" from chars 20-35
function expr_30_20() {
  const data = {
    users: [
      {
        id: 1,
        name: 'John',
        profile: {
          age: 30,
          settings: { theme: 'dark', notifications: true },
          address: { city: 'NYC', country: 'USA' }
        },
        hobbies: ['coding', 'gaming']
      },
      {
        id: 2,
        name: 'Jane',
        profile: {
          age: 25,
          settings: { theme: 'light', notifications: false },
          address: { city: 'LA', country: 'USA' }
        },
        hobbies: ['reading', 'traveling']
      }
    ],
    currentUserId: 1
  };
  const { users, currentUserId } = data;

  for (let user of users) {
    return user.profile.age; // TypeScript knows: number
  }
}

// expr_32_20: Expression "user.profile.settings.theme" from chars 20-47
function expr_32_20() {
  const data = {
    users: [
      {
        id: 1,
        name: 'John',
        profile: {
          age: 30,
          settings: { theme: 'dark', notifications: true },
          address: { city: 'NYC', country: 'USA' }
        },
        hobbies: ['coding', 'gaming']
      },
      {
        id: 2,
        name: 'Jane',
        profile: {
          age: 25,
          settings: { theme: 'light', notifications: false },
          address: { city: 'LA', country: 'USA' }
        },
        hobbies: ['reading', 'traveling']
      }
    ],
    currentUserId: 1
  };
  const { users, currentUserId } = data;

  for (let user of users) {
    return user.profile.settings.theme; // TypeScript knows: string
  }
}

// expr_34_20: Expression "user.profile.address.city.toUpperCase()" from chars 20-57
function expr_34_20() {
  const data = {
    users: [
      {
        id: 1,
        name: 'John',
        profile: {
          age: 30,
          settings: { theme: 'dark', notifications: true },
          address: { city: 'NYC', country: 'USA' }
        },
        hobbies: ['coding', 'gaming']
      },
      {
        id: 2,
        name: 'Jane',
        profile: {
          age: 25,
          settings: { theme: 'light', notifications: false },
          address: { city: 'LA', country: 'USA' }
        },
        hobbies: ['reading', 'traveling']
      }
    ],
    currentUserId: 1
  };
  const { users, currentUserId } = data;

  for (let user of users) {
    return user.profile.address.city.toUpperCase(); // TypeScript knows: string
  }
}

// expr_36_20: Expression "user.hobbies.join(', ')" from chars 20-43
function expr_36_20() {
  const data = {
    users: [
      {
        id: 1,
        name: 'John',
        profile: {
          age: 30,
          settings: { theme: 'dark', notifications: true },
          address: { city: 'NYC', country: 'USA' }
        },
        hobbies: ['coding', 'gaming']
      },
      {
        id: 2,
        name: 'Jane',
        profile: {
          age: 25,
          settings: { theme: 'light', notifications: false },
          address: { city: 'LA', country: 'USA' }
        },
        hobbies: ['reading', 'traveling']
      }
    ],
    currentUserId: 1
  };
  const { users, currentUserId } = data;

  for (let user of users) {
    return user.hobbies.join(', '); // TypeScript knows: string
  }
}

// expr_38_15: Expression "user.id === currentUserId" from chars 15-41
function expr_38_15() {
  const data = {
    users: [
      {
        id: 1,
        name: 'John',
        profile: {
          age: 30,
          settings: { theme: 'dark', notifications: true },
          address: { city: 'NYC', country: 'USA' }
        },
        hobbies: ['coding', 'gaming']
      },
      {
        id: 2,
        name: 'Jane',
        profile: {
          age: 25,
          settings: { theme: 'light', notifications: false },
          address: { city: 'LA', country: 'USA' }
        },
        hobbies: ['reading', 'traveling']
      }
    ],
    currentUserId: 1
  };
  const { users, currentUserId } = data;

  for (let user of users) {
    return user.id === currentUserId; // TypeScript knows: boolean
  }
}

// expr_41_24: Expression "hobby" from chars 24-29 (nested loop)
function expr_41_24() {
  const data = {
    users: [
      {
        id: 1,
        name: 'John',
        profile: {
          age: 30,
          settings: { theme: 'dark', notifications: true },
          address: { city: 'NYC', country: 'USA' }
        },
        hobbies: ['coding', 'gaming']
      },
      {
        id: 2,
        name: 'Jane',
        profile: {
          age: 25,
          settings: { theme: 'light', notifications: false },
          address: { city: 'LA', country: 'USA' }
        },
        hobbies: ['reading', 'traveling']
      }
    ],
    currentUserId: 1
  };
  const { users, currentUserId } = data;

  for (let user of users) {
    for (let hobby of user.hobbies) {
      return hobby; // TypeScript knows: string
    }
  }
}

// expr_43_24: Expression "`${user.name} likes ${hobby}`" from chars 24-54 (nested loop with parent scope)
function expr_43_24() {
  const data = {
    users: [
      {
        id: 1,
        name: 'John',
        profile: {
          age: 30,
          settings: { theme: 'dark', notifications: true },
          address: { city: 'NYC', country: 'USA' }
        },
        hobbies: ['coding', 'gaming']
      },
      {
        id: 2,
        name: 'Jane',
        profile: {
          age: 25,
          settings: { theme: 'light', notifications: false },
          address: { city: 'LA', country: 'USA' }
        },
        hobbies: ['reading', 'traveling']
      }
    ],
    currentUserId: 1
  };
  const { users, currentUserId } = data;

  for (let user of users) {
    for (let hobby of user.hobbies) {
      return `${user.name} likes ${hobby}`; // TypeScript knows: string
    }
  }
}
```

### Expected Hover Results
- Hover on `user.name`: `(property) name: string`
- Hover on `profile` in `user.profile.age`: `(property) profile: { age: number; settings: {...}; address: {...} }`
- Hover on `age` in `user.profile.age`: `(property) age: number`
- Hover on `theme` in `user.profile.settings.theme`: `(property) theme: string`
- Hover on `city` in nested access: `(property) city: string`
- Hover on `toUpperCase`: `(method) String.toUpperCase(): string`
- Hover on `hobby` in nested loop: `(parameter) hobby: string`
- Hover on `user.name` in nested template literal: `(property) name: string`

---

## Test Case 5: Function-based x-data

### HTML Input
```html
<script>
function todoApp() {
  return {
    todos: [
      { id: 1, text: 'Learn Alpine', done: false },
      { id: 2, text: 'Build LSP', done: true }
    ],
    newTodo: '',
    addTodo() {
      if (this.newTodo.trim()) {
        this.todos.push({
          id: Date.now(),
          text: this.newTodo,
          done: false
        });
        this.newTodo = '';
      }
    },
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id);
    },
    get completedCount() {
      return this.todos.filter(t => t.done).length;
    }
  }
}
</script>

<div x-data="todoApp()">
  <!-- Expression: "newTodo" at line 32, chars 20-27 -->
  <input x-model="newTodo" />

  <!-- Expression: "addTodo()" at line 34, chars 18-27 -->
  <button @click="addTodo()">Add</button>

  <!-- Expression: "completedCount" at line 36, chars 15-28 -->
  <p x-text="completedCount"></p>

  <template x-for="todo in todos">
    <!-- Expression: "todo.text" at line 39, chars 20-29 -->
    <span x-text="todo.text"></span>

    <!-- Expression: "todo.done" at line 41, chars 21-30 -->
    <input x-model="todo.done" type="checkbox" />

    <!-- Expression: "removeTodo(todo.id)" at line 43, chars 18-36 -->
    <button @click="removeTodo(todo.id)">Delete</button>
  </template>
</div>
```

### Generated TypeScript
```typescript
// First, include the script function
function todoApp() {
  return {
    todos: [
      { id: 1, text: 'Learn Alpine', done: false },
      { id: 2, text: 'Build LSP', done: true }
    ],
    newTodo: '',
    addTodo() {
      if (this.newTodo.trim()) {
        this.todos.push({
          id: Date.now(),
          text: this.newTodo,
          done: false
        });
        this.newTodo = '';
      }
    },
    removeTodo(id: any) {
      this.todos = this.todos.filter(t => t.id !== id);
    },
    get completedCount() {
      return this.todos.filter(t => t.done).length;
    }
  }
}

// expr_32_20: Expression "newTodo" from chars 20-27
function expr_32_20() {
  const data = todoApp();
  const { todos, newTodo, addTodo, removeTodo, completedCount } = data;

  return newTodo; // TypeScript knows: string
}

// expr_34_18: Expression "addTodo()" from chars 18-27
function expr_34_18() {
  const data = todoApp();
  const { todos, newTodo, addTodo, removeTodo, completedCount } = data;

  return addTodo(); // TypeScript knows: void
}

// expr_36_15: Expression "completedCount" from chars 15-28
function expr_36_15() {
  const data = todoApp();
  const { todos, newTodo, addTodo, removeTodo, completedCount } = data;

  return completedCount; // TypeScript knows: number (from getter)
}

// expr_39_20: Expression "todo.text" from chars 20-29 (inside loop)
function expr_39_20() {
  const data = todoApp();
  const { todos, newTodo, addTodo, removeTodo, completedCount } = data;

  for (let todo of todos) {
    return todo.text; // TypeScript knows: string
  }
}

// expr_41_21: Expression "todo.done" from chars 21-30
function expr_41_21() {
  const data = todoApp();
  const { todos, newTodo, addTodo, removeTodo, completedCount } = data;

  for (let todo of todos) {
    return todo.done; // TypeScript knows: boolean
  }
}

// expr_43_18: Expression "removeTodo(todo.id)" from chars 18-36
function expr_43_18() {
  const data = todoApp();
  const { todos, newTodo, addTodo, removeTodo, completedCount } = data;

  for (let todo of todos) {
    return removeTodo(todo.id); // TypeScript knows: void
  }
}
```

### Expected Hover Results
- Hover on `newTodo`: `(property) newTodo: string`
- Hover on `addTodo`: `(method) addTodo(): void`
- Hover on `completedCount`: `(property) completedCount: number`
- Hover on `todo.text`: `(property) text: string`
- Hover on `todo.done`: `(property) done: boolean`
- Hover on `removeTodo` in call: `(method) removeTodo(id: any): void`

---

## Mapping Table Structure

### SimpleMapping Interface (Extended)
```typescript
interface SimpleMapping {
  expressionId: string;        // "expr_line_char"
  htmlPosition: Position;      // { line: number, character: number }
  expression: string;          // Exact expression text
  directiveName: string;       // "x-text", "x-show", "@click", etc.
  expressionStart: number;     // Character position where expression starts
  expressionEnd: number;       // Character position where expression ends
  inLoop?: boolean;            // True if inside x-for template
  loopContext?: {              // Loop variable information
    item: string;              // Loop variable name ("item", "user", etc.)
    items: string;             // Array being looped ("items", "users", etc.)
    index?: string;            // Index variable name if present
    parent?: LoopContext;      // Parent loop context for nested loops
  };
  parentData: string;          // x-data content for this expression's scope
}
```

### Example Mapping Entry
```javascript
{
  expressionId: "expr_39_20",
  htmlPosition: { line: 39, character: 20 },
  expression: "todo.text",
  directiveName: "x-text",
  expressionStart: 20,
  expressionEnd: 29,
  inLoop: true,
  loopContext: {
    item: "todo",
    items: "todos"
  },
  parentData: "todoApp()"
}
```

---

## How the LSP Uses This System

### 1. Position Mapping Process
1. **User hovers** at HTML position `{ line: 39, character: 22 }`
2. **Find mapping** by checking which mapping contains this position (`expressionStart <= 22 <= expressionEnd`)
3. **Get expression ID**: `"expr_39_20"`
4. **Calculate offset**: `22 - 20 = 2` (hovering on `do` in `todo.text`)

### 2. TypeScript Function Lookup
1. **Find function**: Search for `function expr_39_20()` in generated TypeScript
2. **Get line**: Find the `return todo.text;` line
3. **Calculate character position**: Find position of `todo.text` + offset (2) = position of `do` in `todo`

### 3. TypeScript Hover
1. **Ask TypeScript service**: Get hover info at that exact character position
2. **Return result**: TypeScript returns `(property) text: string`
3. **Format for LSP**: Convert to LSP hover format

### 4. Scope Context Benefits
- **Loop variables properly typed**: `todo` is typed based on the `todos` array element type
- **Parent scope available**: Can access both loop variables and parent data
- **Nested loops work**: Inner loop has access to outer loop variables
- **Method calls typed**: Function calls get proper parameter and return type info

---

## Implementation Notes

### Key Advantages
1. **Simple mapping**: Use existing expression ID system
2. **Accurate positioning**: Exact character-level mapping
3. **Complete scope context**: Each function includes all necessary variables
4. **TypeScript-powered**: Full TypeScript inference for all expressions
5. **Alpine-compatible**: Uses Alpine's native x-for parsing logic

### Positioning Accuracy
- **Expression boundaries**: Know exactly where each expression starts/ends
- **Character-level precision**: Can map to specific characters within expressions
- **Consistent with Alpine**: Expressions copied exactly as Alpine sees them

### Scope Resolution
- **No scope chain walking**: Each function is self-contained
- **Loop context included**: x-for variables available within appropriate functions
- **Parent data accessible**: Original x-data available in all derived functions
- **Nested loops supported**: Inner functions include outer loop variables

This approach provides comprehensive type support for all Alpine.js patterns while maintaining compatibility with the existing LSP infrastructure.