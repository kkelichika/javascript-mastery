// More recursion: problems that are naturally recursive.
//
// Some problems involve nested structures (trees, nested arrays) where
// recursion is much cleaner than loops, because each piece can itself
// contain more pieces.

// 1. flatten a deeply nested array into a single flat array
function flatten(arr) {
  let result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      // item is itself an array, so flatten it and add its contents
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}
console.log(flatten([1, [2, [3, [4, 5]], 6], 7])); // [1,2,3,4,5,6,7]

// 2. reverse a string recursively
function reverse(str) {
  if (str === "") return ""; // base case
  return reverse(str.slice(1)) + str[0];
}
console.log(reverse("hello")); // "olleh"

// 3. count how many items are in a nested structure of folders
const fileTree = {
  name: "root",
  children: [
    { name: "a.txt", children: [] },
    {
      name: "docs",
      children: [
        { name: "b.txt", children: [] },
        { name: "c.txt", children: [] },
      ],
    },
  ],
};

function countFiles(node) {
  // a "file" here is a node with no children
  if (node.children.length === 0) return 1;
  // otherwise add up the counts of all the children
  return node.children.reduce((total, child) => total + countFiles(child), 0);
}
console.log("file count:", countFiles(fileTree)); // 3

// 4. Fibonacci (simple but slow recursion - recalculates a lot)
function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}
console.log("fib(10):", fib(10)); // 55
// I will speed this up with memoization in a later exercise.
