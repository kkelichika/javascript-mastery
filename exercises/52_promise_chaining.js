// Promise chaining.
//
// The real power of promises: whatever you RETURN from a .then() becomes
// the input to the next .then(). If you return a promise, the chain waits
// for it. This turns the callback-hell pyramid into a flat, readable list.

function getUser(id) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ id, name: "Ada" }), 80)
  );
}
function getPosts(user) {
  return new Promise((resolve) =>
    setTimeout(() => resolve([`${user.name}'s post 1`, `${user.name}'s post 2`]), 80)
  );
}
function getComments(post) {
  return new Promise((resolve) =>
    setTimeout(() => resolve([`comment on "${post}"`]), 80)
  );
}

// the same three dependent steps as the callback-hell example, but now
// flat instead of nested. Each step returns the next promise.
getUser(1)
  .then((user) => {
    console.log("user:", user.name);
    return getPosts(user); // returning a promise -> the chain waits
  })
  .then((posts) => {
    console.log("posts:", posts);
    return getComments(posts[0]);
  })
  .then((comments) => {
    console.log("comments:", comments);
  })
  .catch((error) => {
    // a single catch at the end handles an error from ANY step above
    console.log("something failed:", error.message);
  });

// returning a plain value also works - it is wrapped in a resolved promise
Promise.resolve(2)
  .then((n) => n * 3) // returns 6
  .then((n) => n + 1) // returns 7
  .then((n) => console.log("chained number:", n)); // 7

// .finally runs at the end whether it succeeded or failed (good for
// cleanup like hiding a loading spinner).
getUser(1)
  .then((u) => console.log("done with", u.name))
  .finally(() => console.log("cleanup runs no matter what"));
