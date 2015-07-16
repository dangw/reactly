var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: [
            './app/index.jsx'
        ],
        vendor: [
            'react',
            'react/addons',
            'react-router',
            'reactly'
        ]
    },
    output: {
        path: './dist',
        filename: '[name].js',
        devtoolModuleFilenameTemplate: "file://[absolute-resource-path]",
        devtoolFallbackModuleFilenameTemplate: "file://[absolute-resource-path]?[hash]"
    },
    module: {
        loaders: [
            {
                test: /\.html/,
                loader: 'file?name=[name].[ext]'
            },
            {
                test: /(\.jsx$|\.js$)/,
                loader: 'jsx'
            },
            {
                test: /(\.jsx$|\.js$)/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /node_modules(\/|\\)reactly(\/|\\).*\.js$/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new ExtractTextPlugin("[name].css"),
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js")
    ]
};
