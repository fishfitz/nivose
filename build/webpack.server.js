const path = require('path');
const { VueSSRServerPlugin } = require('vue-ssr-webpack-plugin');

module.exports = {
    watch: process.env.NODE_ENV === 'development',
    target: 'node',
    entry: path.join(__dirname, '../client/index.js'),
    output: {
        filename: 'bundle.js',
        publicPath: '/',
        path: path.join(__dirname, '../server/client'),
        libraryTarget: 'commonjs2'
    },
    resolve: {
        alias: {
            'request-api': './request-api-server.js',
            'vue-masonry': './ignore-plugin.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                loader: 'ignore-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'ignore-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                loader: 'ignore-loader'
            }
        ]
    },
    plugins: [
        new VueSSRServerPlugin({
            filename: 'bundle.json'
        })
    ],
    externals: Object.keys(require('../package.json').dependencies)
};
