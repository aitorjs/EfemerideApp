'use strict'

const webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    main: './app.js',
  },
  output: {
    path: './public/',
    filename: 'app.js',
  },
  module: {
    preLoaders: [
      {
        // set up standard-loader as a preloader
        test: /\.js?$/,
        loader: 'standard',
        exclude: /(node_modules|bower_components)/
      }
    ],
    loaders: [
      {
        test: /\.js?$/,
        loader: ['babel-loader'],
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin('style.css', {
      allChunks: true
    })
  ],
  standard: {
    // config options to be passed through to standard e.g.
    parser: 'babel-eslint'
  }
}