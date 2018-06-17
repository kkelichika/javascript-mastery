// Polymorphism.
//
// Polymorphism means "many forms": different classes can share the same
// method name, and the right version runs depending on the actual object.
// This lets you treat a mix of objects the same way and let each one do
// its own thing.

class Shape {
  area() {
    // a base method the children are expected to override
    throw new Error("area() must be implemented by a subclass");
  }
  describe() {
    // this calls area(), which will be the CHILD's version at runtime
    return `${this.constructor.name} with area ${this.area().toFixed(2)}`;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }
  area() {
    return (this.base * this.height) / 2;
  }
}

// the magic: I can treat all shapes the same way. Each .area() and
// .describe() call runs the correct version for that object.
const shapes = [new Circle(5), new Rectangle(4, 6), new Triangle(3, 8)];

shapes.forEach((shape) => console.log(shape.describe()));

// total area of a mixed list - no need to know which shape is which.
const totalArea = shapes.reduce((sum, shape) => sum + shape.area(), 0);
console.log("total area:", totalArea.toFixed(2));

// JavaScript is loosely typed, so polymorphism also works by "duck
// typing": if an object has an area() method, this works even without a
// shared base class. (If it walks like a duck...)
const customShape = {
  area() {
    return 42;
  },
};
console.log("custom area:", customShape.area());
