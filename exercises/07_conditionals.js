// Conditionals: if / else if / else, switch, and the ternary operator.

const hour = 14;

// if / else if / else
if (hour < 12) {
  console.log("Good morning!");
} else if (hour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

// the ternary operator: condition ? valueIfTrue : valueIfFalse
const age = 20;
const canVote = age >= 18 ? "yes" : "no";
console.log("Can vote:", canVote);

// switch is handy when checking one value against many options
const day = "Sat";
switch (day) {
  case "Sat":
  case "Sun":
    console.log("It's the weekend!");
    break; // don't forget break, or it "falls through" to the next case
  case "Fri":
    console.log("Almost the weekend.");
    break;
  default:
    console.log("A regular weekday.");
}

// a small grading example using if/else if
function grade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  return "F";
}

console.log(grade(95), grade(82), grade(50));
