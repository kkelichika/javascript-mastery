// Chaining array methods together.
//
// Because map(), filter() and sort() each RETURN a new array, you can
// call the next method right on the result. Reading them in order tells a
// little story about what happens to the data. reduce() usually comes
// last because it returns a single value, not an array.

const orders = [
  { id: 1, item: "book", price: 12, shipped: true },
  { id: 2, item: "pen", price: 3, shipped: false },
  { id: 3, item: "laptop", price: 900, shipped: true },
  { id: 4, item: "mug", price: 8, shipped: true },
  { id: 5, item: "monitor", price: 200, shipped: false },
];

// Question: of the shipped orders, what is the total price, cheapest first?
const total = orders
  .filter((o) => o.shipped) // keep shipped orders
  .map((o) => o.price) // pull out the prices
  .reduce((sum, price) => sum + price, 0); // add them up

console.log("total shipped value:", total); // 920

// Another chain: names of items over $10, sorted by price descending.
const expensiveItems = orders
  .filter((o) => o.price > 10)
  .sort((a, b) => b.price - a.price)
  .map((o) => o.item);

console.log(expensiveItems); // ["laptop", "monitor", "book"]

// Average price of all orders.
const average =
  orders.reduce((sum, o) => sum + o.price, 0) / orders.length;
console.log("average price:", average.toFixed(2));
