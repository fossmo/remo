var path = require("path");
var webpack = require('webpack');
var less = require('less-loader');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: ["./examples/index.jsx"]
  },
  output: {
    path: path.resolve(__dirname, "examples"),
    publicPath: "http://localhost:8080/",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/,
      include: __dirname
    },
    { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
    {
      test: /\.jsx$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/,
      include: __dirname
    }
    ]
  }
};
