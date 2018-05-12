// Promise.race and waiting for everything to settle.
//
// Promise.race settles as soon as the FIRST promise settles (resolves or
// rejects) - whichever finishes first wins. A common use is adding a
// timeout to a slow operation.

const delay = (ms, value) =>
  new Promise((resolve) => setTimeout(() => resolve(value), ms));

// the fastest one wins the race
Promise.race([delay(100, "slow"), delay(30, "fast")]).then((winner) =>
  console.log("race winner:", winner)
); // "fast"

// practical: time out a request if it takes too long.
function timeout(ms) {
  return new Promise((_, reject) =>
    setTimeout(() => reject(new Error("timed out")), ms)
  );
}

function slowRequest() {
  return delay(300, "data"); // pretend this is slow
}

Promise.race([slowRequest(), timeout(150)])
  .then((data) => console.log("got:", data))
  .catch((err) => console.log("request failed:", err.message)); // "timed out"

// Promise.all rejects if ANY fail. Sometimes I want ALL results, even the
// failures. There is no Promise.allSettled built in yet (2018), so I wrote
// my own: wrap each promise so it never rejects, recording status instead.
function allSettled(promises) {
  return Promise.all(
    promises.map((p) =>
      p
        .then((value) => ({ status: "fulfilled", value }))
        .catch((reason) => ({ status: "rejected", reason: reason.message }))
    )
  );
}

const tasks = [
  delay(40, "A"),
  Promise.reject(new Error("B failed")),
  delay(20, "C"),
];

allSettled(tasks).then((results) => {
  console.log("all settled:");
  results.forEach((r) => console.log(r));
  // none of them stops the others; I see every outcome.
});
