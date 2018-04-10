// The "this" keyword.
//
// "this" is famously confusing in JavaScript. The key idea I learned:
// what "this" refers to depends on HOW a function is CALLED, not where it
// is written.

// 1. inside an object method, "this" is the object before the dot.
const person = {
  name: "Ada",
  greet() {
    return `Hi, I'm ${this.name}`;
  },
};
console.log(person.greet()); // "Hi, I'm Ada" - "this" is person

// 2. but if you pull the method out, "this" is lost.
const greet = person.greet;
// console.log(greet()); // "this" is undefined (or global) -> error/NaN
// This trips people up: same function, different call, different "this".

// 3. "this" follows the object you call it ON, not the one it came from.
const other = { name: "Bob", greet: person.greet };
console.log(other.greet()); // "Hi, I'm Bob" - now "this" is other

// 4. a common bug: a callback loses "this".
const timer = {
  seconds: 0,
  // using a regular function as the callback would break "this",
  // because setTimeout calls it plainly. (Next exercise: how to fix it.)
  tickWrong() {
    // setTimeout(function () { this.seconds++; }, 0); // this != timer
    return this.seconds;
  },
};
console.log(timer.tickWrong()); // 0

// 5. in a plain function call (not a method), "this" is undefined in
// strict mode, or the global object otherwise. Best to avoid relying on
// it there.
function standalone() {
  return this; // undefined in modules / strict mode
}
console.log(standalone());

// The next two exercises show how to CONTROL "this" with call/apply/bind,
// and how arrow functions handle it differently.
