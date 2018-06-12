// Inheritance with extends.
//
// "extends" lets one class build on another. The child class gets all the
// parent's methods and can add its own. This is the class version of the
// prototype chain from earlier.

class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    return `${this.name} is eating`;
  }
  describe() {
    return `${this.name} is an animal`;
  }
}

// Dog extends Animal: it IS an Animal, plus more.
class Dog extends Animal {
  bark() {
    return `${this.name} says woof`;
  }
}

const dog = new Dog("Rex");
console.log(dog.eat()); // inherited from Animal
console.log(dog.bark()); // Dog's own method
console.log(dog.describe()); // inherited

// the instance is BOTH a Dog and an Animal
console.log(dog instanceof Dog); // true
console.log(dog instanceof Animal); // true

// a child can add its own constructor, but must call super() first to run
// the parent's constructor (next exercise goes deeper on super).
class Cat extends Animal {
  constructor(name, indoor) {
    super(name); // run Animal's constructor to set this.name
    this.indoor = indoor; // then add Cat-specific data
  }
  meow() {
    return `${this.name} says meow`;
  }
}

const cat = new Cat("Whiskers", true);
console.log(cat.eat()); // inherited
console.log(cat.meow()); // own
console.log("indoor:", cat.indoor);

// multiple levels work too
class Puppy extends Dog {
  whine() {
    return `${this.name} whines`;
  }
}
const puppy = new Puppy("Bingo");
console.log(puppy.bark()); // from Dog
console.log(puppy.eat()); // from Animal
console.log(puppy.whine()); // its own
