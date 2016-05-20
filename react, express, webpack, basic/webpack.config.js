var path = require('path')
var webpack =require('webpack')

module.exports = {
  //entry point for bundling
  entry: [
    './index.js' 
  ],
  //the output path and filename
  output: {
    path: path.join(__dirname, 'public', 'build'),
    filename: 'bundle.js',
  },

  //babel-loader for use with jsx and es2015, does not transpile the node_modules folder
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
        exclude: '/node_modules'
      },
    ]
  },
};