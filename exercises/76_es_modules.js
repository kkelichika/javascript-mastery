// ES Modules: export and import.
//
// Modules let you split code across files and share pieces with import/
// export, instead of dumping everything into one global scope. This is
// the modern replacement for the old IIFE module pattern.
//
// NOTE: to run ES modules in Node (2018) you either use the .mjs
// extension or a build tool like Babel. In the browser you use
// <script type="module">. The syntax is what matters here.

// import specific NAMED exports by their names, inside { }
import { add, subtract, PI } from "./lib/mathUtils.js";

console.log(add(2, 3)); // 5
console.log(subtract(10, 4)); // 6
console.log("PI is", PI);

// import everything as one namespace object
import * as math from "./lib/mathUtils.js";
console.log(math.multiply(3, 4)); // 12
console.log(math.divide(20, 5)); // 4

// you can rename imports with "as" to avoid clashes
import { add as sum } from "./lib/mathUtils.js";
console.log(sum(1, 1)); // 2

// why modules are good:
//   - each file has its own scope (no accidental globals)
//   - dependencies are explicit at the top of the file
//   - tools can see exactly what is used (helps with bundling)
//
// imports are also "hoisted" and read-only - you cannot reassign an
// imported value, which keeps things predictable.

console.log("This file imports helpers from lib/mathUtils.js");
