// call, apply and bind: controlling "this" yourself.
//
// These three methods let you decide what "this" should be when a
// function runs. They fix the "lost this" problem from the last exercise.
//   call(thisArg, arg1, arg2)   - run now, args listed one by one
//   apply(thisArg, [args])      - run now, args given as an array
//   bind(thisArg)               - return a NEW function with "this" locked in

function introduce(greeting, punctuation) {
  return `${greeting}, I'm ${this.name}${punctuation}`;
}

const ada = { name: "Ada" };
const bob = { name: "Bob" };

// call: provide "this" and the arguments individually
console.log(introduce.call(ada, "Hello", "!")); // "Hello, I'm Ada!"
console.log(introduce.call(bob, "Hi", ".")); // "Hi, I'm Bob."

// apply: same, but arguments come as an array
console.log(introduce.apply(ada, ["Hey", "?"])); // "Hey, I'm Ada?"

// bind: does NOT run the function. It returns a new one with "this"
// permanently set. Useful to save for later (like a callback).
const introduceAda = introduce.bind(ada);
console.log(introduceAda("Greetings", "!")); // "Greetings, I'm Ada!"

// bind fixes the "lost this" callback problem:
const timer = {
  seconds: 0,
  start() {
    // without bind, "this" inside the callback would not be timer.
    setTimeout(
      function () {
        this.seconds = 5;
        console.log("seconds is now", this.seconds);
      }.bind(this),
      10
    );
  },
};
timer.start();

// you can also pre-fill arguments with bind (partial application).
const double = introduce.bind(ada, "Double"); // greeting is fixed
console.log(double("!!")); // "Double, I'm Ada!!"
