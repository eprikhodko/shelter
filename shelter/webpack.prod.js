const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',

  // disable minimization of js scripts
  optimization: {
    minimize: false,
  },

  output: {
    filename: '[name].[contenthash].js',
    // __dirname means current directory, where webpack.config.js is located
    path: path.resolve(__dirname, 'shelter'),
    // put images into /dist/assets folder
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },

  devtool: 'source-map',

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // // Extract styles into a separate file
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
});
