const { merge } = require("webpack-merge");
const common = require("./webpack.common");
// 生成环境下对JS进行压缩
const TerserJSPlugin = require('terser-webpack-plugin');
// 生成环境下对CSS进行压缩
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
    // dev环境的配置，记得把mode设置为development模式，否则webpack会默认为production模式。
    mode: "production",
    devtool: 'source-map',
    optimization: {
        minimizer: [new TerserJSPlugin({}), new CssMinimizerWebpackPlugin({})],
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true,
                },
            }
        },
    }
});