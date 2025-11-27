# JavaScript Destructuring

- Destructuring is a convenient way to extract values from arrays and objects into separate variables

## Array Destructuring

- Instead of accessing array elements by index, we can unpack them directly

### Basic Array Destructuring

```javascript
const colors = ["red", "green", "blue"];

// older way
const first_ = colors[0];
const second_ = colors[1];
const third_ = colors[2];

// New way with destructuring
const [first, second, third] = colors;
console.log(first);
console.log(second);
console.log(third);
```

### Skipping Elements

- We can skip elements we don't need

```javascript
const numbers = [1, 2, 3, 4, 5];
const [first, , third, , fifth] = numbers;

console.log(first); // 1
console.log(third); // 3
console.log(fifth); // 5
```

### Rest Operator(...)

- Collect remaining elements into a new array

```javascript
const subjects = ["Math", "Science", "History", "Art", "Physical Education"];
const [primary, secondary, ...others] = subjects;

console.log(primary); // Math
console.log(secondary); // Science
console.log(others); // ["History", "Art", "Physical Education"]
```

### Default Values

- Set fallback values if array doesn't have enough elements

```javascript
const [a, b, c = "default value"] = [10, 20];
console.log(a); // 10
console.log(b); // 20
console.log(c); // "default value"
```

## Object Destructuring

### Basic Object Destructuring

- Extract properties from objects by matching property names

```javascript
const person = { name: "Jegan", age: 22, city: "badulla" };
//older way
const name_old = person.name;
const age_old = person.age;
const city_old = person.city;
// new way
const { name, age, city } = person;
console.log(name);
console.log(age);
console.log(city);
```

### Renaming Variables

- Give extracted values different variable names

```javascript
const user = { id: 101, username: "jegan", email: "jegan@example.com" };
const { id: userId, username: userName, email: userEmail } = user;
console.log(userId);
console.log(userName);
console.log(userEmail);
```

### Default values

- Provide fallback values for missing properties

```javascript
const settings = { theme: "dark" };
const { theme, fontSize = "16px", showNotifications = true } = settings;
console.log(theme); // dark
console.log(fontSize); // 16px
console.log(showNotifications); // true
```

### Nested Destructuring

- Extract values from nested objects

```javascript
const new_user = {
  user_name: "Alice",
  address: {
    street: "123 Main St",
    current_city: "Wonderland",
    zip: "12345",
  },
};

const {
  user_name,
  address: { street, current_city, zip },
} = new_user;
console.log(user_name); // Alice
console.log(street); // 123 Main St
console.log(current_city); // Wonderland
console.log(zip); // 12345
```

### Rest Operator with Objects

- Collect remaining properties into a new object

```javascript
const product = { productId: 1, name: "Laptop", price: 999, color: "Silver" };
const { productId, ...details } = product;
console.log(productId); // 1
console.log(details); // { name: "Laptop", price: 999, color: "Silver" }
```

