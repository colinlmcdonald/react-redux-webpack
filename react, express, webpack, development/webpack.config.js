var path = require('path')
var webpack =require('webpack')

module.exports = {

  //fastest rebuild and build speed
  devtool: 'eval', 
  entry: [
    //for hot style updates
    'webpack/hot/dev-server',
    //refreshes the browser when it can't hot update
    'webpack-dev-server/client?http://localhost:8080', 
    //our entry point
    './index.js' 
  ],
  output: {
    path: path.join(__dirname, 'public', 'build'),
    filename: 'bundle.js',
    publicPath: '/build/' //the server will listen in on this path and then proxy Webpack
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
      //This converts our .css into JS
      {
        test: /\.css$/,
        loader: 'css-loader'
      }
    ]
  },
  //Since we're running Webpack from our server, need to manually add the
  //Hot Replacement plugin
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};