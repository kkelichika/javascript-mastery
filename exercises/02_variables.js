// Variables in JavaScript.
//
// There are three ways to declare a variable: var, let and const.
// I read that in modern JS you should mostly use const, and let when the
// value needs to change. var is the old way and behaves differently, so
// I am trying to avoid it.

const name = "Olexandr"; // const: cannot be reassigned
let age = 25; // let: can be reassigned

console.log(name + " is " + age + " years old.");

// changing a let variable is fine
age = age + 1;
console.log("Next year:", age);

// const can't be reassigned. If I uncomment the next line it throws an error:
// name = "Someone else"; // TypeError: Assignment to constant variable.

// but const objects can still have their contents changed (good to know!)
const person = { name: "Anna" };
person.name = "Boris"; // this is allowed
console.log(person);
