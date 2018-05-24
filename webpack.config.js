const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: 'bundle_[hash:6].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
          filename: path.resolve('dist', 'index.html'),
          template: path.resolve('build', 'index.html'),
          inject: true,
      }),
    ],
    devtool: 'eval-source-map',
    resolve: {
      extensions: ['.js'],
  },
}