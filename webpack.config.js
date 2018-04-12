var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './app.js',
	output: {
		path:__dirname,
		filename: 'bundle.js'
	},
	module:{
		rules: [{
            test: /\.js$/,
            loader: ["babel-loader"],
        }]
	}
}