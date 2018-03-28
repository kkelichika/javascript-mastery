// Mini project: processing a list of orders.
//
// This puts the whole month together - map, filter, reduce, sort and
// destructuring - to answer real questions about some data. It felt good
// to chain these together without getting lost.

const orders = [
  { id: 1, customer: "Ada", item: "Book", price: 12, qty: 2 },
  { id: 2, customer: "Bob", item: "Pen", price: 3, qty: 10 },
  { id: 3, customer: "Ada", item: "Laptop", price: 900, qty: 1 },
  { id: 4, customer: "Cara", item: "Mug", price: 8, qty: 4 },
  { id: 5, customer: "Bob", item: "Monitor", price: 200, qty: 2 },
];

// 1. add a "total" to each order (price * qty)
const withTotals = orders.map((o) => ({ ...o, total: o.price * o.qty }));

// 2. grand total of all orders
const grandTotal = withTotals.reduce((sum, o) => sum + o.total, 0);
console.log("Grand total:", grandTotal);

// 3. the most expensive single order
const biggest = withTotals.reduce((max, o) => (o.total > max.total ? o : max));
console.log("Biggest order:", biggest.item, "=", biggest.total);

// 4. total spent per customer (an object built with reduce)
const perCustomer = withTotals.reduce((acc, { customer, total }) => {
  acc[customer] = (acc[customer] || 0) + total;
  return acc;
}, {});
console.log("Per customer:", perCustomer);

// 5. customers sorted by how much they spent, most first
const ranking = Object.entries(perCustomer)
  .sort(([, a], [, b]) => b - a)
  .map(([customer, total]) => `${customer}: ${total}`);
console.log("Ranking:", ranking);

// 6. just the items that cost more than 50 in total
const expensive = withTotals
  .filter((o) => o.total > 50)
  .map((o) => o.item);
console.log("Expensive items:", expensive);
