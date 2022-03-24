const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
module.exports = {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pages/main/index.html',
    }),
  ],
  entry: './src/pages/main/main.js',
  output: {
    filename: 'main.js',
    // __dirname means current directory, where webpack.config.js is located
    path: path.resolve(__dirname, 'dist'),
  },
};
