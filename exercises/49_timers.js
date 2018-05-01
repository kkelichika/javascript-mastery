// Timers: setTimeout and setInterval.
//
// These are my first real async tools. They schedule code to run LATER,
// while the rest of the program keeps going. This is the start of the
// async part of the course.

// setTimeout runs a function ONCE after a delay (in milliseconds).
setTimeout(() => {
  console.log("This runs after about 500ms");
}, 500);

console.log("This runs first (the timeout is scheduled for later)");

// setInterval runs a function again and again, every X ms.
// clearInterval stops it. Here I count to 3 then stop.
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log("tick", count);
  if (count === 3) {
    clearInterval(intervalId); // stop the repeating timer
    console.log("stopped");
  }
}, 300);

// clearTimeout cancels a timeout before it fires.
const lateId = setTimeout(() => {
  console.log("you will never see this");
}, 1000);
clearTimeout(lateId);

// the event loop: JavaScript runs all the normal code first, THEN the
// scheduled callbacks. So even setTimeout(fn, 0) runs after the current
// code finishes.
setTimeout(() => console.log("timeout 0 - still runs last"), 0);
console.log("end of the synchronous code");
