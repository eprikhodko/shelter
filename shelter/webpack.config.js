const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');
module.exports = {
  mode: 'development',
  entry: {
    main: './src/pages/main/main.js',
    pets: './src/pages/pets/pets.js',
  },

  output: {
    filename: '[name].js',
    // __dirname means current directory, where webpack.config.js is located
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext][query]',
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/pages/main/main.html',
      filename: 'main.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/pages/pets/pets.html',
      filename: 'pets.html',
      chunks: ['pets'],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // Extract styles into a separate file
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

  devServer: {
    watchFiles: ['src/**/*'],
  },
};
