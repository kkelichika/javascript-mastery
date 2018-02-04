// Data types in JavaScript.
//
// JavaScript has a few basic ("primitive") types:
//   string, number, boolean, undefined, null, and symbol.
// Objects and arrays are also types, but they are not primitives.
//
// The typeof operator tells you the type of a value. It has a couple of
// famous quirks that I noted below.

const text = "hello";
const count = 42;
const isLearning = true;
let nothingYet; // undefined, because no value was assigned
const empty = null;

console.log(typeof text); // "string"
console.log(typeof count); // "number"
console.log(typeof isLearning); // "boolean"
console.log(typeof nothingYet); // "undefined"

// Quirk 1: typeof null is "object" (this is a long-standing bug in JS!)
console.log(typeof empty); // "object"

// Quirk 2: arrays are also "object". Use Array.isArray to check for arrays.
const list = [1, 2, 3];
console.log(typeof list); // "object"
console.log(Array.isArray(list)); // true
