// Functions that return functions.
//
// This is the idea right before closures, and it leads straight into
// them. A function can build and hand back another function, often
// "remembering" the values it was set up with.

// a "factory" that makes greeting functions
function greeterFor(greeting) {
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}

const sayHello = greeterFor("Hello");
const sayHi = greeterFor("Hi");

console.log(sayHello("Ada")); // "Hello, Ada!"
console.log(sayHi("Bob")); // "Hi, Bob!"
// notice each returned function "kept" its own greeting.

// build specialized validators
function minLength(min) {
  return (text) => text.length >= min;
}
const atLeast3 = minLength(3);
const atLeast8 = minLength(8);
console.log(atLeast3("hey")); // true
console.log(atLeast8("hey")); // false

// a power-of function maker
function power(exponent) {
  return (base) => base ** exponent;
}
const square = power(2);
const cube = power(3);
console.log(square(5)); // 25
console.log(cube(2)); // 8

// returned functions can be used straight away with array methods
const numbers = [1, 2, 3, 4];
console.log(numbers.map(power(2))); // [1, 4, 9, 16]
