// fetch with POST, headers and a body, plus a reusable wrapper.
//
// To SEND data (create/update), pass a second argument to fetch with the
// method, headers and a JSON body. Here I also build a small api helper so
// I do not repeat the boilerplate every time.

const API = "https://jsonplaceholder.typicode.com";

// POST: create a new post
async function createPost(data) {
  const response = await fetch(`${API}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // tell the server we send JSON
    },
    body: JSON.stringify(data), // the body must be a string
  });

  if (!response.ok) {
    throw new Error(`Failed to create post: ${response.status}`);
  }
  return response.json();
}

async function main() {
  try {
    const created = await createPost({
      title: "Learning fetch",
      body: "POST requests are not so scary",
      userId: 1,
    });
    console.log("created with id:", created.id);
  } catch (error) {
    console.log("error:", error.message);
  }
}
main();

// a reusable wrapper that handles JSON and error-checking in one place.
async function api(path, options = {}) {
  const response = await fetch(`${API}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  return response.json();
}

// now requests are short and consistent
async function demo() {
  const user = await api("/users/1");
  console.log("wrapper got:", user.name);

  const updated = await api("/posts/1", {
    method: "PUT",
    body: JSON.stringify({ id: 1, title: "Updated", userId: 1 }),
  });
  console.log("updated title:", updated.title);
}
demo().catch((e) => console.log("demo error:", e.message));
