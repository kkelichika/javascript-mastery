// JSON: JSON.stringify and JSON.parse.
//
// JSON is a text format for data. It looks like JavaScript objects, but
// it is a string. It is how programs send data to each other (for example
// a web API). Two functions do the work:
//   JSON.stringify(value)  -> turn a JS value into a JSON string
//   JSON.parse(string)     -> turn a JSON string back into a JS value

const user = {
  name: "Ada",
  age: 36,
  hobbies: ["maths", "coding"],
  active: true,
};

// object -> JSON string
const json = JSON.stringify(user);
console.log(json);
console.log(typeof json); // "string"

// pretty-printed with 2-space indentation (nice for reading/saving)
console.log(JSON.stringify(user, null, 2));

// JSON string -> object
const text = '{"name":"Bob","age":30}';
const parsed = JSON.parse(text);
console.log(parsed.name, parsed.age); // "Bob" 30

// a common real use: make a deep copy of a simple object by
// stringifying then parsing (works for plain data without functions).
const original = { a: 1, nested: { b: 2 } };
const copy = JSON.parse(JSON.stringify(original));
copy.nested.b = 99;
console.log(original.nested.b); // 2 - the original is safe

// careful: JSON cannot hold functions or undefined - they get dropped
console.log(JSON.stringify({ x: 1, fn: () => {}, y: undefined })); // {"x":1}

// JSON.parse throws if the text is not valid JSON, so wrap it in try/catch
try {
  JSON.parse("{ not valid }");
} catch (error) {
  console.log("Could not parse:", error.message);
}
