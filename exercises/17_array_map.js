// Array.map()
//
// map() makes a NEW array by running a function on every item of the old
// one. The old array is not changed. This is one of the most used methods
// in JavaScript, so I want to get really comfortable with it.

const numbers = [1, 2, 3, 4, 5];

// double every number
const doubled = numbers.map((n) => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
console.log(numbers); // unchanged: [1, 2, 3, 4, 5]

// the callback also receives the index
const withIndex = numbers.map((n, i) => `${i}: ${n}`);
console.log(withIndex);

// map over an array of objects to pull out one field
const users = [
  { name: "Ada", age: 36 },
  { name: "Alan", age: 41 },
  { name: "Grace", age: 45 },
];

const names = users.map((user) => user.name);
console.log(names); // ["Ada", "Alan", "Grace"]

// build a new shape of object from each item
const labels = users.map((user) => ({ label: `${user.name} (${user.age})` }));
console.log(labels);

// turn an array of strings into their lengths
const words = ["hi", "hello", "hey"];
console.log(words.map((w) => w.length)); // [2, 5, 3]
