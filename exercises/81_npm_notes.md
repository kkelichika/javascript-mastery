# npm and package.json (notes)

This month I am learning the tools that real JavaScript projects use, not
just the language. The first one is **npm** (Node Package Manager).

## What package.json is

`package.json` is the heart of a JavaScript project. It records:

- the project's name, version and description
- the **scripts** I can run (like `npm start`, `npm test`)
- the **dependencies** (packages the project needs to run)
- the **devDependencies** (packages only needed while developing/testing)

## Commands I learned

```
npm init -y           # create a package.json with defaults
npm install <pkg>     # add a dependency (saved under "dependencies")
npm install -D <pkg>  # add a dev dependency (saved under "devDependencies")
npm install           # install everything listed in package.json
npm run <script>      # run a script defined under "scripts"
```

## Dependencies vs devDependencies

- **dependencies**: needed when the app actually runs (e.g. a date library).
- **devDependencies**: only needed while building/testing (e.g. Jest, ESLint,
  Webpack). Users of the app do not need these.

## node_modules and package-lock.json

- `node_modules/` is where the installed packages live. It is huge and is
  generated, so I added it to `.gitignore` - you never commit it.
- `package-lock.json` records the EXACT versions installed, so everyone
  gets the same dependency tree. That one IS committed.

Next: I will add scripts, then bring in Babel, Webpack, ESLint and Jest.
