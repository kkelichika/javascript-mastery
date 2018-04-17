// Recursion: a function that calls itself.
//
// Every recursive function needs two parts:
//   1. a BASE CASE - when to stop (or it loops forever and crashes)
//   2. a RECURSIVE CASE - call itself on a smaller version of the problem

// countdown from n to 1
function countdown(n) {
  if (n <= 0) {
    // base case
    console.log("Done!");
    return;
  }
  console.log(n);
  countdown(n - 1); // recursive case, getting closer to the base case
}
countdown(3);

// factorial: n! = n * (n-1)!
function factorial(n) {
  if (n <= 1) return 1; // base case
  return n * factorial(n - 1); // recursive case
}
console.log("5! =", factorial(5)); // 120

// sum of an array, recursively
function sum(numbers) {
  if (numbers.length === 0) return 0; // base case
  const [first, ...rest] = numbers;
  return first + sum(rest); // add the first, recurse on the rest
}
console.log(sum([1, 2, 3, 4])); // 10

// power: base ^ exponent
function power(base, exponent) {
  if (exponent === 0) return 1; // anything to the 0 is 1
  return base * power(base, exponent - 1);
}
console.log(power(2, 5)); // 32

// note: recursion is elegant but each call uses memory (the "call stack").
// Very deep recursion can overflow the stack, so for huge inputs a loop is
// sometimes safer. Good to know the trade-off.
