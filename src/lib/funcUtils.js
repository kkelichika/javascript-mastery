// A small utility library bringing together the functional helpers I built
// back in April (closures and higher-order functions), now packaged and
// tested properly.

// run a function only once; later calls return the first result
function once(fn) {
  let called = false;
  let result;
  return (...args) => {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
}

// cache results by their arguments
function memoize(fn) {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const value = fn(...args);
    cache.set(key, value);
    return value;
  };
}

// left-to-right function composition
function pipe(...fns) {
  return (input) => fns.reduce((value, fn) => fn(value), input);
}

// curry a 2-or-more argument function
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) return fn(...args);
    return (...more) => curried(...args, ...more);
  };
}

module.exports = { once, memoize, pipe, curry };
