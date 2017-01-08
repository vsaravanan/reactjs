module.exports = {
  entry: './index.js',

  output: {
    /* path: 'public',  */
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    loaders: [
      { test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader",
        query: {
            presets: ["react", "es2015", "stage-2"],
            plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],                    
        }        
        /* loader: 'babel-loader?presets[]=es2015&presets[]=react' */
      }
    ]
  }
}
