const path = require("path");
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        // inline: true,
        hot: true,
        // watchStatic: true,
        static: path.join(__dirname, 'src'),
    },
})