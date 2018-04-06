// Closures.
//
// This was the "aha" topic for me. A closure is when an inner function
// remembers the variables from the function it was created in, even after
// that outer function has finished running.
//
// In other words, the inner function "closes over" those variables and
// keeps them alive.

function makeCounter() {
  let count = 0; // this lives inside makeCounter

  // the returned function still has access to "count" afterwards
  return function () {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
// "count" is not a global variable - it only exists inside this counter.

// each call to makeCounter creates a SEPARATE closure with its own count
const counterA = makeCounter();
const counterB = makeCounter();
console.log(counterA()); // 1
console.log(counterA()); // 2
console.log(counterB()); // 1  (independent from counterA)

// closures are how the "factory" functions earlier worked: the returned
// function remembered the value it was built with.
function adder(x) {
  return (y) => x + y; // remembers x
}
const add5 = adder(5);
console.log(add5(10)); // 15

// a classic gotcha: using var in a loop. all callbacks share the SAME
// variable, so they all print 3. Using let gives each its own copy.
console.log("with let:");
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 10); // 0, 1, 2  (correct!)
}
