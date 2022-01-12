const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'ToDoList with webpack',
      template: './src/index.html'
    }),
  ],

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
}