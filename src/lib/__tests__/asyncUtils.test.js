// Testing asynchronous code with Jest.
//
// The key rule: the test must WAIT for the async work, or it passes before
// the promise settles. The cleanest way is to make the test function async
// and await inside it.

const { fetchDouble, getUser } = require("../asyncUtils");

describe("async tests with async/await", () => {
  test("resolves with the doubled value", async () => {
    const result = await fetchDouble(5);
    expect(result).toBe(10);
  });

  test("rejects for a negative number", async () => {
    // for rejections, expect(...).rejects lets me assert on the error
    await expect(fetchDouble(-1)).rejects.toThrow("negative not allowed");
  });
});

describe("async tests by returning the promise", () => {
  // if I RETURN the promise, Jest waits for it. .resolves checks the value.
  test("resolves to the user", () => {
    return expect(getUser(1)).resolves.toEqual({ id: 1, name: "Ada" });
  });

  test("rejects for an unknown id", () => {
    return expect(getUser(99)).rejects.toThrow("user not found");
  });
});

describe("the classic mistake", () => {
  test("without await it would pass too early - so always await", async () => {
    // WRONG (do not do this): fetchDouble(5); -- the test ends immediately
    // RIGHT:
    const value = await fetchDouble(3);
    expect(value).toBe(6);
  });
});
