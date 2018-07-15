# Testing async code with Jest (notes)

Testing promises needs care: if the test does not WAIT for the async work,
it finishes and passes before the promise settles - a false pass.

## Three ways to do it right

### 1. async/await (my favourite - cleanest)

```js
test("doubles the value", async () => {
  const result = await fetchDouble(5);
  expect(result).toBe(10);
});
```

### 2. return the promise

If you RETURN the promise from the test, Jest waits for it.

```js
test("resolves to the user", () => {
  return expect(getUser(1)).resolves.toEqual({ id: 1, name: "Ada" });
});
```

### 3. .resolves / .rejects helpers

```js
await expect(fetchDouble(-1)).rejects.toThrow("negative not allowed");
await expect(getUser(1)).resolves.toEqual({ id: 1, name: "Ada" });
```

## The rule to remember

Either `await` the promise, or `return` it. If you forget both, the test
passes no matter what the async code does. This is the most common async
testing bug.

See `src/lib/__tests__/asyncUtils.test.js`.

Next: mocking, so tests do not depend on real network or time.
