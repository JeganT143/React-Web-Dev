// and operator
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// OR Operator
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// NOT Operator
console.log(!true); // false
console.log(!false); // true
console.log(!!true); // true
console.log(!!false); // false

// AND short-circuiting\
console.log(false && "hello"); // false
console.log(0, "hello"); // 0
console.log("", "hello"); // ''
console.log(true && "hello"); // 'hello'
console.log(42 && "hello"); // 'hello'

// OR short-circuiting
console.log(true || "hello"); // true
console.log(42 || "hello"); // 42
console.log(false || "hello"); // 'hello'
console.log(0 || "hello"); // 'hello'
console.log("" || "hello"); // 'hello'
//

//default values with OR operator
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

// Conditional execution
// Execute code only if condition is true
const isLoggedIn = true;
isLoggedIn && console.log("Welcome back!"); // Prints: Welcome back!

const user = { name: "Alice" };
user && console.log(user.name); // Prints: Alice

// Multiple conditions
const age = 25;
const hasLicense = true;
age >= 18 && hasLicense && console.log("Can drive!"); // Prints: Can drive!

// Guard clauses
function processUser(user) {
  // Exit early if no user
  if (!user) return;
  
  // Or with short-circuit
  user && console.log(`Processing ${user.name}`);
}

processUser(null);                    // Does nothing
processUser({ name: 'Bob' });         // Processing Bob