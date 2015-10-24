var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, "app");
var BUILD_PATH = path.resolve(ROOT_PATH, "build");

module.exports = {
  entry: APP_PATH,
  output: {
    path: BUILD_PATH,
    filename: "index.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: APP_PATH,
        loaders: ["babel"]
      }
    ]
  },
  devServer: {
    contentBase: "./app"
  },
  devtool: "source-map",
  debug: true,
};
