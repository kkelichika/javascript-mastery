// Default parameters and rest parameters.
//
// Two newer features that make functions more flexible:
//   default parameters - give a parameter a fallback value
//   rest parameters    - gather "the rest" of the arguments into an array

// default parameter: greeting is "Hello" unless you pass something else
function greet(name, greeting = "Hello") {
  return `${greeting}, ${name}!`;
}

console.log(greet("Anna")); // Hello, Anna!
console.log(greet("Anna", "Hi")); // Hi, Anna!

// rest parameter: ...numbers collects all the arguments into an array
function sum(...numbers) {
  let total = 0;
  for (const n of numbers) {
    total += n;
  }
  return total;
}

console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3, 4, 5)); // 15

// you can mix normal parameters with a rest parameter (rest must be last)
function describe(first, ...others) {
  console.log("first:", first);
  console.log("others:", others);
}
describe("a", "b", "c", "d");
