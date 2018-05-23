// Promisify: turning callback-style functions into promise-returning ones.
//
// Lots of older code (especially Node) uses the "error-first callback"
// style: fn(args, (err, result) => ...). I can wrap those to return a
// promise instead, so I can use them with async/await.

// an old-style function with an error-first callback
function readFileFake(name, callback) {
  setTimeout(() => {
    if (name === "missing.txt") {
      callback(new Error("file not found"), null);
    } else {
      callback(null, `contents of ${name}`);
    }
  }, 50);
}

// promisify: return a new function that returns a promise.
function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      // call the original with our own callback added on the end
      fn(...args, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  };
}

const readFile = promisify(readFileFake);

// now I can await it like any modern API
async function main() {
  try {
    const data = await readFile("notes.txt");
    console.log("read:", data);

    await readFile("missing.txt"); // this rejects
  } catch (error) {
    console.log("caught:", error.message); // "file not found"
  }
}
main();

// promisify also works with things like setTimeout to make a delay()
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function demo() {
  console.log("waiting...");
  await delay(100);
  console.log("done waiting");
}
demo();

// Node actually ships util.promisify that does exactly this. Good to know
// the idea so I understand what it does under the hood.
