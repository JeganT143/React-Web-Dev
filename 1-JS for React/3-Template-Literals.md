# Template Literals

- Template literals are way to work with strings in JavaScript

## Basic Syntax

```javascript
// Older way
const name = "John";
const greeting = "Hello, " + name + "!";
console.log(greeting); // Output: Hello, John!

// new way with template literals
const name2 = "John";
const greeting2 = `Hello, ${name2}!`;
console.log(greeting2); // Output: Hello, John!
```

- use **backticks** `\`\` instead of quotes `'` or `"`
- use `${expression}` to embed variables or expressions

```javascript
const firstName = "Jane";
const lastName = "Doe";
const fullGreeting = `Hello, ${firstName} ${lastName}!`;
console.log(fullGreeting); // Output: Hello, Jane Doe!
```

## String Interpolation

- Insert any JavaScript expression inside `${}`

### variables

```javascript
const product = "laptop";
const price = 999.99;
const message = `The price of the ${product} is $${price}.`;
console.log(message); // Output: The price of the laptop is $999.99.
```

### Expressions

```javascript
const a = 5;
const b = 10;
console.log(`The sum of ${a} and ${b} is ${a + b}.`); // Output: The sum of 5 and 10 is 15.
```

### Function Calls

```javascript
function getDiscounted(price) {
  return price * 0.9;
}

const price_ = 200;
console.log(`The discounted price is $${getDiscounted(price)}.`);
```

### Object Properties

```javascript
// Object property access
const user = { username: "Alice", age: 30 };
const { username, age } = user;
console.log(`User ${username} is ${age} years old.`);
```

### Ternary Operators

```javascript
// Ternary operator
const score = 85;
const result = `You have ${score >= 60 ? "passed" : "failed"} the exam.`;
console.log(result); // Output: You have passed the exam.
```

### Multi line strings

```javascript
// Multi-line strings
const multiLine = `This is line one.
This is line two.
This is line three.`;
console.log(multiLine);
// Output:
// This is line one.
// This is line two.
// This is line three.
```
