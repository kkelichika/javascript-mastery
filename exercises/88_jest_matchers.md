# Jest matchers (notes)

A "matcher" is the part after `expect(...)` that decides what counts as a
pass. Jest has lots of them. The ones I use most:

| Matcher | Checks |
| --- | --- |
| `toBe(x)` | strict equality (===) - good for numbers/strings/booleans |
| `toEqual(x)` | deep equality - use for arrays and objects |
| `toContain(x)` | an array (or string) contains x |
| `toHaveLength(n)` | length is n |
| `toBeGreaterThan(n)` / `toBeLessThan(n)` | number comparisons |
| `toBeCloseTo(n)` | floating point (handles 0.1 + 0.2) |
| `toBeTruthy()` / `toBeFalsy()` | truthiness |
| `toBeNull()` / `toBeUndefined()` | exact null/undefined |
| `toThrow()` | a function throws an error |

## The big gotcha: toBe vs toEqual

`toBe` uses ===, so two different arrays are never `toBe` each other, even
with the same contents. For objects and arrays, use `toEqual`, which
compares the contents deeply.

```js
expect([1, 2]).toBe([1, 2]);    // FAILS (different objects)
expect([1, 2]).toEqual([1, 2]); // passes
```

## .not

You can negate any matcher with `.not`:

```js
expect(range(0, 5)).not.toContain(9);
```

See `src/lib/__tests__/arrayUtils.test.js` for examples of all of these.

Next: testing asynchronous code (promises and async/await) with Jest.
