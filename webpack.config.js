const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
  
module.exports = {
    mode:'development',
    entry:'./src/index.js',
    // 多个入口文件
    // entry: {
    //   index: './src/index.js',
      // print: './src/print.js',
    //   another: './src/another-module.js',
    // },
    // 多个入口并防止重复
    // entry:{
    //   index:{
    //     import: './src/index.js',
    //     dependOn: 'shared'
    //   },
    //   another:{
    //     import:'./src/another-module.js',
    //     dependOn:'shared'
    //   },
    //   shared: 'lodash'
    // },
    // 可以将编译后的代码映射回原始源代码,便于追踪 error 和 warning(浏览器中打开生成的 index.html 文件，点击按钮后控制台将会报错)
    devtool: 'inline-source-map',
    devServer:{
      static: '/dist'
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },
    plugins:[
      // 创建了一个全新的html文件，所有的 bundle 都自动添加到其中。
      new HtmlWebpackPlugin({
        title:'webpack配置及优化'
      }),
      // css代码分离
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id]_[name].css'
        
      })
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      // 每次构建前清理 /dist 文件夹
      clean: true,
    },
    // 由于在这个示例中单个 HTML 页面有多个入口，所以添加了 optimization.runtimeChunk: 'single' 配置，否则可能会遇到
    optimization:{
      // runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
      },
    }
  };