// IIFE: Immediately Invoked Function Expression.
//
// An IIFE is a function that runs the moment it is defined. You write a
// function and then call it right away with () at the end. The whole
// thing is wrapped in parentheses.
//
// Before ES2015 modules, this was the main way to keep variables out of
// the global scope and avoid name clashes between scripts.

// the shape: (function () { ... })();
(function () {
  const secret = "hidden";
  console.log("IIFE ran immediately. secret =", secret);
})();
// "secret" does not leak outside - it only existed inside the IIFE.

// arrow function version
(() => {
  console.log("Arrow IIFE also runs right away.");
})();

// an IIFE can return a value
const result = (function () {
  return 2 + 3;
})();
console.log("result:", result); // 5

// the classic use: a module with private state (the revealing module
// pattern). The IIFE runs once and returns an object of public methods.
const counter = (function () {
  let count = 0; // private
  return {
    increment() {
      return ++count;
    },
    get() {
      return count;
    },
  };
})();
counter.increment();
counter.increment();
console.log("counter:", counter.get()); // 2

// Note for my future self: in modern code, ES modules (import/export)
// mostly replace the need for IIFEs, but you still see them in older
// codebases and bundled files, so it is good to recognise them.
