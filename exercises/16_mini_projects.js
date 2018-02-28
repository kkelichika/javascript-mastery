// Mini projects to put the first month's basics together.
//
// Nothing new here - just combining variables, functions, loops and
// conditionals into two small classic exercises. It felt good to write
// these without looking things up.

// --- FizzBuzz ---
// Print 1..n, but "Fizz" for multiples of 3, "Buzz" for 5, "FizzBuzz" for both.
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// --- Temperature converter ---
const celsiusToFahrenheit = (c) => (c * 9) / 5 + 32;
const fahrenheitToCelsius = (f) => ((f - 32) * 5) / 9;

console.log("FizzBuzz up to 15:");
fizzBuzz(15);

console.log("\nTemperature conversions:");
console.log("100C =", celsiusToFahrenheit(100), "F");
console.log("32F =", fahrenheitToCelsius(32), "C");
