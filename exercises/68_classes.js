// ES6 classes.
//
// Classes (ES2015) are a cleaner syntax for the constructor + prototype
// stuff I just learned. Under the hood it is still prototypes - classes
// are "syntactic sugar" - but the code reads much more clearly.

class Person {
  // the constructor runs when you do new Person(...)
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // methods written here go on the prototype automatically (shared)
  greet() {
    return `Hi, I'm ${this.name}`;
  }

  haveBirthday() {
    this.age += 1;
    return this.age;
  }
}

const ada = new Person("Ada", 36);
const bob = new Person("Bob", 41);

console.log(ada.greet()); // "Hi, I'm Ada"
console.log(bob.haveBirthday()); // 42

// proof it is still prototypes underneath: methods are shared, just like
// when I wrote them on Person.prototype by hand.
console.log(ada.greet === bob.greet); // true
console.log(ada instanceof Person); // true

// classes are NOT hoisted (unlike function declarations). You must define
// a class before you use it.
// const x = new Cat(); // ERROR if Cat is defined below
class Cat {
  constructor(name) {
    this.name = name;
  }
}
const cat = new Cat("Whiskers");
console.log(cat.name);

// you also cannot forget "new" - calling a class without it throws,
// which catches the bug that plain constructor functions allowed.
// Person("oops"); // TypeError: Class constructor Person cannot be invoked without 'new'
