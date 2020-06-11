const common = require('./webpack.common.js');
const merge = require('webpack-merge');

module.exports = merge(common, {
  mode: "development",
  devServer: {
    inline: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
});