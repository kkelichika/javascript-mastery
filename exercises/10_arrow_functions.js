// Arrow functions.
//
// Arrow functions are a shorter way to write functions, introduced in
// ES2015. They are used a LOT in modern JavaScript, especially as small
// throwaway functions passed to array methods.

// a normal function expression
const addLong = function (a, b) {
  return a + b;
};

// the same thing as an arrow function
const add = (a, b) => {
  return a + b;
};

// if the body is just a return, you can drop the braces and the word
// "return". This is called an implicit return.
const addShort = (a, b) => a + b;

console.log(add(2, 3), addShort(2, 3));

// with exactly one parameter, the parentheses are optional
const double = (n) => n * 2;
console.log(double(10)); // 20

// with no parameters you need empty parentheses
const sayHi = () => "hi there";
console.log(sayHi());

// arrows shine when passed to array methods (more on these soon)
const numbers = [1, 2, 3, 4];
const squares = numbers.map((n) => n * n);
console.log(squares); // [ 1, 4, 9, 16 ]

// note: arrow functions handle "this" differently from normal functions.
// I will come back to that when I learn about objects and "this".
