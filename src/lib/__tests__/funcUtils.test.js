// Tests for the functional utility library. Using mocks here lets me
// verify HOW MANY TIMES the wrapped function actually ran.

const { once, memoize, pipe, curry } = require("../funcUtils");

describe("once", () => {
  test("runs the function only the first time", () => {
    const fn = jest.fn(() => "result");
    const wrapped = once(fn);

    expect(wrapped()).toBe("result");
    expect(wrapped()).toBe("result");
    expect(wrapped()).toBe("result");
    // even though called 3 times, the inner function ran once
    expect(fn).toHaveBeenCalledTimes(1);
  });
});

describe("memoize", () => {
  test("caches results by arguments", () => {
    const fn = jest.fn((n) => n * 2);
    const fast = memoize(fn);

    expect(fast(5)).toBe(10);
    expect(fast(5)).toBe(10); // from cache
    expect(fast(6)).toBe(12); // new argument, runs again
    expect(fn).toHaveBeenCalledTimes(2); // 5 once, 6 once
  });
});

describe("pipe", () => {
  test("runs functions left to right", () => {
    const add1 = (n) => n + 1;
    const double = (n) => n * 2;
    const transform = pipe(add1, double);
    expect(transform(3)).toBe(8); // (3 + 1) * 2
  });

  test("with no functions returns the input unchanged", () => {
    expect(pipe()(42)).toBe(42);
  });
});

describe("curry", () => {
  test("supports calling one argument at a time", () => {
    const add = (a, b, c) => a + b + c;
    const curried = curry(add);
    expect(curried(1)(2)(3)).toBe(6);
  });

  test("supports flexible grouping of arguments", () => {
    const add = (a, b, c) => a + b + c;
    const curried = curry(add);
    expect(curried(1, 2)(3)).toBe(6);
    expect(curried(1)(2, 3)).toBe(6);
    expect(curried(1, 2, 3)).toBe(6);
  });
});
