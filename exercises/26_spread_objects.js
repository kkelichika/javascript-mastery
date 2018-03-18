// Spread and rest with objects.
//
// Spreading objects lets you copy them and make updated versions WITHOUT
// changing the original. This "don't mutate, make a new copy" idea is
// really important in React, so I want it to feel natural.

const user = {
  name: "Ada",
  age: 36,
  city: "London",
};

// copy an object
const copy = { ...user };
console.log(copy);

// make an updated copy: spread the old one, then override a field.
// the original is NOT changed.
const older = { ...user, age: 37 };
console.log(older); // { name: "Ada", age: 37, city: "London" }
console.log(user.age); // still 36

// add new fields while copying
const withEmail = { ...user, email: "ada@example.com" };
console.log(withEmail);

// merge two objects. if a key appears twice, the LAST one wins.
const defaults = { theme: "light", fontSize: 14 };
const settings = { fontSize: 16 };
const merged = { ...defaults, ...settings };
console.log(merged); // { theme: "light", fontSize: 16 }

// a helper that returns an updated copy (a common pattern)
function updateUser(person, changes) {
  return { ...person, ...changes };
}
console.log(updateUser(user, { city: "Paris", age: 40 }));

// rest in object destructuring: pull one key out, keep the rest
const { name, ...details } = user;
console.log(name); // "Ada"
console.log(details); // { age: 36, city: "London" }
