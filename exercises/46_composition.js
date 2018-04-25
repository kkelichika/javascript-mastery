// Function composition.
//
// Composition means combining small functions into a bigger one, where
// the output of one becomes the input of the next. It is a tidy way to
// build a pipeline of steps instead of nesting calls like h(g(f(x))).

// some tiny single-purpose functions
const trim = (s) => s.trim();
const toLowerCase = (s) => s.toLowerCase();
const removeSpaces = (s) => s.replace(/\s+/g, "-");

// without composition: nested calls, read inside-out (annoying)
const slugManual = removeSpaces(toLowerCase(trim("  Hello World  ")));
console.log(slugManual); // "hello-world"

// compose: runs functions RIGHT to LEFT (like the maths f(g(x))).
function compose(...fns) {
  return (input) => fns.reduceRight((value, fn) => fn(value), input);
}

// pipe: runs functions LEFT to RIGHT, which reads in the order of steps.
function pipe(...fns) {
  return (input) => fns.reduce((value, fn) => fn(value), input);
}

// pipe reads like a recipe: trim, then lowercase, then dash the spaces.
const slugify = pipe(trim, toLowerCase, removeSpaces);
console.log(slugify("  Hello World  ")); // "hello-world"

// the same with compose (reverse order)
const slugify2 = compose(removeSpaces, toLowerCase, trim);
console.log(slugify2("  Hello World  ")); // "hello-world"

// a numeric pipeline
const add1 = (n) => n + 1;
const double = (n) => n * 2;
const square = (n) => n * n;

const transform = pipe(add1, double, square);
console.log(transform(3)); // ((3+1)*2)^2 = 64

// composition keeps each function small and testable, and lets me snap
// them together in different orders. This is a core functional idea.
