var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
    entry: {
        main:__dirname + '/src/js/main.js',
        test: __dirname + '/src/js/test.js',
    },
    output:{
        path:__dirname + '/dist/js',
        filename:'[name]-[chunkhash].js'
    },
    module: {

        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                },
                exclude:path.resolve(__dirname,'/node_modules/') ,
                include:path.resolve(__dirname,'/src/'),
            },
            {

                test:/\.css$/,

                use:['style-loader','css-loader',

                    {

                        loader:'postcss-loader',
                        options:{
                            plugins:[require('postcss-import'),require('autoprefixer')],
                            browser:['last 5 versions']}}]
            },
            {
                test:/\.less$/,use: [

                {loader: "style-loader"},{loader: "css-loader"},{loader: "postcss-loader",options:{

                    plugins:[require('autoprefixer')]       	//自动处理class加前缀，-ms-和-webkit-

                }},{loader: "less-loader"}

                ]
            },
            {
                test:/\.sass$/,
                use: [
                {loader: "style-loader"},{loader: "css-loader"},{loader: "postcss-loader",options:{

                    plugins:[require('autoprefixer')]       	//自动处理class加前缀，-ms-和-webkit-

                }},{loader: "sass-loader"}

                ]
            },
            {

                test:/\.(jpg|png|gif|svg)$/i,

                loaders: [

                    "url-loader?limit=10000&name=assets/[name].[ext]",

                    {

                        loader: 'image-webpack-loader',

                        options: {

                            optipng: { optimizationLevel: 7 },

                        }

                    }

                ]

            }
        ]
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