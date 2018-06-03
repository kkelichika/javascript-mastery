// Prototypes.
//
// In the last exercise, every Person got its own copy of greet(). That
// wastes memory. The fix is the PROTOTYPE: a shared object where methods
// live once, and all instances look them up from there.
//
// Every function has a .prototype object. Objects made with "new" link to
// it, so they can use whatever is on it.

function Person(name, age) {
  this.name = name; // own data, unique per object
  this.age = age;
}

// put the method on the prototype ONCE, shared by all Person objects.
Person.prototype.greet = function () {
  return `Hi, I'm ${this.name}`;
};

Person.prototype.haveBirthday = function () {
  this.age += 1;
  return this.age;
};

const ada = new Person("Ada", 36);
const bob = new Person("Bob", 41);

console.log(ada.greet()); // "Hi, I'm Ada"
console.log(bob.greet()); // "Hi, I'm Bob"

// both objects share the SAME function instance (not a copy each)
console.log(ada.greet === bob.greet); // true

// the object itself only stores its own data
console.log(Object.keys(ada)); // ["name", "age"] - no "greet" here
console.log(ada.haveBirthday()); // 37

// how lookup works: JS first looks on the object, then on its prototype.
console.log(ada.hasOwnProperty("name")); // true (own)
console.log(ada.hasOwnProperty("greet")); // false (on the prototype)

// you can see the link
console.log(Object.getPrototypeOf(ada) === Person.prototype); // true

// This is what ES6 "class" syntax does for us automatically - it puts the
// methods on the prototype. Next exercise: the prototype CHAIN.
