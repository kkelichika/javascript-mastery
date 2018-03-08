// find, findIndex, some and every.
//
// These are more array helper methods that answer common questions:
//   find()      - the FIRST item that matches (or undefined)
//   findIndex() - the index of the first match (or -1)
//   some()      - is there AT LEAST ONE match? (true/false)
//   every()     - do ALL items match? (true/false)

const users = [
  { name: "Ada", age: 36, admin: false },
  { name: "Alan", age: 41, admin: true },
  { name: "Grace", age: 45, admin: false },
];

// find the first admin
const admin = users.find((u) => u.admin);
console.log("admin:", admin.name); // "Alan"

// find returns undefined if nothing matches
const teenager = users.find((u) => u.age < 20);
console.log("teenager:", teenager); // undefined

// findIndex gives the position instead of the item
console.log(users.findIndex((u) => u.name === "Grace")); // 2

// some: is anyone an admin?
console.log(users.some((u) => u.admin)); // true

// every: is everyone over 30?
console.log(users.every((u) => u.age > 30)); // true
console.log(users.every((u) => u.admin)); // false

// these work on simple arrays too
const numbers = [2, 4, 6, 8];
console.log(numbers.every((n) => n % 2 === 0)); // true (all even)
console.log(numbers.some((n) => n > 7)); // true (8 is)
