// Tests for UserClient, using a mocked fetch so no real network is used.
//
// A little helper builds a fake "Response" object like fetch returns.

const UserClient = require("../userClient");

function fakeResponse(body, ok = true, status = 200) {
  return {
    ok,
    status,
    json: () => Promise.resolve(body), // json() returns a promise, like real fetch
  };
}

describe("UserClient", () => {
  test("getUser shapes the data and lowercases the email", async () => {
    // a mock fetch that resolves with a fake response
    const fetchMock = jest
      .fn()
      .mockResolvedValue(
        fakeResponse({ id: 1, name: "Ada", email: "ADA@Example.com" })
      );

    const client = new UserClient("http://api.test", fetchMock);
    const user = await client.getUser(1);

    expect(user).toEqual({ id: 1, name: "Ada", email: "ada@example.com" });
    // verify it called the right URL
    expect(fetchMock).toHaveBeenCalledWith("http://api.test/users/1");
  });

  test("getUser throws on a failed response", async () => {
    const fetchMock = jest
      .fn()
      .mockResolvedValue(fakeResponse(null, false, 404));
    const client = new UserClient("http://api.test", fetchMock);

    await expect(client.getUser(99)).rejects.toThrow("failed to load user 99");
  });

  test("getActiveUsernames filters, maps and sorts", async () => {
    const users = [
      { name: "Cara", active: true },
      { name: "Bob", active: false },
      { name: "Ada", active: true },
    ];
    const fetchMock = jest.fn().mockResolvedValue(fakeResponse(users));
    const client = new UserClient("http://api.test", fetchMock);

    const names = await client.getActiveUsernames();
    expect(names).toEqual(["Ada", "Cara"]); // Bob excluded, sorted
  });

  test("propagates a network error from fetch", async () => {
    const fetchMock = jest.fn().mockRejectedValue(new Error("network down"));
    const client = new UserClient("http://api.test", fetchMock);

    await expect(client.getUser(1)).rejects.toThrow("network down");
  });
});
