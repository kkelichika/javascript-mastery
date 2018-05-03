// Callback hell - the problem that Promises were invented to solve.
//
// When several async steps depend on each other, and each one takes a
// callback, the code drifts further and further to the right into a
// "pyramid of doom". It gets hard to read and the error handling is
// repetitive.

// pretend each of these is a slow operation (a database or network call)
// that calls back when it is done.
function getUser(id, callback) {
  setTimeout(() => callback(null, { id, name: "Ada" }), 100);
}

function getPosts(user, callback) {
  setTimeout(() => callback(null, ["Post 1", "Post 2"]), 100);
}

function getComments(post, callback) {
  setTimeout(() => callback(null, ["Nice!", "Thanks"]), 100);
}

// to do all three in order, the callbacks nest inside each other.
// notice how it marches to the right, and each step checks its own error.
getUser(1, (err, user) => {
  if (err) return console.error(err);
  console.log("got user:", user.name);

  getPosts(user, (err, posts) => {
    if (err) return console.error(err);
    console.log("got posts:", posts);

    getComments(posts[0], (err, comments) => {
      if (err) return console.error(err);
      console.log("got comments:", comments);
      // imagine a 4th and 5th step... the nesting just keeps growing.
    });
  });
});

// This works, but it is awkward. In the next exercises I learn Promises
// and async/await, which let me write these steps as a flat sequence
// instead of a deep pyramid.
