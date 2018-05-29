// Mini project: a small data client that ties the month together.
//
// It uses a fake API (no network needed) and pulls together everything
// from May: promises, async/await, error handling, Promise.all, a retry
// wrapper, and array methods from the earlier months. This is the closest
// I have come to "real" async code.

const delay = (ms, value) =>
  new Promise((resolve) => setTimeout(() => resolve(value), ms));

// --- a fake backend (pretend these are network calls) ---
const DB = {
  users: [
    { id: 1, name: "Ada" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Cara" },
  ],
  postsByUser: {
    1: ["Promises 101", "Async tips"],
    2: ["Hello world"],
    3: [],
  },
};

function fetchUser(id) {
  const user = DB.users.find((u) => u.id === id);
  return user ? delay(50, user) : Promise.reject(new Error(`no user ${id}`));
}

function fetchPosts(userId) {
  return delay(60, DB.postsByUser[userId] || []);
}

// --- helpers from earlier in the month ---
async function retry(fn, times = 3) {
  for (let i = 1; i <= times; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i === times) throw err;
      await delay(30);
    }
  }
}

// --- the client ---
// get a user together with their posts
async function getUserWithPosts(id) {
  const user = await retry(() => fetchUser(id));
  const posts = await fetchPosts(user.id);
  return { ...user, posts, postCount: posts.length };
}

// get several users at once (in parallel) and summarise
async function getReport(ids) {
  // Promise.all runs all the lookups together
  const results = await Promise.all(
    ids.map((id) =>
      getUserWithPosts(id).catch((err) => ({ error: err.message }))
    )
  );

  const ok = results.filter((r) => !r.error);
  const failed = results.filter((r) => r.error);

  return {
    totalPosts: ok.reduce((sum, u) => sum + u.postCount, 0),
    mostActive: ok.sort((a, b) => b.postCount - a.postCount)[0],
    failures: failed.map((f) => f.error),
  };
}

async function main() {
  console.log("--- single user ---");
  const ada = await getUserWithPosts(1);
  console.log(ada.name, "has", ada.postCount, "posts:", ada.posts);

  console.log("--- report for ids 1, 2, 3 and a missing 99 ---");
  const report = await getReport([1, 2, 3, 99]);
  console.log("total posts:", report.totalPosts);
  console.log("most active:", report.mostActive.name);
  console.log("failures:", report.failures);
}

main().catch((err) => console.log("fatal:", err.message));
