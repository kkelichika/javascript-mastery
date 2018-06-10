// Static methods and properties.
//
// A "static" member belongs to the CLASS itself, not to instances. You
// call it on the class name. They are good for helper/utility functions
// that are related to the class but do not need a specific object.

class MathHelper {
  // called as MathHelper.add(2, 3), NOT on an instance
  static add(a, b) {
    return a + b;
  }
  static square(n) {
    return n * n;
  }
}

console.log(MathHelper.add(2, 3)); // 5
console.log(MathHelper.square(4)); // 16
// const m = new MathHelper(); m.add(...) // would NOT work - it's static

// a very common use: a static "factory" that builds an instance in a
// specific way, as a friendlier alternative to the constructor.
class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  // factory methods read nicely: User.createAdmin("Ada")
  static createAdmin(name) {
    return new User(name, "admin");
  }
  static createGuest() {
    return new User("Guest", "guest");
  }

  describe() {
    return `${this.name} (${this.role})`;
  }
}

const admin = User.createAdmin("Ada");
const guest = User.createGuest();
console.log(admin.describe()); // "Ada (admin)"
console.log(guest.describe()); // "Guest (guest)"

// static can also hold shared data, like a counter of how many were made.
class Widget {
  static count = 0; // a static property (class field)
  constructor() {
    Widget.count += 1; // increment the shared counter
    this.id = Widget.count;
  }
}
new Widget();
new Widget();
const w = new Widget();
console.log("widgets created:", Widget.count); // 3
console.log("this widget id:", w.id); // 3
