// webpack.config.js
const defaultConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = {
    ...defaultConfig,
    entry: {
        'index': './src/index.js',
        'public-block': './src/public-block.js'
    },
    output: {
        ...defaultConfig.output,
        filename: '[name].js'
    },
};