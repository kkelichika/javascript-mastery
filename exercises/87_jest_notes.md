# Jest (notes)

**Jest** is a testing framework by Facebook. It runs my test files and
tells me if my code does what I expect. Automated tests mean I can change
code later and instantly know if I broke something.

## Setup

```
npm install -D jest
```

In package.json:

```json
"scripts": { "test": "jest" }
```

Then just run `npm test`.

## The structure of a test

```js
describe("capitalize", () => {        // a group of related tests
  test("uppercases the first letter", () => {  // one test case
    expect(capitalize("hello")).toBe("Hello"); // an assertion
  });
});
```

- `describe(name, fn)` groups tests (optional but tidy).
- `test(name, fn)` (or `it`) is a single test.
- `expect(value).matcher(...)` checks something. `toBe` is the most basic
  matcher (strict equality).

Jest automatically finds files named `*.test.js` or inside `__tests__/`
folders, so I do not have to list them.

My first real test file is `src/lib/__tests__/stringUtils.test.js`, testing
the helpers in `src/lib/stringUtils.js`.

Next: more of Jest's matchers.
