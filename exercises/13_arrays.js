// Arrays: ordered lists of values.
//
// This exercise is about creating arrays and the basic methods for
// adding, removing and finding items. The fancier methods (map, filter,
// reduce) come next.

const fruits = ["apple", "banana", "cherry"];

console.log(fruits.length); // 3
console.log(fruits[0]); // "apple" (indexes start at 0)
console.log(fruits[fruits.length - 1]); // "cherry" (last item)

// adding and removing from the END
fruits.push("date"); // add to end
console.log(fruits); // [apple, banana, cherry, date]
const last = fruits.pop(); // remove from end
console.log("removed", last);

// adding and removing from the START
fruits.unshift("apricot"); // add to start
const first = fruits.shift(); // remove from start
console.log("removed", first);

// finding things
console.log(fruits.indexOf("banana")); // 1
console.log(fruits.includes("cherry")); // true

// joining and slicing
console.log(fruits.join(", ")); // "apple, banana, cherry"
console.log(fruits.slice(0, 2)); // a copy of the first two items

// combine two arrays with the spread operator (...)
const more = ["elderberry", "fig"];
const all = [...fruits, ...more];
console.log(all);
