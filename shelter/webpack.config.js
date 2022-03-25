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
    filename: '[name].[contenthash].js',
    // __dirname means current directory, where webpack.config.js is located
    path: path.resolve(__dirname, 'dist'),
    // put images into /dist/assets folder
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },

  devtool: 'source-map',

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
      /* 
      without html-loader images in html files won't load
      with html-loader image src changes from <img src="../../assets/img/js-logo.png" alt="some alt" />
      to <img src="assets/b591aaa85de6397b1e15.png" alt="some alt" />, and images load up fine 
      */
      // {
      //   test: /\.html$/i,
      //   loader: 'html-loader',
      // },
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
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },

  devServer: {
    // watchFiles: ['src/**/*'],
    open: true,
    hot: true,
    port: 'auto',
    static: {
      directory: './src',
      watch: true,
    },
  },
};
