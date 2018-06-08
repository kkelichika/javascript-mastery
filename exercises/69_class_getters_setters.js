// Getters and setters in classes.
//
// A getter looks like a property but runs a function when you read it.
// A setter runs when you assign to it. They let you compute values or
// validate input while still using simple obj.property syntax.

class Temperature {
  constructor(celsius = 0) {
    this._celsius = celsius; // the underscore is a hint: "internal"
  }

  // a getter: read with temp.fahrenheit (no parentheses)
  get fahrenheit() {
    return (this._celsius * 9) / 5 + 32;
  }

  // a setter: assign with temp.fahrenheit = 100
  set fahrenheit(value) {
    this._celsius = ((value - 32) * 5) / 9;
  }

  get celsius() {
    return this._celsius;
  }

  set celsius(value) {
    if (value < -273.15) {
      throw new Error("Below absolute zero!");
    }
    this._celsius = value;
  }
}

const temp = new Temperature(25);
console.log(temp.celsius); // 25       (getter, looks like a property)
console.log(temp.fahrenheit); // 77    (computed by the getter)

temp.fahrenheit = 212; // setter converts back to celsius
console.log(temp.celsius); // 100

// the setter can validate
try {
  temp.celsius = -300; // throws
} catch (error) {
  console.log("rejected:", error.message);
}

// computed getters are great for derived values
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get area() {
    return Math.PI * this.radius ** 2;
  }
  get diameter() {
    return this.radius * 2;
  }
}
const c = new Circle(5);
console.log("area:", c.area.toFixed(2)); // 78.54
console.log("diameter:", c.diameter); // 10
// note: area is read like c.area, not c.area() - it is a getter.
