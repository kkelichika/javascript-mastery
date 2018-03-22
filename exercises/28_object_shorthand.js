// Object shorthand and computed property names.
//
// ES2015 added some nice shortcuts for writing objects:
//   - property shorthand: { name } instead of { name: name }
//   - method shorthand: greet() {} instead of greet: function () {}
//   - computed keys: use a variable's value as the key with [ ]

const name = "Ada";
const age = 36;

// the long way
const userLong = { name: name, age: age };

// property shorthand: if the key and the variable have the same name,
// you can write it just once.
const user = { name, age };
console.log(user); // { name: "Ada", age: 36 }

// this is why functions that build objects look so clean
function makePoint(x, y) {
  return { x, y };
}
console.log(makePoint(3, 4)); // { x: 3, y: 4 }

// method shorthand
const calculator = {
  // instead of add: function (a, b) { ... }
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
};
console.log(calculator.add(2, 3)); // 5

// computed property names: the key comes from a variable.
const key = "favoriteColor";
const settings = {
  [key]: "blue", // the key becomes "favoriteColor"
  [`${name}_age`]: age, // keys can be built from expressions
};
console.log(settings); // { favoriteColor: "blue", Ada_age: 36 }

// handy for building an object in a loop
const fields = ["width", "height"];
const dimensions = {};
fields.forEach((field, i) => {
  dimensions[field] = (i + 1) * 10;
});
console.log(dimensions); // { width: 10, height: 20 }
