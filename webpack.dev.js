const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
    // dev环境的配置，记得把mode设置为development模式，否则webpack会默认为production模式。
    mode: "development",
    // 可以将编译后的代码映射回原始源代码,便于追踪 error 和 warning(浏览器中打开生成的 index.html 文件，点击按钮后控制台将会报错)
    devtool: 'inline-source-map',
});