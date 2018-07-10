# Prettier (notes)

**Prettier** is a code formatter. It rewrites my code into a consistent
style automatically - indentation, quotes, semicolons, line length. Unlike
ESLint (which is mostly about catching mistakes), Prettier is purely about
formatting, so I never have to think about spacing again.

## ESLint vs Prettier (they do different jobs)

- **ESLint**: finds problems (unused vars, `==`, possible bugs).
- **Prettier**: makes the code LOOK consistent (formatting only).

They are often used together. Prettier formats; ESLint catches issues.

## Setup

```
npm install -D prettier
```

## Config: .prettierrc.json

```json
{
  "semi": true,
  "singleQuote": false,
  "trailingComma": "es5",
  "tabWidth": 2,
  "printWidth": 80
}
```

## Running it

```
npx prettier --check exercises/   # list files that are not formatted
npx prettier --write exercises/    # actually format them
```

The best part: my editor can run Prettier on save, so the code is always
tidy without any effort. I noticed all the exercises I have written this
year already mostly follow these settings, which felt good.

Next: Jest, so I can finally write automated tests for my code.
