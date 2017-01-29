var path = require('path')
var webpack = require('webpack')

module.exports = {
	devtool: 'eval',
	entry: [
		'./src/app.js'
	],
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	/*devServer: {
		historyApiFallback: true,
		proxy: [{
			path: '/api/!*',
			target: 'http://localhost:3001'
		}]
	},*/
	module: {
		rules: [
			{
				test: /\.json$/,
				use: 'json-loader'
			}
		],
		loaders: [
		    {
		      test: /\.json$/,
		      loader: 'json'
		    },
			{
				test: /\.jsx?/,
				loaders: ['babel'],
				include: path.join(__dirname, 'src')
			}, {
				test: /\.css/,
				loader: 'style-loader!css-loader'
			}
		]
	},
	resolve: {
		alias: {
			'react': path.join(__dirname, 'node_modules', 'react')
		},
		extensions: ['', '.js']
	}/*,

	resolve: {
		extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
	}*/
}