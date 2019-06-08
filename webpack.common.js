const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './main.js'
  },
  plugins: [],
  output: {
    filename: 'voting.bundle.js',
    path: path.resolve(__dirname, )
  },
  target: 'web',
  node: {
    fs : 'empty',
    tls : 'empty',
    net : 'empty'
  }
};