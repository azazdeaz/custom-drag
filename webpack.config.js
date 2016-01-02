
var path = require('path')

module.exports = {
  context: __dirname,
  entry: './src/index',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '/browser'),
    filename: 'custom-drag.js',
    library: 'customDrag',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
