// Built-in Object methods.
//
// The Object "static" methods help you work with an object's keys and
// values, often by turning them into arrays so you can use map/filter/
// reduce on them.

const scores = {
  math: 90,
  science: 85,
  history: 70,
};

// the three big ones
console.log(Object.keys(scores)); // ["math", "science", "history"]
console.log(Object.values(scores)); // [90, 85, 70]
console.log(Object.entries(scores)); // [["math", 90], ["science", 85], ...]

// because entries() gives an array, I can loop with destructuring
for (const [subject, score] of Object.entries(scores)) {
  console.log(`${subject}: ${score}`);
}

// average score using values() + reduce()
const values = Object.values(scores);
const average = values.reduce((sum, v) => sum + v, 0) / values.length;
console.log("average:", average.toFixed(1));

// turn an object into a filtered object: keep only scores >= 80
const passed = Object.fromEntries(
  Object.entries(scores).filter(([, score]) => score >= 80)
);
console.log(passed); // { math: 90, science: 85 }

// Object.assign also merges objects (older alternative to spread)
const merged = Object.assign({}, scores, { art: 95 });
console.log(merged);

// freeze an object so it cannot be changed
const config = Object.freeze({ version: 1 });
config.version = 2; // silently ignored (throws in strict mode)
console.log(config.version); // 1
