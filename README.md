# webpack
使用webpack手动从头到尾配置vue3项目，主要包括以下配置：

# 1.基本配置 
mode、entry入口文件、output出口、module中配置基本loader等

# 2.升级配置
WebpackDevServer,source-map,optimization.splitChunks代码分离

# 2.loader
基本的loader: style-loader, css-loader, sass-loader,file-loader,url-loader,raw-loader等

# 3.plugins
HtmlWebpackPlugin  创建了一个全新的html文件，所有的 bundle 都自动添加到其中。
MiniCssExtractPlugin css代码分离

# 4.代码分离
entry多入口
多入口去重复 runtimeChunk: 'single'
splitChunks代码分离
去除外部库 lodash等

# 5.环境变量配置
webpack.dev.js 开发环境
webpack.prod.js 生成环境
package.json 
      "scripts": {
        "dev": "set NODE_ENV=development && webpack serve --open --config ./webpack.dev.js --mode=development",
        "prod": "set NODE_ENV=production && webpack serve --open --config ./webpack.prod.js --mode=production"
    },


