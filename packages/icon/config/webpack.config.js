/**
 *  @typedef {Object} Package
 *  @property {string} name
 */

const path = require("path");
const webpack = require("webpack");
const tsConfigPath = path.resolve(__dirname, "./tsconfig.json");
const args = process.argv.slice(2);
const mode =
  args[args.indexOf("--mode") + 1] === "production"
    ? "production"
    : "development";
const production = mode === "production";

/** @type {Package} */
const pkg = require(path.resolve(__dirname, "../package.json"));

console.log("mode: %s: %s", mode, production);

module.exports = {
  devtool: !production ? "source-map" : undefined,
  mode,
  entry: {
    [`${pkg.name.replace(/@.*\/(.*)/, "$1")}` + (production ? ".min" : "")]: path.resolve(
      __dirname,
      "../src/index.ts",
    ),
  },
  output: {
    path: path.resolve(__dirname, "../lib/umd"),
    filename: "[name].js",
    libraryTarget: "umd",
    library: "icon",
    umdNamedDefine: true,
  },
  resolve: {
    extensions: [".ts", ".tsx"],
  },
  // devtool: "source-map",
  plugins: [],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          configFile: tsConfigPath,
        },
      },
    ],
  },
  externals: [
      "react",
      "react-dom",
      "classnames"
  ]
};
