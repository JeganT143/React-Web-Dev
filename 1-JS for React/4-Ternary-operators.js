// Old way
let message;
if (age >= 18) {
  message = "You are an adult.";
} else {
  message = "You are a minor.";
}

// new way with ternary operator
const age = 20;
const new_message = age >= 18 ? "You are an adult." : "You are a minor.";

console.log(new_message); // Output: You are an adult.

// In Template Literals
const year = 2024;
console.log(
  `The year is ${year % 4 == 0 ? "a leap year" : "not a leap year"}.`
);
// Output: The year is a leap year.

function getStatus(isOnline) {
  return isOnline ? "User is online." : "User is offline.";
}

console.log(getStatus(true)); // Output: User is online.
console.log(getStatus(false)); // Output: User is offline.

// In function calls
const score = 85;
console.log(score >= 50 ? "Pass" : "Fail"); // Output: Pass

const age_ = 25;
alert(age_ >= 18 ? "Access granted." : "Access denied.");
// This will show an alert with "Access granted."

// In array methods
const numbers = [1, 2, 3, 4, 5];
const evenOdd = numbers.map((num) => (num % 2 === 0 ? "Even" : "Odd"));
console.log(evenOdd); // Output: ["Odd", "Even", "Odd", "Even", "Odd"]

// Nested Ternaries
const score_ = 75;
const grade = score_ > 90 ? "A" : score_ > 75 ? "B" : score_ > 50 ? "C" : "F";
console.log(grade); // Output: B
