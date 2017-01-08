var fs = require('fs')
var path = require('path')

module.exports = {
	entry: path.resolve(__dirname, 'server.js'),

	output: {
		filename: 'server.bundle.js'
	},

	target: 'node',


  // keep node_module paths out of the bundle
  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
    'react-dom/server', 'react/addons',
  ]).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod
    return ext
  }, {}),

  node: {
    __filename: true,
    __dirname: true
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
	
}

var express = require('express')

var app = express()

app.use(express.static(__dirname))

app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname,  'index.html'))
})

var PORT = process.env.PORT || 9090

app.listen(PORT, function() {
	console.log('Production express server running at port : ' + PORT);
})
