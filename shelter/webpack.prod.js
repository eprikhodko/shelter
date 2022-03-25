const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'production',

  output: {
    filename: '[name].[contenthash].js',
    // __dirname means current directory, where webpack.config.js is located
    path: path.resolve(__dirname, 'dist'),
    // put images into /dist/assets folder
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },

  devtool: 'source-map',
});
