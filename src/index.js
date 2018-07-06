// The entry point for the webpack bundle.
//
// It imports from other modules. Webpack follows these imports, gathers
// everything that is actually used, and produces one dist/bundle.js.

import { greet } from "./greeting.js";

const message = greet("World");
console.log(message);

// in a browser build this would update the page; in Node it just logs.
if (typeof document !== "undefined") {
  document.body.innerHTML = `<h1>${message}</h1>`;
}
