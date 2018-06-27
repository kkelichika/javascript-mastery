// Class methods and the "lost this" pitfall (important before React).
//
// When you pass a class method somewhere as a callback (an event handler,
// setTimeout, etc.), it can lose its "this". This bites a lot of people
// in React class components, so I want to understand it now.

class Counter {
  constructor() {
    this.count = 0;
  }

  // a normal method. If passed as a callback, "this" may be lost.
  increment() {
    this.count += 1;
    return this.count;
  }

  // FIX 1: bind in the constructor so "this" is locked to the instance.
  constructorBindExample() {
    // (done below in the constructor of BoundCounter)
  }

  // FIX 2: define the method as an arrow class field. Arrow functions
  // capture "this" from where they are defined, so it stays the instance.
  incrementArrow = () => {
    this.count += 1;
    return this.count;
  };
}

const counter = new Counter();

// direct call works fine
console.log(counter.increment()); // 1

// but pulling the method off and calling it loses "this"
const loose = counter.increment;
// loose(); // TypeError: cannot read 'count' of undefined

// the arrow class field keeps working even when detached
const looseArrow = counter.incrementArrow;
console.log(looseArrow()); // 2  (this is still the counter)

// FIX 1 in full: bind in the constructor
class BoundCounter {
  constructor() {
    this.count = 0;
    // bind makes a new function with "this" permanently set to this instance
    this.increment = this.increment.bind(this);
  }
  increment() {
    this.count += 1;
    return this.count;
  }
}

const bound = new BoundCounter();
const detached = bound.increment; // safe now, because we bound it
console.log(detached()); // 1
console.log(detached()); // 2

// summary of the common fixes:
//   - this.method = this.method.bind(this) in the constructor
//   - method = () => { ... } as an arrow class field
//   - or pass an arrow wrapper: onClick={() => this.method()}
// I will use these a lot once I get to React class components.
