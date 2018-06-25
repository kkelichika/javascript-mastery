// Composition over inheritance.
//
// Inheritance says an object IS-A type. Composition says an object HAS
// some abilities. Deep inheritance trees get rigid (what if a robot can
// swim but not eat?). Composition mixes in just the behaviours you need,
// which is often more flexible.

// each ability is a small function that adds methods to an object.
const canEat = (state) => ({
  eat() {
    state.energy += 10;
    return `energy is now ${state.energy}`;
  },
});

const canWalk = (state) => ({
  walk() {
    state.energy -= 5;
    return `${state.name} walks`;
  },
});

const canSwim = (state) => ({
  swim() {
    state.energy -= 8;
    return `${state.name} swims`;
  },
});

// build a creature by COMBINING only the abilities it should have.
function createPerson(name) {
  const state = { name, energy: 100 };
  return {
    ...state,
    ...canEat(state),
    ...canWalk(state),
    ...canSwim(state),
  };
}

function createFish(name) {
  const state = { name, energy: 100 };
  // a fish can swim and eat, but NOT walk - just leave canWalk out.
  return {
    ...state,
    ...canEat(state),
    ...canSwim(state),
  };
}

const person = createPerson("Ada");
console.log(person.walk()); // "Ada walks"
console.log(person.swim()); // "Ada swims"
console.log(person.eat()); // "energy is now ..."

const fish = createFish("Nemo");
console.log(fish.swim()); // "Nemo swims"
console.log(typeof fish.walk); // "undefined" - fish cannot walk

// inheritance would force me into awkward classes (SwimmingWalkingEater?).
// composition lets me pick abilities like LEGO bricks.
//
// Both have their place: inheritance for clear "is-a" hierarchies,
// composition for mixing independent behaviours. React, by the way,
// strongly prefers composition - good to keep in mind.
