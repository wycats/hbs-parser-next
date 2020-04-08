const path = require("path");
const fs = require("fs");

module.exports = {
  entry: {
    main: "./src/index.ts",
    tests: "./tests/index.ts",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: require.resolve("ts-loader"),
        exclude: /node_modules/,
        options: {
          configFile: require.resolve("./tsconfig.webpack.json"),
          projectReferences: true,
          transpileOnly: true,
        },
      },
    ],
  },
  devtool: "inline-source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "hbs-parser-next": path.resolve(__dirname, "src", "index.ts"),
    },
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
};
