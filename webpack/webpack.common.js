const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../build')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html')
    }),
    new CopyWebpackPlugin([
      {from: 'src/assets', to: 'assets'}
    ])
  ]
}