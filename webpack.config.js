const path = require('path')

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'build/@0.1') && path.resolve(__dirname, 'demo'),
	},
}
