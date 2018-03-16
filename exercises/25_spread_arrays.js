// The spread operator (...) with arrays.
//
// "Spread" takes an array and lays out its items individually. It is great
// for copying arrays and combining them WITHOUT changing the originals,
// which fits the modern style of not mutating data.

const a = [1, 2, 3];
const b = [4, 5, 6];

// combine arrays
const combined = [...a, ...b];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// copy an array (a real copy, not just another name for the same array)
const copy = [...a];
copy.push(99);
console.log(a); // [1, 2, 3] - the original is untouched
console.log(copy); // [1, 2, 3, 99]

// add items immutably (make a new array instead of pushing)
const withExtra = [...a, 4];
console.log(withExtra); // [1, 2, 3, 4]

// insert in the middle
const inserted = [...a.slice(0, 1), 99, ...a.slice(1)];
console.log(inserted); // [1, 99, 2, 3]

// spread also turns a string into an array of characters
console.log([..."hello"]); // ["h", "e", "l", "l", "o"]

// pass an array as separate arguments to a function
const numbers = [5, 2, 8, 1];
console.log(Math.max(...numbers)); // 8

// quick way to get the unique values: spread a Set back into an array
const dupes = [1, 1, 2, 3, 3, 3];
console.log([...new Set(dupes)]); // [1, 2, 3]
