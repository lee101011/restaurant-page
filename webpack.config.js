// npm install -D webpack webpack-cli

// npm install -D webpack-dev-server
// npx webpack serve -> these two commands replace npx webpack on every change (changes to config require restart)

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "eval-source-map", // displays source files rather than bundled files
  devServer: { // webpack-dev-server watch list
    watchFiles: ["./src/template.html"],
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", /// html-webpack-plugin
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // style-loader css-loader
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i, // for when we need to import an image in js
        type: "asset/resource",
      },
    ],
  },
};