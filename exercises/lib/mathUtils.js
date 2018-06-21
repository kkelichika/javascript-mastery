// A module of small math helpers.
//
// "export" makes something available to other files. These are NAMED
// exports - other files import them by their exact names.

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export const PI = 3.14159;

// you can also declare first and export at the bottom in one statement
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
export { multiply, divide };
