const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.ts",
    tests: "./tests/index.ts"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  devtool: "inline-source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "hbs-parser-next": path.resolve(__dirname, "src", "index.ts")
    }
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  }
};
