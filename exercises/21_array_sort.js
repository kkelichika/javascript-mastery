// Array.sort()
//
// sort() has a surprising default: it sorts items as STRINGS. So numbers
// come out in the wrong order unless you give it a compare function.
//
// IMPORTANT: sort() changes the original array (it sorts "in place"). If
// I want to keep the original, I copy it first with [...array] or slice().

// the gotcha: default sort treats numbers as strings
const numbers = [10, 1, 21, 2];
console.log([...numbers].sort()); // [1, 10, 2, 21]  <-- wrong order!

// the fix: a compare function. a - b means ascending (small to big).
console.log([...numbers].sort((a, b) => a - b)); // [1, 2, 10, 21]

// b - a means descending (big to small)
console.log([...numbers].sort((a, b) => b - a)); // [21, 10, 2, 1]

// sorting strings alphabetically works with the default
const names = ["Charlie", "Alice", "Bob"];
console.log([...names].sort()); // ["Alice", "Bob", "Charlie"]

// sorting an array of objects by a field
const people = [
  { name: "Ada", age: 36 },
  { name: "Grace", age: 45 },
  { name: "Alan", age: 41 },
];

const byAge = [...people].sort((a, b) => a.age - b.age);
console.log(byAge.map((p) => `${p.name} (${p.age})`));

// sort by name alphabetically using localeCompare (good for strings)
const byName = [...people].sort((a, b) => a.name.localeCompare(b.name));
console.log(byName.map((p) => p.name));
