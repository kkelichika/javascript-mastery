// My first Jest tests!
//
// Jest finds files ending in .test.js and runs them. The structure:
//   describe(...) groups related tests
//   test(...) (or it(...)) is one test case
//   expect(value).toBe(...) is an assertion
//
// Run with: npm test

const { capitalize, reverse, isPalindrome, truncate } = require("../stringUtils");

describe("capitalize", () => {
  test("uppercases the first letter", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test("handles an empty string", () => {
    expect(capitalize("")).toBe("");
  });
});

describe("reverse", () => {
  test("reverses a string", () => {
    expect(reverse("abc")).toBe("cba");
  });
});

describe("isPalindrome", () => {
  test("detects a simple palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  test("ignores case, spaces and punctuation", () => {
    expect(isPalindrome("Never odd or even")).toBe(true);
  });

  test("returns false for a non-palindrome", () => {
    expect(isPalindrome("hello")).toBe(false);
  });
});

describe("truncate", () => {
  test("leaves short strings alone", () => {
    expect(truncate("hi", 5)).toBe("hi");
  });

  test("adds ... when too long", () => {
    expect(truncate("hello world", 5)).toBe("hello...");
  });
});
