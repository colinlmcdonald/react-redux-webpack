var path = require('path')
var webpack =require('webpack')

module.exports = {

  //fastest rebuild and build speed
  entry: [
    //our entry point
    './index.js' 
  ],
  output: {
    path: path.join(__dirname, 'public', 'build'),
    filename: 'bundle.js',
  },

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