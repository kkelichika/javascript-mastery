// Scope: where a variable can be seen and used.
//
// - Global scope: declared outside any function/block, visible everywhere.
// - Function scope: visible only inside the function it was declared in.
// - Block scope: let and const are only visible inside the { } they are in.
//   (var does NOT respect block scope, which is one reason to avoid it.)

const globalMessage = "I am global";

function showScope() {
  const localMessage = "I am local";
  console.log(globalMessage); // works - global is visible here
  console.log(localMessage); // works - we're inside the function
}

showScope();
// console.log(localMessage); // ERROR - localMessage is not visible out here

// block scope with let/const
if (true) {
  let blockVar = "only inside this block";
  console.log(blockVar);
}
// console.log(blockVar); // ERROR - blockVar is not visible here

// the difference between var and let inside a loop:
// with let, each loop turn gets its own copy, which behaves as expected.
for (let i = 0; i < 3; i++) {
  // i belongs to this loop's block
}

// inner functions can see variables from the function around them.
function outer() {
  const secret = 42;
  function inner() {
    // inner can see "secret" from outer
    return secret;
  }
  return inner();
}
console.log(outer()); // 42
