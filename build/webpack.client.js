const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    watch: true,
    target: 'web',
    entry: path.join(__dirname, '../client/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '../server/public')
    },
    resolve: {
        alias: {
            'request-api': './request-api-client.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../client/template.html',
            template: path.join(__dirname, '../client/template.html'),
            inject: false
        })
    ]
};
