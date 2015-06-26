var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: {
        app: [
            './app/index.jsx'
        ],
        vendor: [
            'react',
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
                loader: 'jsx?insertPragma=React.DOM&harmony'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js")
    ]
};
