// Arrow functions and "this".
//
// The big difference: arrow functions do NOT get their own "this". They
// use the "this" from the surrounding code where they were written. This
// turns out to be exactly what you want for callbacks inside methods.

const timer = {
  seconds: 0,
  // an arrow function as the callback keeps "this" pointing at timer,
  // because it borrows "this" from start(), where it was written.
  start() {
    setTimeout(() => {
      this.seconds += 1;
      console.log("seconds:", this.seconds); // works! "this" is timer
    }, 10);
  },
};
timer.start();

// compare: a regular function callback would lose "this".
const brokenTimer = {
  seconds: 0,
  start() {
    setTimeout(function () {
      // here "this" is NOT brokenTimer, so this.seconds is undefined
      // this.seconds += 1; // would break
      console.log("regular function this is different");
    }, 10);
  },
};
brokenTimer.start();

// a warning the other way: do NOT use an arrow function as an OBJECT
// METHOD if you need "this" to be the object, because it will not be.
const bad = {
  name: "Ada",
  greet: () => `Hi, I'm ${this.name}`, // "this" is NOT bad here
};
console.log(bad.greet()); // "Hi, I'm undefined"

// the right way for a method is still a normal function / shorthand.
const good = {
  name: "Ada",
  greet() {
    return `Hi, I'm ${this.name}`;
  },
};
console.log(good.greet()); // "Hi, I'm Ada"

// rule of thumb I am taking away:
//   - object methods: use normal functions (so "this" is the object)
//   - callbacks inside methods: use arrows (so "this" is kept)
