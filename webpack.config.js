var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");

module.exports = {
	entry: {
		main: './source/scripts/main.js'
	},
	output: {
		filename: './dist/js/[name].js'
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015', 'stage-2'],
					plugins: ["react-hot-loader/babel", "transform-class-properties"]
				}
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('css!sass')
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('dist/styles/[name].css', {
			allChunks: true
		})
	]
};