const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
module.exports = {
  entry: {
    index: './src/pages/main/main.js',
    pets: './src/pages/pets/pets.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      // disable minimization of html files
      minify: false,
      inject: true,
      template: './src/pages/main/main.html',
      filename: 'index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      // disable minimization of html files
      minify: false,
      inject: true,
      template: './src/pages/pets/pets.html',
      filename: 'pets.html',
      chunks: ['pets'],
    }),
  ],

  module: {
    rules: [
      /* 
      without html-loader images in html files won't load
      with html-loader image src changes from <img src="../../assets/img/js-logo.png" alt="some alt" />
      to <img src="assets/b591aaa85de6397b1e15.png" alt="some alt" />, and images load up fine 
      */
      {
        test: /\.html$/i,
        loader: 'html-loader',
        // disable minimization of html files
        options: {
          minimize: false,
        },
      },

      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        // https://webpack.js.org/guides/asset-modules/#custom-output-filename
        generator: {
          filename: 'assets/img/[hash][ext][query]',
        },
      },

      {
        test: /\.(svg)$/i,
        type: 'asset/resource',
        // https://webpack.js.org/guides/asset-modules/#custom-output-filename
        generator: {
          filename: 'assets/svg/[hash][ext][query]',
        },
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        // https://webpack.js.org/guides/asset-modules/#custom-output-filename
        generator: {
          filename: 'assets/fonts/[hash][ext][query]',
          // filename: 'assets/fonts/[name][ext][query]',
        },
      },
    ],
  },

  experiments: {
    topLevelAwait: true,
  },
};
