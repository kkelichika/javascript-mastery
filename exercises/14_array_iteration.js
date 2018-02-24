// Going through arrays.
//
// There are several ways to loop over an array. forEach runs a function
// for each item. for...of is a clean loop over the values. The classic
// for loop is still useful when you need the index or want to stop early.

const colors = ["red", "green", "blue"];

// forEach: runs the given function once per item.
// the function can receive the item AND its index.
colors.forEach((color, index) => {
  console.log(index, color);
});

// for...of: nice when you only care about the values
let shout = "";
for (const color of colors) {
  shout += color.toUpperCase() + " ";
}
console.log(shout.trim());

// entries() gives you index + value pairs you can destructure
for (const [i, color] of colors.entries()) {
  console.log(`color ${i} is ${color}`);
}

// building a new value while iterating
const numbers = [4, 8, 15, 16, 23, 42];
let total = 0;
numbers.forEach((n) => {
  total += n;
});
console.log("total:", total);

// when you might need to stop early, the classic for loop still wins,
// because you cannot break out of a forEach.
function firstEven(list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] % 2 === 0) return list[i];
  }
  return null;
}
console.log("first even:", firstEven([7, 9, 12, 15]));
