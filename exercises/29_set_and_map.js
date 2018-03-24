// Set and Map - two newer collection types.
//
// Set  - a collection of UNIQUE values (no duplicates).
// Map  - like an object, but the keys can be ANY type, and it remembers
//        the order things were added.

// --- Set ---
const numbers = [1, 2, 2, 3, 3, 3, 4];

// a Set automatically drops duplicates
const unique = new Set(numbers);
console.log(unique); // Set { 1, 2, 3, 4 }
console.log(unique.size); // 4

// the common trick: remove duplicates from an array
const uniqueArray = [...new Set(numbers)];
console.log(uniqueArray); // [1, 2, 3, 4]

// Sets have add, has and delete
const tags = new Set();
tags.add("js");
tags.add("react");
tags.add("js"); // ignored, already there
console.log(tags.has("react")); // true
tags.delete("js");
console.log([...tags]); // ["react"]

// --- Map ---
const userRoles = new Map();
userRoles.set("ada", "admin");
userRoles.set("bob", "editor");

console.log(userRoles.get("ada")); // "admin"
console.log(userRoles.has("bob")); // true
console.log(userRoles.size); // 2

// you can loop over a Map (it keeps insertion order)
for (const [user, role] of userRoles) {
  console.log(`${user} is ${role}`);
}

// a Map key can be an object, which a plain object cannot do well
const keyObject = { id: 1 };
const meta = new Map();
meta.set(keyObject, "some metadata");
console.log(meta.get(keyObject)); // "some metadata"
