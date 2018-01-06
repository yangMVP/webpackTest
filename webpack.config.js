var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        main:__dirname + '/src/js/main.js',
        test: __dirname + '/src/js/test.js',
    },
    output:{
        path:__dirname + '/dist/js',
        filename:'[name]-[chunkhash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: false,
            chunks:['main','test'],
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
        }),
        new HtmlWebpackPlugin({
            filename: 'a.html',
            template: 'index.html',
            inject: false,
            chunks:['main'],
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
        }),
    ]
}