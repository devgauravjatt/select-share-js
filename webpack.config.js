const path = require('path')

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'build/v-0.0.1'),
	},
}
