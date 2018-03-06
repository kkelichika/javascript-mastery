// Array.reduce()
//
// reduce() boils a whole array down to a SINGLE value. It was the hardest
// of the three (map/filter/reduce) for me to understand.
//
// It takes a function (accumulator, currentItem) and a starting value.
// The accumulator carries the running result from one step to the next.

const numbers = [1, 2, 3, 4, 5];

// sum all the numbers. start the accumulator at 0.
const sum = numbers.reduce((total, n) => total + n, 0);
console.log("sum:", sum); // 15

// find the biggest number
const max = numbers.reduce((biggest, n) => (n > biggest ? n : biggest));
console.log("max:", max); // 5

// reduce can build other things too, not just numbers.
// here I build an object that counts how many times each word appears.
const words = ["a", "b", "a", "c", "b", "a"];
const counts = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});
console.log(counts); // { a: 3, b: 2, c: 1 }

// flatten an array of arrays into one array
const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log(flat); // [1, 2, 3, 4, 5]

// total price of a shopping cart
const cart = [
  { item: "book", price: 12 },
  { item: "pen", price: 3 },
  { item: "bag", price: 25 },
];
const totalPrice = cart.reduce((total, product) => total + product.price, 0);
console.log("cart total:", totalPrice); // 40
