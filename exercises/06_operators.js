// Operators and comparison.
//
// The biggest lesson here: use === (strict equals), NOT == (loose equals).
// == tries to convert the types before comparing, which leads to confusing
// results. === checks the value AND the type, which is what you usually
// want.

// loose equals (==) does type conversion - surprising results:
console.log(1 == "1"); // true  (string "1" is converted to number 1)
console.log(0 == false); // true
console.log(null == undefined); // true
console.log("" == 0); // true

// strict equals (===) - no surprises:
console.log(1 === "1"); // false (different types)
console.log(0 === false); // false
console.log(1 === 1); // true

// comparison operators
console.log(5 > 3, 5 < 3, 5 >= 5, 5 <= 4);

// logical operators: && (and), || (or), ! (not)
const age = 20;
const hasTicket = true;
console.log(age >= 18 && hasTicket); // true - both must be true

// || can give a default value (if the left side is "falsy")
const userInput = "";
const username = userInput || "guest";
console.log(username); // "guest"

// falsy values in JS: false, 0, "", null, undefined, NaN
// everything else is "truthy"
console.log(Boolean(0), Boolean(""), Boolean("hi"), Boolean([]));
