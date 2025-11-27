# Arrow Functions

- Shorter syntax for writing functions

## Basic syntax

```javascript
// traditional function
function greet(name) {
  return `Hello, ${name}!`;
}

// arrow function
const greet_ = (name) => {
  return `Hello, ${name}!`;
};

console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet_("Bob")); // Output: Hello, Bob!
```

### Multiple parameters

```javascript
//traditional
function add(a, b) {
  return a + b;
}

// Arrow
const add_ = (a, b) => {
  return a + b;
};
console.log(add(2, 3)); // Output: 5
```

### No parameters

````javascript
// no parameters
const sayHello = () => {
  return "Hello!";
};
console.log(sayHello()); // Output: Hello!```
````

### Implicit return

```javascript
// Implicit return
const multiply = (x, y) => x * y;
console.log(multiply(4, 5)); // Output: 20
```
