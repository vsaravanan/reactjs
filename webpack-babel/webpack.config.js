const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'app.js'
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
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        })
      ]


}