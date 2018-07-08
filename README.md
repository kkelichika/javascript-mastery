# javascript-mastery

My journey learning JavaScript from the ground up, one small exercise at a time.

## Goal

Get comfortable with modern JavaScript (ES2015+), step by step, and then move
on to building things with React.

## How to run

Most exercises are plain Node.js scripts. Run one like this:

```
node exercises/01_hello.js
```

## Exercises

- `exercises/01_hello.js` - my first program, printing to the console.
- `exercises/02_variables.js` - var, let and const, and why const is preferred.
- `exercises/03_data_types.js` - primitive types and the typeof operator (with its quirks).
- `exercises/04_strings.js` - strings, template literals and common string methods.
- `exercises/05_numbers.js` - numbers, the Math object, and converting strings to numbers.
- `exercises/06_operators.js` - operators, == vs === , logical operators and truthy/falsy values.
- `exercises/07_conditionals.js` - if/else, the ternary operator and switch.
- `exercises/08_loops.js` - for, while, for...of and for...in loops, plus break/continue.
- `exercises/09_functions.js` - function declarations vs expressions, and hoisting.
- `exercises/10_arrow_functions.js` - arrow functions and implicit returns.
- `exercises/11_parameters.js` - default parameters and rest parameters.
- `exercises/12_scope.js` - global, function and block scope.
- `exercises/13_arrays.js` - arrays and basic methods (push, pop, slice, spread).
- `exercises/14_array_iteration.js` - looping over arrays with forEach, for...of and entries().
- `exercises/15_objects.js` - objects, methods, `this`, and Object.keys/values.
- `exercises/16_mini_projects.js` - FizzBuzz and a temperature converter, putting the basics together.
- `exercises/17_array_map.js` - transforming arrays with map().
- `exercises/18_array_filter.js` - keeping only matching items with filter().
- `exercises/19_array_reduce.js` - boiling an array down to one value with reduce().
- `exercises/20_find_some_every.js` - find, findIndex, some and every.
- `exercises/21_array_sort.js` - sorting with sort() and compare functions (and its gotchas).
- `exercises/22_method_chaining.js` - chaining filter/map/sort/reduce to process data.
- `exercises/23_array_destructuring.js` - pulling values out of arrays with destructuring.
- `exercises/24_object_destructuring.js` - destructuring objects, renaming, defaults and nesting.
- `exercises/25_spread_arrays.js` - copying and combining arrays with the spread operator.
- `exercises/26_spread_objects.js` - copying, updating and merging objects immutably with spread/rest.
- `exercises/27_object_methods.js` - Object.keys/values/entries/fromEntries/assign/freeze.
- `exercises/28_object_shorthand.js` - property/method shorthand and computed property names.
- `exercises/29_set_and_map.js` - the Set (unique values) and Map (any-type keys) collections.
- `exercises/30_json.js` - JSON.stringify and JSON.parse, deep copying, and parse errors.
- `exercises/31_data_processing.js` - mini project: analysing a list of orders with map/filter/reduce/sort.
- `exercises/32_group_by.js` - mini project: a reusable groupBy helper built with reduce.
- `exercises/33_callbacks.js` - passing functions as callbacks (functions are first-class).
- `exercises/34_higher_order_functions.js` - functions that take or return other functions.
- `exercises/35_returning_functions.js` - function factories that build specialized functions.
- `exercises/36_closures.js` - closures: inner functions remembering their outer variables.
- `exercises/37_closures_in_practice.js` - private state, the module pattern and a once() helper.
- `exercises/38_this_keyword.js` - how `this` depends on how a function is called.
- `exercises/39_call_apply_bind.js` - controlling `this` with call, apply and bind.
- `exercises/40_arrow_this.js` - how arrow functions borrow `this` from where they are written.
- `exercises/41_iife.js` - immediately invoked function expressions and the module pattern.
- `exercises/42_recursion.js` - recursion: base case and recursive case (countdown, factorial, sum).
- `exercises/43_recursion_examples.js` - recursion on nested structures (flatten, reverse, file tree).
- `exercises/44_currying.js` - currying functions one argument at a time, with a generic curry() helper.
- `exercises/45_partial_application.js` - fixing some arguments up front with partial application and bind.
- `exercises/46_composition.js` - function composition with compose() and pipe().
- `exercises/47_debounce_throttle.js` - debounce and throttle, built with closures and timers.
- `exercises/48_memoize_project.js` - mini project: a memoize() utility (closures + higher-order functions).
- `exercises/49_timers.js` - setTimeout, setInterval and a first look at the event loop.
- `exercises/50_callback_hell.js` - the nested-callback "pyramid of doom" that Promises solve.
- `exercises/51_promises_intro.js` - creating and reading Promises with then/catch.
- `exercises/52_promise_chaining.js` - chaining .then() steps and returning promises (flattening the pyramid).
- `exercises/53_promise_errors.js` - error handling with .catch(), recovering and where catch belongs.
- `exercises/54_promise_all.js` - running promises in parallel with Promise.all.
- `exercises/55_promise_race.js` - Promise.race, timeouts, and a hand-rolled allSettled helper.
- `exercises/56_async_await.js` - async/await: writing async code that reads top-to-bottom.
- `exercises/57_async_error_handling.js` - handling async errors with try/catch and a to() helper.
- `exercises/58_sequential_vs_parallel.js` - running awaited tasks in sequence vs in parallel.
- `exercises/59_fetch_intro.js` - making HTTP requests with fetch (and checking response.ok).
- `exercises/60_fetch_post.js` - POST/PUT with fetch and a reusable api() wrapper.
- `exercises/61_promisify.js` - wrapping error-first callbacks into promise-returning functions.
- `exercises/62_retry.js` - an async retry helper with exponential backoff.
- `exercises/63_async_sequence.js` - processing a list in series and with a concurrency limit (forEach gotcha).
- `exercises/64_async_project.js` - mini project: a small async data client (promises, await, retry, Promise.all).
- `exercises/65_constructors.js` - constructor functions and the `new` keyword (pre-class OOP).
- `exercises/66_prototypes.js` - putting shared methods on the prototype instead of each instance.
- `exercises/67_prototype_chain.js` - the prototype chain and how property lookup walks up it.
- `exercises/68_classes.js` - ES6 class syntax (sugar over constructors and prototypes).
- `exercises/69_class_getters_setters.js` - class getters and setters for computed/validated properties.
- `exercises/70_static_methods.js` - static methods/properties and factory methods.
- `exercises/71_inheritance.js` - class inheritance with extends.
- `exercises/72_super_override.js` - overriding methods and calling the parent with super.
- `exercises/73_encapsulation.js` - keeping data private with the underscore convention and closures.
- `exercises/74_polymorphism.js` - shared method names across classes, plus duck typing.
- `exercises/75_error_classes.js` - custom error types by extending Error, checked with instanceof.
- `exercises/76_es_modules.js` + `exercises/lib/mathUtils.js` - ES modules with named export/import.
- `exercises/77_default_exports.js` + `exercises/lib/User.js` - default exports vs named exports.
- `exercises/78_composition.js` - composition over inheritance: mixing in abilities.
- `exercises/79_class_this_pitfalls.js` - the "lost this" problem in class methods and how to fix it.
- `exercises/80_oop_project.js` - mini project: a small library system (inheritance, errors, statics, polymorphism).
- `exercises/81_npm_notes.md` - notes on npm and package.json (start of the tooling month).
- `exercises/82_npm_scripts.md` - notes on npm scripts and pre/post hooks.
- `exercises/83_babel_notes.md` + `.babelrc` - Babel: transpiling modern JS to run everywhere.
- `webpack.config.js` + `src/` - Webpack: bundling modules into one file (with babel-loader).
- `exercises/85_eslint_notes.md` + `.eslintrc.json` - ESLint: catching mistakes and enforcing style.

