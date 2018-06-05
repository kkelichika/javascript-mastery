// The prototype chain.
//
// When you read a property, JS looks on the object, then its prototype,
// then THAT prototype's prototype, and so on, until it finds it or reaches
// the end (null). This chain of objects is the prototype chain, and it is
// how inheritance works under the hood.

const animal = {
  eats: true,
  walk() {
    return `${this.name} walks`;
  },
};

// make rabbit with animal as its prototype
const rabbit = Object.create(animal);
rabbit.name = "Rabbit";
rabbit.jumps = true;

// rabbit has its own name and jumps, but eats/walk come from animal
console.log(rabbit.name); // own
console.log(rabbit.jumps); // own
console.log(rabbit.eats); // inherited from animal
console.log(rabbit.walk()); // inherited method, "this" is rabbit

// chains can be several levels deep
const longEar = Object.create(rabbit);
longEar.earLength = 10;
console.log(longEar.eats); // found 2 prototypes up (animal)
console.log(longEar.walk()); // "Rabbit walks"? no - "this" is longEar...
// note: walk uses this.name; longEar has no name, so it looks UP the chain
// and finds rabbit's name -> "Rabbit walks".

// the chain ends at Object.prototype, then null
console.log(Object.getPrototypeOf(longEar) === rabbit); // true
console.log(Object.getPrototypeOf(rabbit) === animal); // true
console.log(Object.getPrototypeOf(animal) === Object.prototype); // true
console.log(Object.getPrototypeOf(Object.prototype)); // null (the end)

// this is why every object has methods like toString and hasOwnProperty -
// they live on Object.prototype at the end of the chain.
console.log(typeof rabbit.toString); // "function"

// writing a property always happens on the object ITSELF, never up the
// chain. Setting longEar.eats = false would add it to longEar, hiding
// animal.eats for longEar only.
longEar.eats = false;
console.log(longEar.eats, rabbit.eats); // false true
