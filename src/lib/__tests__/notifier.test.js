// Mocking with Jest.
//
// A "mock" is a fake function that records how it was called. It lets me
// test code that talks to the outside world (sending email, network, time)
// WITHOUT doing the real thing - faster, and no side effects.

const { notifyUser } = require("../notifier");

describe("notifyUser with a mock sender", () => {
  test("calls the sender with the right arguments", () => {
    // jest.fn() makes a mock function that remembers its calls
    const sender = jest.fn();
    const user = { email: "ada@example.com" };

    notifyUser(user, "Hello", sender);

    // assertions about HOW the mock was called
    expect(sender).toHaveBeenCalled();
    expect(sender).toHaveBeenCalledTimes(1);
    expect(sender).toHaveBeenCalledWith("ada@example.com", "Hello");
  });

  test("does not call the sender when there is no email", () => {
    const sender = jest.fn();
    const user = {}; // no email

    expect(() => notifyUser(user, "Hi", sender)).toThrow("user has no email");
    expect(sender).not.toHaveBeenCalled();
  });

  test("a mock can return a fake value", () => {
    // make the mock return something specific
    const getConfig = jest.fn().mockReturnValue({ theme: "dark" });
    expect(getConfig().theme).toBe("dark");
    expect(getConfig).toHaveBeenCalled();
  });

  test("a mock can resolve a promise (for async code)", async () => {
    const fetchData = jest.fn().mockResolvedValue({ ok: true });
    const result = await fetchData();
    expect(result).toEqual({ ok: true });
  });
});

// Note: jest.fn() is for replacing a single function. Jest can also mock
// whole modules with jest.mock("module-name"), which is handy for faking
// things like the network. I will keep it simple here with injection.
