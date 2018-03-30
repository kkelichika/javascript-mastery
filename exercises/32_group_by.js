// Mini project: a reusable groupBy function.
//
// "Grouping" means sorting items into buckets by some key, like grouping
// people by their city. There is no built-in groupBy yet (2018), so I
// wrote my own with reduce. This is a really common helper to have.

// groupBy takes an array and a function that returns the key for an item.
function groupBy(items, keyFn) {
  return items.reduce((groups, item) => {
    const key = keyFn(item);
    // start a new bucket if we have not seen this key before
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
    return groups;
  }, {});
}

const people = [
  { name: "Ada", city: "London" },
  { name: "Bob", city: "Paris" },
  { name: "Cara", city: "London" },
  { name: "Dan", city: "Paris" },
  { name: "Eve", city: "Berlin" },
];

// group people by city
const byCity = groupBy(people, (person) => person.city);
console.log(byCity);
// { London: [Ada, Cara], Paris: [Bob, Dan], Berlin: [Eve] }

// how many people per city
const counts = Object.entries(byCity).map(
  ([city, group]) => `${city}: ${group.length}`
);
console.log(counts); // ["London: 2", "Paris: 2", "Berlin: 1"]

// groupBy works on anything. group numbers by even/odd:
const numbers = [1, 2, 3, 4, 5, 6];
const byParity = groupBy(numbers, (n) => (n % 2 === 0 ? "even" : "odd"));
console.log(byParity); // { odd: [1, 3, 5], even: [2, 4, 6] }

// group words by their first letter
const words = ["apple", "avocado", "banana", "cherry", "blueberry"];
const byLetter = groupBy(words, (w) => w[0]);
console.log(byLetter);
