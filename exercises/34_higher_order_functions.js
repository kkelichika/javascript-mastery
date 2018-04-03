// Higher-order functions.
//
// A higher-order function is one that either takes a function as an
// argument, returns a function, or both. The array methods (map, filter,
// reduce) are higher-order functions. Here I write a few of my own.

// 1. takes a function (this is what map/filter do under the hood).
//    Let me write my own simple version of map to understand it.
function myMap(array, fn) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(fn(array[i], i));
  }
  return result;
}
console.log(myMap([1, 2, 3], (n) => n * 2)); // [2, 4, 6]

// 2. returns a function.
//    multiplier(3) gives back a function that multiplies its input by 3.
function multiplier(factor) {
  return function (n) {
    return n * factor;
  };
}
const triple = multiplier(3);
console.log(triple(10)); // 30

// 3. a function that wraps another function to add behaviour.
//    Here: log the arguments and result every time it runs.
function withLogging(fn) {
  return function (...args) {
    console.log("called with", args);
    const result = fn(...args);
    console.log("returned", result);
    return result;
  };
}
const add = (a, b) => a + b;
const loggedAdd = withLogging(add);
loggedAdd(2, 5);

// higher-order functions let you build small, reusable pieces of logic
// and combine them, which is a big part of the functional style in JS.
