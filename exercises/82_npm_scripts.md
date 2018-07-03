# npm scripts (notes)

The `scripts` section of `package.json` lets me give short names to longer
commands. I run them with `npm run <name>`.

```json
"scripts": {
  "start": "node exercises/01_hello.js",
  "greet": "echo \"Keep learning!\""
}
```

## Running them

```
npm start          # "start" is special - no "run" needed
npm test           # "test" is also special - no "run" needed
npm run greet      # everything else needs "run"
```

## Lifecycle / pre & post hooks

npm automatically runs a `pre<name>` script before, and a `post<name>`
script after, a script with that name. For example, `pretest` runs
automatically before `test`. This is handy for setup/cleanup steps.

```json
"scripts": {
  "pretest": "echo \"running tests...\"",
  "test": "jest"
}
```

## Why this is useful

- one consistent command (`npm test`) works in every project, no matter
  which tool is underneath
- new contributors do not need to memorise long commands
- CI systems can just run `npm test` and `npm run build`

Next: I will set up Babel so I can use the newest syntax everywhere.
