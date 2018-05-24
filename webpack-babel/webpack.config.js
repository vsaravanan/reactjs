const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'app.js'
    },
    resolve: {
      alias: {
        'components': path.resolve(__dirname , './src/components')
      }
    },
    module: {
        rules: [
          { test: /\.css$/,
            use: [
              { loader: "style-loader" },
              { loader: "css-loader" }
            ]
          },
          {
            test: /\.(js|jsx?)$/,
            exclude: /node_modules/,
            use: "babel-loader"
          }
        ]
      }
     



}