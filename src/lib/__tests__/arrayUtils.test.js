// Practicing different Jest matchers (not just toBe).

const { chunk, unique, sum, range } = require("../arrayUtils");

describe("Jest matchers", () => {
  test("toBe - strict equality for primitives", () => {
    expect(sum([1, 2, 3])).toBe(6);
  });

  test("toEqual - deep equality for objects/arrays", () => {
    // toBe would FAIL here because two arrays are different objects;
    // toEqual compares their contents.
    expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
    expect(unique([1, 1, 2, 3, 3])).toEqual([1, 2, 3]);
  });

  test("toContain - an item is in an array", () => {
    expect(range(0, 5)).toContain(3);
    expect(range(0, 5)).not.toContain(9); // .not negates a matcher
  });

  test("toHaveLength - array/string length", () => {
    expect(range(0, 5)).toHaveLength(5);
  });

  test("comparison matchers", () => {
    expect(sum([1, 2, 3])).toBeGreaterThan(5);
    expect(sum([1, 2, 3])).toBeLessThanOrEqual(6);
  });

  test("toBeCloseTo - for floating point maths", () => {
    // 0.1 + 0.2 is not exactly 0.3, so toBe would fail. toBeCloseTo fixes it.
    expect(0.1 + 0.2).toBeCloseTo(0.3);
  });

  test("truthiness matchers", () => {
    expect(unique([])).toEqual([]);
    expect(range(0, 0)).toHaveLength(0);
    expect("hello").toBeTruthy();
    expect("").toBeFalsy();
    expect(undefined).toBeUndefined();
  });

  test("toThrow - a function throws", () => {
    const boom = () => {
      throw new Error("kaboom");
    };
    expect(boom).toThrow();
    expect(boom).toThrow("kaboom");
  });
});
