// Constructor functions - the old way to make objects of the same shape.
//
// Before ES6 classes, you made "blueprints" for objects using constructor
// functions. You call them with the "new" keyword. Understanding these
// helps me understand what classes really do underneath (next exercises).

// a constructor function. By convention its name starts with a capital.
function Person(name, age) {
  // "new" creates a fresh empty object and points "this" at it
  this.name = name;
  this.age = age;
  // (defining methods here works, but copies the function onto every
  //  object - prototypes fix that, which is the next exercise.)
  this.greet = function () {
    return `Hi, I'm ${this.name}`;
  };
}

// "new" does four things: makes a new object, sets "this" to it, runs the
// function, and returns the object automatically.
const ada = new Person("Ada", 36);
const bob = new Person("Bob", 41);

console.log(ada.name, ada.age); // "Ada" 36
console.log(bob.greet()); // "Hi, I'm Bob"

// each object made with the constructor has its own copy of the properties
console.log(ada instanceof Person); // true
console.log(bob instanceof Person); // true

// what happens if you FORGET "new"? "this" is not a new object, so it
// breaks (in strict mode it throws). This is a classic bug, and a reason
// classes are nicer - they force you to use new.
// const oops = Person("Carl", 20); // would be wrong

// constructors can build more complex objects too
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}
const r = new Rectangle(4, 5);
console.log("area:", r.area()); // 20
