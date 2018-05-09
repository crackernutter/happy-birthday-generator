import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';

export default {
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name].[chunkhash].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            //{ test: /\.(png|woff|woff2|eot|gif|ttf|svg)$/, loader: 'url-loader?limit=100000' },
            { test: /\.(png|JPG|gif|jpg)$/, loader: "file-loader", options: {
                name: '[path][name]-[hash:8].[ext]'
            }, }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Code Splitting',
            template: './src/index.html',
            useGzip: true,
            inject: true
        }),
        new CompressionPlugin(
            {
                test: /\.js/,
                cache: false,
                algorithm: 'gzip'
            })
    ]
};