// Mini project: a memoize() utility (and using pipe with it).
//
// This wraps up the month. memoize() remembers the results of a function
// so that calling it again with the same arguments returns the saved
// answer instantly, instead of recalculating. It uses closures (a private
// cache) and higher-order functions (it takes and returns a function).

function memoize(fn) {
  const cache = new Map(); // private cache, kept alive by the closure
  return function (...args) {
    const key = JSON.stringify(args); // turn the args into a cache key
    if (cache.has(key)) {
      return cache.get(key); // already computed - return it
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

// the slow recursive Fibonacci from before. With memoize it becomes fast,
// because each value is only computed once.
let calls = 0;
function slowFib(n) {
  calls++;
  if (n < 2) return n;
  return fastFib(n - 1) + fastFib(n - 2); // call the memoized version
}
const fastFib = memoize(slowFib);

console.log("fib(30):", fastFib(30)); // 832040
console.log("computed", calls, "times (not thousands)");

// a small pipe() to combine the helpers I built this month.
const pipe = (...fns) => (input) => fns.reduce((v, fn) => fn(v), input);

const clean = pipe(
  (s) => s.trim(),
  (s) => s.toLowerCase(),
  (s) => s.replace(/\s+/g, "-")
);
console.log(clean("  Hello Functions  ")); // "hello-functions"

// memoize a pure, expensive function
const expensiveSquare = memoize((n) => {
  console.log("computing square of", n);
  return n * n;
});
console.log(expensiveSquare(4)); // logs "computing..." then 16
console.log(expensiveSquare(4)); // 16 instantly, no "computing..." log

// This month I learned that functions in JS are values you can pass,
// return, remember (closures), and combine. That idea is everywhere in
// React, so I am glad I drilled it.
