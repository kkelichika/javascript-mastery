// Array.filter()
//
// filter() makes a NEW array containing only the items that pass a test.
// The test function returns true (keep it) or false (drop it).

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// keep only the even numbers
const evens = numbers.filter((n) => n % 2 === 0);
console.log(evens); // [2, 4, 6, 8, 10]

// keep numbers bigger than 5
console.log(numbers.filter((n) => n > 5)); // [6, 7, 8, 9, 10]

// filter an array of objects
const products = [
  { name: "Pen", price: 2, inStock: true },
  { name: "Notebook", price: 8, inStock: false },
  { name: "Backpack", price: 45, inStock: true },
  { name: "Eraser", price: 1, inStock: true },
];

// only products that are in stock
const available = products.filter((p) => p.inStock);
console.log(available.map((p) => p.name)); // ["Pen", "Backpack", "Eraser"]

// cheap AND in stock (combine conditions)
const cheapAndAvailable = products.filter((p) => p.inStock && p.price < 5);
console.log(cheapAndAvailable.map((p) => p.name)); // ["Pen", "Eraser"]

// a simple search: keep words that contain the query
const words = ["apple", "grape", "pineapple", "banana"];
const query = "apple";
console.log(words.filter((w) => w.includes(query))); // ["apple", "pineapple"]
