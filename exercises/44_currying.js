// Currying.
//
// Currying means turning a function that takes several arguments into a
// chain of functions that each take ONE argument. So add(a, b, c) becomes
// add(a)(b)(c). It builds on closures and returning functions.

// a normal three-argument function
function addNormal(a, b, c) {
  return a + b + c;
}

// the curried version: each function remembers its argument and returns
// the next function, until all arguments are collected.
function addCurried(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(addCurried(1)(2)(3)); // 6

// the same with arrow functions, which reads much shorter
const add = (a) => (b) => (c) => a + b + c;
console.log(add(1)(2)(3)); // 6

// why bother? you can lock in early arguments and reuse the result.
const add10 = add(10); // a remembers 10
const add10and5 = add10(5); // b remembers 5
console.log(add10and5(1)); // 16

// a practical example: a curried logger
const logger = (level) => (message) => `[${level}] ${message}`;
const info = logger("INFO");
const error = logger("ERROR");
console.log(info("server started"));
console.log(error("connection failed"));

// a generic curry() helper that curries any function (using its length).
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args); // we have enough arguments, call it
    }
    // otherwise remember these args and wait for more
    return (...more) => curried(...args, ...more);
  };
}

const curriedAdd = curry(addNormal);
console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6  (flexible grouping)
console.log(curriedAdd(1, 2, 3)); // 6
