// Seperates generated CSS back into stand-alone file
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
module.exports = {
	entry: {
		app: path.resolve(__dirname, '../src/js/index.js')
	},
	plugins: [
		new ExtractTextPlugin('style.css'),
	],
	module: {
		rules: [
			{
				// Copy images to dist
				test: /\.(png|svg|jpg|gif)$/,
				exclude: /fonts/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'img/[name].[ext]',
							useRelativePath: false,
						}
					}
				]
			},
			{
				// Copy JSON to dist
				test: /\.json$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'json/[name].[ext]',
							useRelativePath: false,
						}
					}
				]
			},
			{
				// Copy fonts to dist
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'font/[name].[ext]',
							useRelativePath: false,
						}
					}
				]
			},
			{
				// Generate SASS and seperate into stand-alone file
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
			{
				// Add babel compiler
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							require.resolve('babel-preset-env'),
							require.resolve('babel-preset-stage-2'),
							require.resolve('babel-preset-react'),
						]
					}
				}
			}
		]
	}


};
