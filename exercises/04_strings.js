// Strings and template literals.
//
// The exciting new thing (for me) is template literals: strings written
// with backticks `like this`, where you can drop variables straight in
// with ${ ... } and write multi-line text easily.

const first = "Ada";
const last = "Lovelace";

// the old way: joining strings with +
const oldWay = "Hello, " + first + " " + last + "!";
console.log(oldWay);

// the new way: a template literal
const newWay = `Hello, ${first} ${last}!`;
console.log(newWay);

// you can even put expressions inside ${ }
console.log(`2 + 2 = ${2 + 2}`);

// multi-line strings are easy with backticks
const poem = `Roses are red,
Violets are blue,
Template literals
Are nicer to use.`;
console.log(poem);

// some handy string methods
const phrase = "JavaScript is fun";
console.log(phrase.length); // 17
console.log(phrase.toUpperCase()); // JAVASCRIPT IS FUN
console.log(phrase.includes("fun")); // true
console.log(phrase.split(" ")); // [ 'JavaScript', 'is', 'fun' ]
