var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/entry.js',
  ],
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
    {
      loader: "babel-loader",
      test: /\.js$/,
      loader: 'babel',
      include: [
        path.resolve(__dirname, "src"),
      ],
    },
    {
      test: /\.json$/,
      loader: 'json'
    }
    ]
  },
};
