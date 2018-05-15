// Error handling with async/await.
//
// The lovely thing: with async/await you handle errors using a normal
// try/catch block, exactly like synchronous code. A rejected promise
// that you await throws an error you can catch.

const delay = (ms, value) =>
  new Promise((resolve) => setTimeout(() => resolve(value), ms));

function risky(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject(new Error("operation failed"));
      else resolve("success");
    }, 50);
  });
}

// try/catch around await
async function run() {
  try {
    const result = await risky(false);
    console.log("got:", result);

    await risky(true); // this throws
    console.log("this line is skipped");
  } catch (error) {
    console.log("caught:", error.message); // "operation failed"
  } finally {
    console.log("cleanup always runs");
  }
}
run();

// catching errors from the caller side instead (since async returns a
// promise, you can also use .catch outside).
async function load() {
  const data = await risky(true); // will throw
  return data;
}
load().catch((err) => console.log("caught outside:", err.message));

// a small helper pattern I like: return [error, data] so the caller does
// not need try/catch everywhere (inspired by Go).
async function to(promise) {
  try {
    const data = await promise;
    return [null, data];
  } catch (err) {
    return [err, null];
  }
}

async function demo() {
  const [err, data] = await to(risky(false));
  if (err) {
    console.log("handled:", err.message);
  } else {
    console.log("data:", data);
  }
}
demo();
