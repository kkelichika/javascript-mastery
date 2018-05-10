// Promise.all - run many promises at the SAME time and wait for all.
//
// When several async tasks do NOT depend on each other, you should not do
// them one after another. Promise.all starts them together and gives you
// an array of all the results once every one has finished.

const delay = (ms, value) =>
  new Promise((resolve) => setTimeout(() => resolve(value), ms));

// three independent "requests" that take different times
const getUser = () => delay(100, { name: "Ada" });
const getSettings = () => delay(150, { theme: "dark" });
const getNotifications = () => delay(80, [1, 2, 3]);

// Promise.all waits for the slowest one (~150ms), not the sum (~330ms).
Promise.all([getUser(), getSettings(), getNotifications()])
  .then(([user, settings, notifications]) => {
    // results come back in the SAME order as the promises were listed
    console.log("user:", user.name);
    console.log("theme:", settings.theme);
    console.log("notifications:", notifications.length);
  })
  .catch((err) => console.log("one of them failed:", err.message));

// important: if ANY promise rejects, Promise.all rejects immediately.
const ok = delay(50, "ok");
const bad = new Promise((_, reject) =>
  setTimeout(() => reject(new Error("boom")), 30)
);
Promise.all([ok, bad])
  .then((results) => console.log(results))
  .catch((err) => console.log("Promise.all failed fast:", err.message));

// a common real pattern: fetch many things by id at once with map().
const ids = [1, 2, 3];
const fetchItem = (id) => delay(60, `item-${id}`);
Promise.all(ids.map(fetchItem)).then((items) => {
  console.log("all items:", items); // ["item-1", "item-2", "item-3"]
});
