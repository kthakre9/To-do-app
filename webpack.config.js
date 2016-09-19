/**
* Created by kthakre on 5/7/16.
*/
var path = require('path');
var webpack = require('webpack');
var BUILD_DIR = path.join(__dirname, '/app/build');

module.exports = {
  context: path.join(__dirname, '/app'),
  entry: './app.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpeg|svg)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file?name=[path][name].[hash].[ext]',
      },
      {
        test: /\.less$/,
        loaders: ['style', 'css', 'less'],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  // node: {
  //     fs: 'empty',
  //     net: "empty",
  //     tls: "empty"
  // },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
