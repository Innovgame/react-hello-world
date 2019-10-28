var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var APP_DIR = path.resolve(__dirname, 'src')
var BUILD_DIR = path.resolve(__dirname, 'dist')

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: {
                    loader: 'style-loader! css-loader'
                }
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    devServer: {
        port: 3000,
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: true,
            sourceMap: true,
            chunksSortMode: 'dependency'
        }),
    ]
}

module.exports = config