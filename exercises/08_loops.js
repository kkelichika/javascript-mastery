// Loops in JavaScript.
//
// There are a few kinds:
//   for        - when you know how many times (uses a counter)
//   while      - repeat while a condition is true
//   for...of   - go through the values of an array (nice and clean)
//   for...in   - go through the keys of an object

// classic for loop
for (let i = 1; i <= 5; i++) {
  console.log("count", i);
}

// while loop
let countdown = 3;
while (countdown > 0) {
  console.log(countdown + "...");
  countdown--;
}
console.log("Go!");

// for...of over an array
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log("I like", fruit);
}

// for...in over an object's keys
const scores = { math: 90, science: 85 };
for (const subject in scores) {
  console.log(subject, "=>", scores[subject]);
}

// break stops the loop early, continue skips to the next turn
for (let i = 1; i <= 10; i++) {
  if (i === 4) continue; // skip 4
  if (i === 7) break; // stop at 7
  console.log("number", i);
}
