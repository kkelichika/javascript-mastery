// Error handling with promises.
//
// A rejected promise travels down the chain until it hits a .catch().
// Any error thrown inside a .then() also turns into a rejection. This
// makes error handling much tidier than checking err in every callback.

function fetchData(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Network failed"));
      } else {
        resolve({ data: [1, 2, 3] });
      }
    }, 50);
  });
}

// 1. one catch handles a rejection from anywhere in the chain.
fetchData(true)
  .then((res) => console.log("got", res.data))
  .catch((err) => console.log("caught:", err.message)); // "Network failed"

// 2. throwing inside .then() also becomes a rejection.
fetchData(false)
  .then((res) => {
    if (res.data.length > 2) {
      throw new Error("Too much data"); // becomes a rejection
    }
    return res.data;
  })
  .then((data) => console.log("processed", data))
  .catch((err) => console.log("caught thrown error:", err.message));

// 3. you can recover in a catch and continue the chain. Returning a value
//    from catch makes the next .then() run with that value.
fetchData(true)
  .catch((err) => {
    console.log("recovering from:", err.message);
    return { data: [] }; // a fallback value
  })
  .then((res) => console.log("continued with fallback:", res.data)); // []

// 4. position matters: a catch only handles errors from steps ABOVE it.
fetchData(false)
  .then((res) => res.data)
  .catch((err) => console.log("this catch wont run"))
  .then((data) => console.log("still works:", data));

// Lesson: always end an important chain with a .catch(), or an error can
// be silently swallowed (an "unhandled promise rejection").
