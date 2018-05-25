// A retry helper for flaky async operations.
//
// Network calls sometimes fail for no good reason. A nice pattern is to
// try again a few times before giving up, often waiting a bit longer each
// time ("backoff"). This puts together async/await, loops and delay.

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// retry runs an async function, and if it throws, tries again up to
// `times`, waiting `wait` ms between attempts (doubling each time).
async function retry(fn, times = 3, wait = 100) {
  let lastError;
  for (let attempt = 1; attempt <= times; attempt++) {
    try {
      return await fn(); // success - return straight away
    } catch (error) {
      lastError = error;
      console.log(`attempt ${attempt} failed: ${error.message}`);
      if (attempt < times) {
        await delay(wait);
        wait *= 2; // exponential backoff
      }
    }
  }
  // all attempts failed
  throw lastError;
}

// a fake operation that fails the first two times, then succeeds.
let calls = 0;
function flakyRequest() {
  return new Promise((resolve, reject) => {
    calls++;
    setTimeout(() => {
      if (calls < 3) reject(new Error("temporary glitch"));
      else resolve("finally worked");
    }, 20);
  });
}

async function main() {
  try {
    const result = await retry(flakyRequest, 5, 50);
    console.log("result:", result); // "finally worked" on the 3rd try
  } catch (error) {
    console.log("gave up:", error.message);
  }
}
main();

// a version that always fails, to show the "gave up" path.
async function alwaysFails() {
  try {
    await retry(() => Promise.reject(new Error("nope")), 2, 30);
  } catch (error) {
    console.log("final error after retries:", error.message);
  }
}
alwaysFails();
