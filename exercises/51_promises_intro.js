// Promises - a better way to handle async results.
//
// A Promise represents a value that will be ready LATER. It is in one of
// three states: pending, fulfilled (resolved with a value), or rejected
// (failed with an error).
//
// You create one with new Promise((resolve, reject) => { ... }) and call
// resolve(value) on success or reject(error) on failure. You read the
// result with .then() and .catch().

// a function that returns a promise instead of taking a callback
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, name: "Ada" }); // success
      } else {
        reject(new Error("Invalid id")); // failure
      }
    }, 100);
  });
}

// reading the result: .then runs on success, .catch on failure
getUser(1)
  .then((user) => {
    console.log("got user:", user.name);
  })
  .catch((error) => {
    console.log("error:", error.message);
  });

// the rejected case
getUser(-1)
  .then((user) => console.log("got user:", user.name))
  .catch((error) => console.log("error:", error.message)); // "Invalid id"

// shortcuts for already-known values:
Promise.resolve(42).then((v) => console.log("resolved with", v));
Promise.reject(new Error("nope")).catch((e) => console.log("caught", e.message));

// a promise-based delay helper I will reuse a lot
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
delay(50).then(() => console.log("half a tick later"));
