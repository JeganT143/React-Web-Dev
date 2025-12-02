# Short Circuit and Logical Operators

## Main Logical Operators

### AND Operator

- Returns `true` only for both operands are truthy

```javascript
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
```

### OR Operator

- Returns `true` if at least one operand is truthy

```javascript
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
```

### NOT Operator

- Inverts the boolean value

```javascript
console.log(!true); // false
console.log(!false); // true
console.log(!!true); // true
console.log(!!false); // false
```

## Short Circuit Evaluation

- Javascript stops evaluating as soon as it knows the result

### AND short- circuiting

- If first value is falsy -> return it immediately
- If first value is truthy -> return second value

```javascript
// AND short-circuiting\
console.log(false && "hello"); // false
console.log(0, "hello"); // 0
console.log("", "hello"); // ''
console.log(true && "hello"); // 'hello'
console.log(42 && "hello"); // 'hello'
```

### OR Short-circuiting

- If first value is truthy -> returns it immediately
- If first value is falsy -> returns second value

```javascript
// OR short-circuiting
console.log(true || "hello"); // true
console.log(42 || "hello"); // 42
console.log(false || "hello"); // 'hello'
console.log(0 || "hello"); // 'hello'
console.log("" || "hello"); // 'hello'
```

### Falsy values in javascript

- These values are considered `false ` in boolean context

```javascript
false; // the boolean false
0; // the number zero
(""); // empty string
null; // null
undefined; // undefined
NaN; // Not a Number

// Everything else is TRUTHY!
```

## Use cases

1. Default value with OR

```javascript
// Set default value if variable is falsy
const username = "";
const displayName = username || "Guest";
console.log(displayName); // 'Guest'

const port = 0;
const serverPort = port || 3000;
console.log(serverPort); // 3000

// Function parameters
function greet(name) {
  name = name || "Stranger";
  return `Hello, ${name}!`;
}
console.log(greet()); // Hello, Stranger!
console.log(greet("Alice")); // Hello, Alice!
```

2. Conditional execution with AND

```javascript
// Execute code only if condition is true
const isLoggedIn = true;
isLoggedIn && console.log("Welcome back!"); // Prints: Welcome back!

const user = { name: "Alice" };
user && console.log(user.name); // Prints: Alice

// Multiple conditions
const age = 25;
const hasLicense = true;
age >= 18 && hasLicense && console.log("Can drive!"); // Prints: Can drive!
```

3. Guard Clauses

```javascript
function processUser(user) {
  // Exit early if no user
  if (!user) return;

  // Or with short-circuit
  user && console.log(`Processing ${user.name}`);
}

processUser(null); // Does nothing
processUser({ name: "Bob" }); // Processing Bob
```
4. Conditional Object Properties

