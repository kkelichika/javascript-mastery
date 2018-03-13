// Array destructuring.
//
// Destructuring is a short way to pull values out of an array and put
// them into separate variables, instead of using index numbers one by one.

const rgb = [255, 128, 0];

// the old way
const r = rgb[0];
const g = rgb[1];
const b = rgb[2];
console.log(r, g, b);

// the destructuring way - much nicer
const [red, green, blue] = rgb;
console.log(red, green, blue);

// you can skip items with an empty slot
const [first, , third] = ["a", "b", "c"];
console.log(first, third); // "a" "c"

// the rest pattern grabs "everything else" into a new array
const [winner, ...others] = ["gold", "silver", "bronze", "tin"];
console.log(winner); // "gold"
console.log(others); // ["silver", "bronze", "tin"]

// default values are used if the item is missing
const [x = 0, y = 0, z = 0] = [10, 20];
console.log(x, y, z); // 10 20 0

// a neat trick: swap two variables without a temporary one
let a = 1;
let c = 2;
[a, c] = [c, a];
console.log(a, c); // 2 1

// destructuring works great with things that return arrays
const [name, age] = "Ada,36".split(",");
console.log(name, age); // "Ada" "36"
