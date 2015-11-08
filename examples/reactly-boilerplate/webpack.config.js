var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: [
            './app/index.jsx'
        ],
        debug: [
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            'react-hot-loader'
        ],
        vendor: [
            'react',
            'react/addons',
            'react-router',
            'reactly'
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: '[name].js'
    },
    module: {
        devtool: 'source-map',
        loaders: [
            {
                test: /\.html/,
                loader: 'file?name=[name].[ext]'
            },
            {
                test: /(\.jsx$|\.js$)/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel']
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js"),
        new ExtractTextPlugin("[name].css")
    ]
};
