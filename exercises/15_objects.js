// Objects: collections of key/value pairs.
//
// Objects are how you group related data together, like the details of a
// person. Each entry has a key (the name) and a value.

const person = {
  name: "Ada",
  age: 36,
  job: "mathematician",
  // a value can also be a function - then it is called a "method"
  greet() {
    return `Hi, I'm ${this.name}.`;
  },
};

// reading values: dot notation or bracket notation
console.log(person.name); // "Ada"
console.log(person["age"]); // 36

// calling a method. "this" inside the method refers to the object.
console.log(person.greet());

// adding and changing properties
person.country = "England";
person.age = 37;
console.log(person);

// deleting a property
delete person.job;

// getting the keys, values, or both
console.log(Object.keys(person)); // [ 'name', 'age', 'greet', 'country' ]
console.log(Object.values(person));

// looping over an object
for (const key in person) {
  if (typeof person[key] !== "function") {
    console.log(`${key}: ${person[key]}`);
  }
}

// objects can hold arrays and other objects (nesting)
const book = {
  title: "Clean Code",
  authors: ["Robert C. Martin"],
  details: { pages: 464, year: 2008 },
};
console.log(book.details.year); // 2008
