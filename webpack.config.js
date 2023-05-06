const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPugPlugin = require('html-webpack-pug-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: "./index.js",

    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'img/[name][ext]'
    },
    
    devServer: {
        port: 8080
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: "./main/pages/index.pug",
            filename: "index.html",
            minify: false
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new HTMLWebpackPugPlugin()
    ],
 module: {
     rules:
     [
         {
             test: /\.scss$/,
             use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
         },
         {
             test: /\.(png|jpg|svg|gif)$/,
             type: 'asset/resource'
         },
         {
             test: /\.pug$/,
             loader: 'pug3-loader',
         },
         {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
     ]
 }

}