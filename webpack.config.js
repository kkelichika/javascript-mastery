// webpack.config.js
//
// Webpack takes my many small module files and bundles them into a single
// file the browser can load. It can also run my code through Babel along
// the way (using babel-loader).

const path = require("path");

module.exports = {
  // where the bundling starts - the app's entry point
  entry: "./src/index.js",

  // where the bundled file is written
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  // "development" gives readable output; "production" minifies it
  mode: "development",

  module: {
    rules: [
      {
        // run every .js file (except node_modules) through babel-loader
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};
