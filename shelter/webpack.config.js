const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
module.exports = {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/pages/main/main.html',
      // devserver dont work with filename property
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
  // entry: './src/pages/main/main.js',
  entry: {
    main: './src/pages/main/main.js',
    pets: './src/pages/pets/pets.js',
  },
  output: {
    // filename: 'main.js',
    filename: '[name].js',
    // __dirname means current directory, where webpack.config.js is located
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    watchFiles: ['src/**/*'],
  },
};
