// Custom error classes.
//
// You can make your own error types by extending the built-in Error class.
// Custom errors carry a clear name and can hold extra data, and you can
// tell them apart in a catch with instanceof. This is a great use of
// inheritance.

class ValidationError extends Error {
  constructor(message, field) {
    super(message); // set the message via Error's constructor
    this.name = "ValidationError"; // so it prints with the right name
    this.field = field; // extra data specific to this error
  }
}

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFoundError";
  }
}

// a function that throws different error types
function createUser(data) {
  if (!data.name) {
    throw new ValidationError("name is required", "name");
  }
  if (data.age < 0) {
    throw new ValidationError("age cannot be negative", "age");
  }
  return { id: 1, ...data };
}

// in the catch, I can check WHICH kind of error it was and react properly.
function tryCreate(data) {
  try {
    const user = createUser(data);
    console.log("created:", user);
  } catch (error) {
    if (error instanceof ValidationError) {
      console.log(`Validation failed on "${error.field}": ${error.message}`);
    } else if (error instanceof NotFoundError) {
      console.log("Not found:", error.message);
    } else {
      // re-throw anything I do not know how to handle
      throw error;
    }
  }
}

tryCreate({ age: 30 }); // missing name
tryCreate({ name: "Ada", age: -5 }); // bad age
tryCreate({ name: "Ada", age: 30 }); // ok

// custom errors are still real Errors, so they have a stack trace etc.
const err = new ValidationError("test", "x");
console.log(err instanceof ValidationError); // true
console.log(err instanceof Error); // true
console.log(err.name); // "ValidationError"
