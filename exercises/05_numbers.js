// Numbers and the Math object.
//
// JavaScript has just one number type (no separate ints and floats).
// The Math object has lots of useful helpers, and there are functions to
// turn strings into numbers.

// basic arithmetic
console.log(7 + 3, 7 - 3, 7 * 3, 7 / 3);
console.log(7 % 3); // remainder (modulo) = 1
console.log(2 ** 10); // exponent = 1024

// careful: dividing can give long decimals, and floats are not exact
console.log(0.1 + 0.2); // 0.30000000000000004  (a classic gotcha!)
console.log((0.1 + 0.2).toFixed(2)); // "0.30" as a string

// turning strings into numbers
console.log(Number("42")); // 42
console.log(parseInt("42px", 10)); // 42 (stops at the non-number part)
console.log(parseFloat("3.14abc")); // 3.14
console.log(Number("hello")); // NaN ("not a number")
console.log(Number.isNaN(Number("hello"))); // true

// the Math object
console.log(Math.round(4.6)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.ceil(4.1)); // 5
console.log(Math.max(3, 8, 2)); // 8
console.log(Math.sqrt(144)); // 12

// a random whole number from 1 to 6 (like a dice roll)
const roll = Math.floor(Math.random() * 6) + 1;
console.log("You rolled a", roll);
