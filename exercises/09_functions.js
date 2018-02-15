// Functions in JavaScript.
//
// There are two common ways to write a function: a function declaration
// and a function expression. A nice difference I learned: declarations
// are "hoisted" (you can call them before they appear in the file), but
// function expressions are not.

// function declaration
function add(a, b) {
  return a + b;
}

// function expression (stored in a variable)
const multiply = function (a, b) {
  return a * b;
};

console.log(add(2, 3)); // 5
console.log(multiply(2, 3)); // 6

// hoisting: this works because greet is a declaration
console.log(greet("Sam"));
function greet(name) {
  return "Hello, " + name;
}

// a function that returns early
function describeNumber(n) {
  if (n === 0) return "zero";
  if (n > 0) return "positive";
  return "negative";
}
console.log(describeNumber(-5));

// functions can call other functions
function squareSum(a, b) {
  return add(a * a, b * b);
}
console.log(squareSum(3, 4)); // 25
