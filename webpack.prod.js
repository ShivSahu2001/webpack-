const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

require('dotenv').config({
    path: './.env.prod'
});

// console.log(process.env)

// console.log(process.env.REACT_APP_PUBLIC_API_KEY)

module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'build'),
        clean: true
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            images: path.join(__dirname, 'src/images'),
            // utils: path.join(__dirname, 'src/utils')
            src: path.join(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude:/node_modules/
            },
            {
                test: /\.s?css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpeg|jpg|avif|png|svg)$/,
                loader: 'file-loader'
            }

        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: "react"
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env)
        }),
        new HtmlWebpackPlugin({
            template: './public/template.html'
          }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
          }),
    ],
    optimization: {
        minimizer: [
          
          new CssMinimizerPlugin(),
        ],
      },
    mode: 'production',
    // do only for development purpose only
    devtool: "hidden-source-map",
    // devServer: {
    //     port: 5000,
    //     historyApiFallback: true
    // }
}