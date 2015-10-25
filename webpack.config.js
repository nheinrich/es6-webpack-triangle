var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require("html-webpack-plugin");

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, "app");
var BUILD_PATH = path.resolve(ROOT_PATH, "build");

module.exports = {
  entry: APP_PATH,
  output: {
    path: BUILD_PATH,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.sass$/,
        include: APP_PATH,
        loaders: ["style", "css?sourceMap", "sass?indentedSyntax&sourceMap"]
      },
      {
        test: /\.js$/,
        include: APP_PATH,
        loaders: ["babel"]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({title: "Black Triangle"}),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  devtool: "source-map",
  debug: true,
};
