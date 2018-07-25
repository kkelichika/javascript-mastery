// A small client that fetches and shapes user data.
//
// It takes the fetch function as an argument (dependency injection) so the
// tests can pass a mock instead of hitting a real server. This combines
// async/await, error handling and the array methods from earlier months.

class UserClient {
  constructor(baseUrl, fetchFn) {
    this.baseUrl = baseUrl;
    this.fetchFn = fetchFn; // inject fetch so it can be mocked
  }

  async getUser(id) {
    const response = await this.fetchFn(`${this.baseUrl}/users/${id}`);
    if (!response.ok) {
      throw new Error(`failed to load user ${id} (${response.status})`);
    }
    const user = await response.json();
    // shape the raw data into just what we care about
    return { id: user.id, name: user.name, email: user.email.toLowerCase() };
  }

  async getActiveUsernames() {
    const response = await this.fetchFn(`${this.baseUrl}/users`);
    if (!response.ok) {
      throw new Error("failed to load users");
    }
    const users = await response.json();
    return users
      .filter((u) => u.active)
      .map((u) => u.name)
      .sort();
  }
}

module.exports = UserClient;
