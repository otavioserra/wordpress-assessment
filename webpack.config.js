const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

module.exports = {
	...defaultConfig,
	entry: {
		index: './src/index.js',
		'public-block': './src/public-block.js',
	},
	output: {
		...defaultConfig.output,
		filename: '[name].js',
	},
	module: {
		...defaultConfig.module,
		rules: [
			...defaultConfig.module.rules,
			{
				test: /\.(js|jsx)$/,
				include: [path.resolve(__dirname, 'src')],
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@wordpress/babel-preset-default'],
					},
				},
			},
		],
	},
};