## What I have learned so far

- Printing to the console and declaring variables with let/const.
- The basic data types and the `typeof` operator.
- Strings and template literals.
- Numbers, the Math object, and truthy/falsy values.
- Conditionals (if/else, switch, ternary) and loops.
- Writing functions, arrow functions, and default/rest parameters.
- Scope (global, function and block).
- Arrays and objects, and how to loop over them.
- The big array methods: map, filter, reduce, find, some, every and sort.
- Chaining array methods to process data step by step.
- Destructuring arrays and objects, and the spread/rest operators.
- Object helper methods (keys, values, entries) and shorthand syntax.
- Set and Map collections, and working with JSON.
- Callbacks and higher-order functions (passing and returning functions).
- Closures, private state and the module pattern.
- How `this` works, and controlling it with call/apply/bind and arrow functions.
- IIFEs, recursion, currying, partial application and function composition.
- Practical patterns: debounce, throttle and memoize.
- Async JavaScript: timers, the event loop and the callback-hell problem.
- Promises: then/catch, chaining, error handling, Promise.all and Promise.race.
- async/await with try/catch, and sequential vs parallel execution.
- Making HTTP requests with fetch (GET and POST), plus retry and concurrency helpers.
- How objects really work: constructor functions, prototypes and the prototype chain.
- ES6 classes: methods, getters/setters, static members, inheritance and super.
- Encapsulation, polymorphism, custom error classes and composition over inheritance.
- ES modules (named and default exports) and the "lost this" pitfall in class methods.
