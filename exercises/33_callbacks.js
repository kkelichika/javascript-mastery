// Callbacks.
//
// A callback is just a function you pass to another function, to be
// "called back" later. I have already used them with map/filter/forEach
// without really naming them. This exercise looks at the idea directly.
//
// In JavaScript, functions are "first-class": you can store them in
// variables, pass them as arguments, and return them from functions.

// a function that takes another function as an argument
function repeat(times, action) {
  for (let i = 0; i < times; i++) {
    action(i); // call the callback, passing the current number
  }
}

repeat(3, (i) => console.log("step", i));

// the callback decides what happens, so the same function can do
// different things depending on what you pass in.
function processArray(arr, callback) {
  const result = [];
  for (const item of arr) {
    result.push(callback(item));
  }
  return result;
}

console.log(processArray([1, 2, 3], (n) => n * 10)); // [10, 20, 30]
console.log(processArray(["a", "b"], (s) => s.toUpperCase())); // ["A", "B"]

// callbacks are also how older async code works, like setTimeout:
// "after 100ms, call this function".
setTimeout(() => {
  console.log("This runs later, after the rest of the file.");
}, 100);

console.log("This runs first, even though it is written above.");
// Lesson: setTimeout's callback runs LATER, so the order is not
// top-to-bottom. This is my first taste of asynchronous code.
