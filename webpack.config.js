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
