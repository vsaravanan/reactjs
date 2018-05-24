const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'app.js'
    },
    resolve: {
      alias: {
        'assets': path.resolve(__dirname , './src/assets'),
        'components': path.resolve(__dirname , './src/components'),
        'demos': path.resolve(__dirname , './src/demos'),
        'hocs': path.resolve(__dirname , './src/hocs'),
        'pages': path.resolve(__dirname , './src/pages'),
        'styles': path.resolve(__dirname , './src/styles'),
        'utils': path.resolve(__dirname , './src/utils'),
      }
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx?)$/,
            exclude: /node_modules/,
            use: "babel-loader"
          },
          {
            test: /\.css$/,
            loader:[ 'style-loader', 'css-loader' ]
          }          
        ]
      }
     



}