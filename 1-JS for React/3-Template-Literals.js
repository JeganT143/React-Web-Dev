// Older way
const name = "John";
const greeting = "Hello, " + name + "!";
console.log(greeting); // Output: Hello, John!

// new way with template literals
const name2 = "John";
const greeting2 = `Hello, ${name2}!`;
console.log(greeting2); // Output: Hello, John!

const firstName = "Jane";
const lastName = "Doe";
const fullGreeting = `Hello, ${firstName} ${lastName}!`;
console.log(fullGreeting); // Output: Hello, Jane Doe!

const product = "laptop";
const price = 999.99;
const message = `The price of the ${product} is $${price}.`;
console.log(message); // Output: The price of the laptop is $999.99.

const a = 5;
const b = 10;
console.log(`The sum of ${a} and ${b} is ${a + b}.`); // Output: The sum of 5 and 10 is 15.

function getDiscounted(price) {
  return price * 0.9;
}

const price_ = 200;
console.log(`The discounted price is $${getDiscounted(price)}.`); // Output: The discounted price is $180.

// Object property access
const user = { username: "Alice", age: 30 };
const { username, age } = user;
console.log(`User ${username} is ${age} years old.`); // Output: User Alice is 30 years old.

// Ternary operator
const score = 85;
const result = `You have ${score >= 60 ? "passed" : "failed"} the exam.`;
console.log(result); // Output: You have passed the exam.

// Multi-line strings
const multiLine = `This is line one.
This is line two.
This is line three.`;
console.log(multiLine);
// Output:
// This is line one.
// This is line two.
// This is line three.  