var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");

module.exports = {
    entry: {
        main: './source/scripts/main.js'
    },
    output: {
        filename: './dist/js/[name].js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            // ES6 + Reactjs loader
            {
                test: /(\.js|\.jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: [
                        'react', 'es2015', 'stage-2', 'stage-0'
                    ],
                    plugins: ["react-hot-loader/babel", "transform-class-properties"]
                }
            },
            // styles loader
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            },
            // fonts loader
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?.*$|$)/,
                loader: 'file?name=./dist/fonts/[name].[hash].[ext]&publicPath=../../'
            }
        ]
    },
    plugins: [new ExtractTextPlugin('./dist/styles/[name].css', {allChunks: true})]
};