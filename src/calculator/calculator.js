// A calculator module: basic operations plus a tiny expression evaluator.
// Written test-first in spirit - small pure functions that are easy to check.

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) throw new Error("cannot divide by zero");
  return a / b;
}

// evaluate a simple "a op b" expression like "3 + 4"
function evaluate(expression) {
  const parts = expression.trim().split(/\s+/);
  if (parts.length !== 3) {
    throw new Error("expression must be: number operator number");
  }
  const [left, op, right] = parts;
  const a = Number(left);
  const b = Number(right);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    throw new Error("invalid number");
  }

  switch (op) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      throw new Error(`unknown operator: ${op}`);
  }
}

module.exports = { add, subtract, multiply, divide, evaluate };
