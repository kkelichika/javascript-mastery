// fetch - making real HTTP requests from JavaScript.
//
// fetch() asks a server for data and returns a promise. It is built into
// browsers. (In Node in 2018 there is no global fetch yet, so for Node I
// would install "node-fetch" - but the code is the same.)
//
// Two-step result: fetch resolves to a Response object, and you call
// .json() (which is ALSO a promise) to read the body as data.

const API = "https://jsonplaceholder.typicode.com";

// with .then()
fetch(`${API}/users/1`)
  .then((response) => {
    if (!response.ok) {
      // fetch does NOT reject on 404/500 - you must check response.ok
      throw new Error(`HTTP error ${response.status}`);
    }
    return response.json(); // parse the JSON body (returns a promise)
  })
  .then((user) => {
    console.log("user name:", user.name);
  })
  .catch((error) => {
    console.log("fetch failed:", error.message);
  });

// the same thing with async/await reads much nicer
async function getUser(id) {
  const response = await fetch(`${API}/users/${id}`);
  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`);
  }
  return response.json();
}

async function main() {
  try {
    const user = await getUser(1);
    console.log("got:", user.name);

    // fetch a list and use the array methods from earlier months
    const res = await fetch(`${API}/posts`);
    const posts = await res.json();
    const titles = posts.slice(0, 3).map((p) => p.title);
    console.log("first 3 post titles:", titles);
  } catch (error) {
    console.log("error:", error.message);
  }
}
main();

// key gotcha to remember: a 404 or 500 still RESOLVES. Always check
// response.ok (or response.status) yourself.
