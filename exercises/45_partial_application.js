// Partial application.
//
// Partial application means fixing SOME of a function's arguments now, and
// getting back a new function that takes the rest later. It is close to
// currying, but you do not have to supply one argument at a time.

function multiply(a, b, c) {
  return a * b * c;
}

// a partial() helper: lock in some arguments up front.
function partial(fn, ...fixed) {
  return function (...rest) {
    return fn(...fixed, ...rest);
  };
}

const double = partial(multiply, 2); // a is fixed at 2
console.log(double(3, 4)); // 2 * 3 * 4 = 24

const doubleAndTriple = partial(multiply, 2, 3); // a=2, b=3 fixed
console.log(doubleAndTriple(5)); // 2 * 3 * 5 = 30

// the built-in bind() also does partial application (after the "this" arg).
function greet(greeting, name) {
  return `${greeting}, ${name}!`;
}
const sayHello = greet.bind(null, "Hello"); // greeting fixed
console.log(sayHello("Ada")); // "Hello, Ada!"

// a practical example: building specialized helpers from a general one.
function request(method, url, body) {
  return `${method} ${url} ${body ? JSON.stringify(body) : ""}`.trim();
}
const get = partial(request, "GET");
const post = partial(request, "POST");
console.log(get("/users"));
console.log(post("/users", { name: "Ada" }));

// difference from currying, in one line:
//   currying:  always one argument at a time -> add(1)(2)(3)
//   partial:   fix any number now, supply the rest later -> partial(add, 1)(2, 3)
