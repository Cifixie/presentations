const path = require("path")
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
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
          title: 'Debugging demo',
          filename: path.resolve('dist', 'index.html'),
          inject: true,
      }),
    ],
    resolve: {
      extensions: ['.js'],
  },
}