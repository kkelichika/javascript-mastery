// async / await.
//
// This is the nicest part. async/await is built on top of promises but
// lets you WRITE async code that READS like normal, top-to-bottom code.
//
//   - put "async" before a function to allow "await" inside it
//   - "await" pauses until a promise settles, then gives you its value
//   - an async function always returns a promise

const delay = (ms, value) =>
  new Promise((resolve) => setTimeout(() => resolve(value), ms));

function getUser() {
  return delay(80, { id: 1, name: "Ada" });
}
function getPosts(user) {
  return delay(80, [`${user.name}'s post`]);
}

// the promise-chain way (from before)
function loadWithThen() {
  return getUser().then((user) =>
    getPosts(user).then((posts) => ({ user, posts }))
  );
}

// the async/await way - flat and readable, like synchronous code
async function loadWithAwait() {
  const user = await getUser(); // pause until the user arrives
  const posts = await getPosts(user); // then pause for the posts
  return { user, posts };
}

// call it. Remember: an async function returns a promise, so I still use
// .then() (or await) to get the final value.
loadWithAwait().then((result) => {
  console.log("user:", result.user.name);
  console.log("posts:", result.posts);
});

// await also works with any promise, like my delay helper
async function demo() {
  console.log("start");
  await delay(100);
  console.log("...100ms later...");
  const value = await delay(50, 42);
  console.log("got value:", value);
}
demo();

// an async function's return value becomes the resolved value of its promise
async function getNumber() {
  return 7; // wrapped in Promise.resolve(7)
}
getNumber().then((n) => console.log("number:", n)); // 7
