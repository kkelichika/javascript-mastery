# Babel (notes)

**Babel** is a "transpiler": it takes modern JavaScript (the ES2015+ stuff
I have been learning) and turns it into older JavaScript that runs in any
browser, including older ones. This way I can write nice modern code and
still have it work everywhere.

## Why I need it

Not every browser supports every new feature. Arrow functions, classes,
async/await, ES modules - Babel rewrites them into equivalent older code.

## Setup

```
npm install -D @babel/core @babel/cli @babel/preset-env
```

A **preset** is a bundle of transforms. `@babel/preset-env` is the smart
one: it figures out what to transpile based on the browsers I want to
support, so I do not have to list every transform by hand.

## Config: .babelrc

```json
{
  "presets": ["@babel/preset-env"]
}
```

## Trying it

```
npx babel exercises/68_classes.js   # prints the transpiled, older-style code
```

When I ran it on my class file, Babel turned the `class` into a constructor
function with prototype methods - exactly the prototype stuff I learned in
June! That made it click that classes really are sugar.

Next: Webpack, which bundles all my modules into one file for the browser.
