// Object destructuring.
//
// Just like arrays, you can pull values out of objects into variables.
// With objects you match by KEY name (not position). This is everywhere
// in modern JS and React code, so it is worth practicing a lot.

const user = {
  name: "Ada",
  age: 36,
  city: "London",
};

// pull out name and age into their own variables
const { name, age } = user;
console.log(name, age); // "Ada" 36

// rename while destructuring: key:newName
const { name: fullName } = user;
console.log(fullName); // "Ada"

// default values if the key is missing
const { country = "Unknown" } = user;
console.log(country); // "Unknown"

// the rest pattern collects the remaining keys into a new object
const { name: n, ...rest } = user;
console.log(rest); // { age: 36, city: "London" }

// destructuring in a function's parameters is super common.
// instead of taking the whole object and reading options.width etc.
function drawBox({ width, height, color = "black" }) {
  console.log(`A ${width}x${height} ${color} box`);
}
drawBox({ width: 10, height: 5 });
drawBox({ width: 20, height: 20, color: "red" });

// nested destructuring
const order = {
  id: 1,
  customer: { name: "Bob", email: "bob@example.com" },
};
const {
  customer: { email },
} = order;
console.log(email); // "bob@example.com"
