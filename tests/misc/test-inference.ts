const data = { fruits: ['Apple', 'Banana', 'Orange', 'Mango'] };
let { fruits } = data;
for (const fruit of fruits) {
  fruit; // This should be string
}