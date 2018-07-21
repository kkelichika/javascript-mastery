// Tests for the calculator module.

const { add, subtract, multiply, divide, evaluate } = require("../calculator");

describe("basic operations", () => {
  test("add", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  test("subtract", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("multiply", () => {
    expect(multiply(3, 4)).toBe(12);
    expect(multiply(5, 0)).toBe(0);
  });

  test("divide", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("divide by zero throws", () => {
    expect(() => divide(1, 0)).toThrow("cannot divide by zero");
  });
});

describe("evaluate", () => {
  // test.each runs the same test for many input/output pairs - tidy!
  test.each([
    ["3 + 4", 7],
    ["10 - 6", 4],
    ["2 * 5", 10],
    ["20 / 4", 5],
  ])("evaluates '%s' to %i", (expression, expected) => {
    expect(evaluate(expression)).toBe(expected);
  });

  test("handles extra spaces", () => {
    expect(evaluate("  3   +   4 ")).toBe(7);
  });

  test("throws on a bad format", () => {
    expect(() => evaluate("3 +")).toThrow();
    expect(() => evaluate("3 ? 4")).toThrow("unknown operator");
    expect(() => evaluate("x + 4")).toThrow("invalid number");
  });
});
