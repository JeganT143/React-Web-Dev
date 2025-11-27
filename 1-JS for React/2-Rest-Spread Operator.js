// Collecting remaining array elements
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...others] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(others); // [3, 4, 5]

const colors = ["red", "green", "blue", "yellow", "purple"];
const [primary_color, ...other_colors] = colors;
console.log(primary_color);
console.log(other_colors);

// Rest with objects
const user = {
  id: 1,
  name: "Alice",
  age: 30,
  city: "Wonderland",
  email: "alice@example.com",
};

const { id, name, ...otherDetails } = user;
console.log(id);
console.log(name);
console.log(otherDetails);

// Rest in function parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30, 40)); // 100
console.log(sum(100)); // 100

function introduce(greeting, ...names) {
  return `${greeting}, ${names.join(",")}!`;
}

console.log(introduce("Hello", "Alice", "Bob", "Charlie")); // "Hello, Alice,Bob,Charlie!"
console.log(introduce("Welcome", "Dave")); // "Welcome, Dave!"

// Spread with arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// combining arrays
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

// adding elements
const newarray = [0, ...arr1, 7];
console.log(newarray); // [0, 1, 2, 3, 7]

// copying Arrays
const arr = [10, 20, 30];
const arrCopy = [...arr];
console.log(arrCopy); // [10, 20, 30]

// Spread in Function Calls
const nums = [5, 10, 15];

// Old way
console.log(Math.max.apply(null, nums)); // 15

// with spread
console.log(Math.max(...nums)); // 15
console.log(Math.min(...nums)); // 5

function greet(first, second, third) {
  console.log(`Hello ${first}, ${second} and ${third}!`);
}

const names = ["Alice", "Bob", "Charlie"];
greet(...names); // "Hello Alice, Bob and Charlie!"

// Expand object properties
const person = { name: "John", age: 25 };
const address = { city: "New York", country: "USA" };

// Combining objects
const complete = { ...person, ...address };
console.log(complete); // {name: "John", age: 25, city: "New York", country: "USA"}

// Copying objects
const original = { name: "Jane", age: 28 };
const copy = { ...original };
copy.age = 30; // modifying copy
console.log(original);
console.log(copy); // original remains unchanged

// Overriding properties
const defaults = { theme: "light", fontSize: 14, language: "en" };
const userSettings = { fontSize: 16, language: "fr" };
const settings = { ...defaults, ...userSettings };
console.log(settings); // {theme: "light", fontSize: 16, language: "fr"}

const client = { name: "bob", age: 40, role: "admin" };
const updatedClient = { ...client, age: 41, city: "Los Angeles" };
console.log(updatedClient); // {name: "bob", age: 41, role: "admin", city: "Los Angeles"}
