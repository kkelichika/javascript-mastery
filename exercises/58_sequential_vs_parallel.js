// Sequential vs parallel with async/await.
//
// A common mistake (I made it): awaiting independent tasks one by one,
// which makes them run in sequence and wastes time. If the tasks do not
// depend on each other, start them together with Promise.all.

const delay = (ms, value) =>
  new Promise((resolve) => setTimeout(() => resolve(value), ms));

const taskA = () => delay(100, "A");
const taskB = () => delay(100, "B");
const taskC = () => delay(100, "C");

// SEQUENTIAL: each await waits for the previous one to finish.
// total time ~300ms. Only do this when each step needs the one before.
async function sequential() {
  const start = Date.now();
  const a = await taskA();
  const b = await taskB();
  const c = await taskC();
  console.log("sequential:", [a, b, c], Date.now() - start, "ms");
}

// PARALLEL: start them all, THEN await them together.
// total time ~100ms (they overlap).
async function parallel() {
  const start = Date.now();
  // kick them off without awaiting yet - they run at the same time
  const promiseA = taskA();
  const promiseB = taskB();
  const promiseC = taskC();
  const [a, b, c] = await Promise.all([promiseA, promiseB, promiseC]);
  console.log("parallel:", [a, b, c], Date.now() - start, "ms");
}

async function main() {
  await sequential(); // ~300ms
  await parallel(); // ~100ms
}
main();

// rule of thumb:
//   - step depends on the previous result -> await one after another
//   - steps are independent -> start them, then Promise.all
