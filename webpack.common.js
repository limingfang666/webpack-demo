const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV != "production"
const path = require('path');

module.exports = {
    entry: './src/index.js',
    devServer: {
        static: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,  // 可以打包后缀为sass/scss/css的文件
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // 指定一个 publicPath,默认使用 webpackOptions.output中的publicPath
                            // publicPath的配置，和plugins中设置的filename和chunkFilename的名字有关
                            // 如果打包后，background属性中的图片显示不出来，请检查publicPath的配置是否有误
                            // publicPath: './src',
                            publicPath: devMode ? './src' : './src',   // 根据不同环境指定不同的publicPath
                        },
                    },
                    'css-loader',
                    // 'sass-loader'
                ],
            },
        ]
    },
    plugins: [
        // 创建了一个全新的html文件，所有的 bundle 都自动添加到其中。
        new HtmlWebpackPlugin({
            title: 'development'
        }),
        // css代码分离
        new MiniCssExtractPlugin({
            // 这里的配置和webpackOptions.output中的配置相似
            // 即可以通过在名字前加路径，来决定打包后的文件存在的路径
            filename: devMode ? 'css/[name].css' : 'css/[name].[hash].css',
            chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[hash].css',
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // 每次构建前清理 /dist 文件夹
        clean: true,
    },
    optimization: {
        // 进行代码分离
        splitChunks: {
            chunks: 'all',
        },
    }
}