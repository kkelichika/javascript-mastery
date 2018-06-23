// Default exports vs named exports.
//
// - A default export is imported WITHOUT braces, and you can call it
//   anything you like.
// - Named exports are imported WITH braces, using their exact names.
// - A module can mix one default export with several named exports.

// import the default (no braces) - I can pick any name for it
import User, { ROLES, isValidRole } from "./lib/User.js";

const user = new User("Ada");
console.log(user.greet()); // "Hi, I'm Ada"
console.log("roles:", ROLES);
console.log(isValidRole("admin")); // true
console.log(isValidRole("wizard")); // false

// because the default has no fixed name, this import is just as valid:
//   import Person from "./lib/User.js";
// "Person" and "User" would refer to the same default class.

// when to use which (the common convention I am adopting):
//   - default export: when a file is "about" one main thing (a class,
//     a component, a single function).
//   - named exports:  when a file provides a bunch of related utilities.
//
// React components, for example, are almost always default exports - so
// this will matter a lot when I start React.

// you can also re-export from another module to make a tidy entry point:
//   export { default as User } from "./lib/User.js";
console.log("default + named exports working together");
