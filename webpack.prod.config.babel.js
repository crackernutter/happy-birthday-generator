import path from 'path';
import webpack from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import merge from 'webpack-merge';
import {default as common} from './webpack.common.config.babel';
import chalk from 'chalk';

console.log(chalk.green('Building app'));

const prodObj = {
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'production',
    devtool: 'none',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
            })
    ],
};
export default merge(common, prodObj);