const path = require('path')

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'Build') && path.resolve(__dirname, 'Test'),
	},
}
