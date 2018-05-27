// Running async tasks over a list, in order and with a concurrency limit.
//
// A gotcha I hit: forEach does NOT wait for async callbacks. To process a
// list one item at a time, use a for...of loop with await. And sometimes
// you want "some at a time" (a concurrency limit) instead of all at once.

const delay = (ms, value) =>
  new Promise((resolve) => setTimeout(() => resolve(value), ms));

const process = (item) => delay(60, `done:${item}`);

// WRONG: forEach with async does not wait - "all done" prints too early.
function brokenSequence(items) {
  items.forEach(async (item) => {
    await process(item);
  });
  console.log("(broken) all done - but the awaits did not finish yet!");
}
brokenSequence([1, 2, 3]);

// RIGHT: for...of with await processes them one after another, in order.
async function inSeries(items) {
  const results = [];
  for (const item of items) {
    const result = await process(item); // wait before the next one
    results.push(result);
  }
  return results;
}
inSeries([1, 2, 3]).then((r) => console.log("in series:", r));

// process a list with a CONCURRENCY LIMIT: at most `limit` running at once.
// useful so you do not fire 1000 requests at a server all at the same time.
async function mapLimit(items, limit, fn) {
  const results = [];
  const queue = [...items];

  // each "worker" pulls items off the queue until it is empty
  async function worker() {
    while (queue.length > 0) {
      const index = items.length - queue.length;
      const item = queue.shift();
      results[index] = await fn(item);
    }
  }

  // start `limit` workers and wait for all of them to finish
  const workers = Array.from({ length: limit }, () => worker());
  await Promise.all(workers);
  return results;
}

mapLimit([1, 2, 3, 4, 5], 2, process).then((r) =>
  console.log("mapLimit (2 at a time):", r)
);
