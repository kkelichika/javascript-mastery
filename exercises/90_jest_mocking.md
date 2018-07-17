# Mocking with Jest (notes)

A **mock** is a fake stand-in for something real, used in tests. I mock
things I do not want to actually do during a test: send emails, hit the
network, read the clock, etc. Tests then run fast and have no side effects.

## jest.fn() - a mock function

```js
const sender = jest.fn();      // a fake function
sender("a@b.com", "Hi");
expect(sender).toHaveBeenCalledWith("a@b.com", "Hi");
expect(sender).toHaveBeenCalledTimes(1);
```

A mock records every call, so I can assert on HOW my code used it.

## Making a mock return things

```js
const getConfig = jest.fn().mockReturnValue({ theme: "dark" });
const fetchData = jest.fn().mockResolvedValue({ ok: true }); // for promises
```

## Dependency injection makes mocking easy

If a function RECEIVES its dependency as an argument (instead of importing
a hard-coded one), I can just pass a `jest.fn()` in the test. That is what
`notifier.js` does - it takes a `sender` function.

## Mocking whole modules

For bigger cases, `jest.mock("./api")` replaces an entire module with mocks
automatically. Useful for faking the network layer.

See `src/lib/__tests__/notifier.test.js`.

Next: I will build a few small projects (with tests) to finish the month.
