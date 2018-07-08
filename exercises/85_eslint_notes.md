# ESLint (notes)

**ESLint** is a "linter": it reads my code and warns about problems and
style issues before I even run it - things like unused variables, using
`==` instead of `===`, or using `var`. It catches a whole class of small
mistakes automatically.

## Setup

```
npm install -D eslint
npx eslint --init    # answers a few questions and writes a config
```

## Config: .eslintrc.json

```json
{
  "env": { "browser": true, "node": true, "es6": true },
  "parserOptions": { "ecmaVersion": 2018, "sourceType": "module" },
  "extends": "eslint:recommended",
  "rules": {
    "eqeqeq": "error",      // force === over ==
    "no-var": "error",      // force let/const over var
    "prefer-const": "warn"  // suggest const when a let is never reassigned
  }
}
```

- **env** tells ESLint which globals exist (window, process, etc.).
- **extends** pulls in a ready-made set of rules. `eslint:recommended` is
  a sensible starting point.
- **rules** lets me turn individual rules on/off or change their severity
  ("off", "warn", "error").

## Running it

```
npx eslint exercises/        # check files
npx eslint exercises/ --fix   # auto-fix what it can
```

Many of these rules match exactly the lessons I learned earlier (use ===,
avoid var). It is nice having the computer enforce them for me now.

Next: Prettier, which formats the code so I never argue about spacing.
