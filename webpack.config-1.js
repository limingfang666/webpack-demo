/**
 * 一些基本loader的使用：图片，html，xml，csv数据等
 */

const path = require('path');
// 通过使用 自定义解析器（parser） 替代特定的 webpack loader，可以将任何 toml、yaml 或 json5 文件作为 JSON 模块导入。
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');

module.exports = {
    mode:'development',
    entry: {
      index: './src/index.js',
      print: './src/print.js',
    },
    output: {
        // filename: 'bundle.js',
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module:{
        rules:[
            {
                test:/\.css$/i,
                // 必须'style-loader' 在前，而 'css-loader' 在后
                use: ['style-loader','css-loader']
            },
            // 处理图片
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              },
            //   处理字体：使用 Asset Modules 可以接收并加载任何文件
              {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
              },
            //   处理CSV、TSV 和 XML三类文件：可以使用 csv-loader 和 xml-loader，JSON文件内置直接可以读取
              {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
              },
              {
                test: /\.xml$/i,
                use: ['xml-loader'],
              },
            //   
            // {
            //     test: /\.toml$/i,
            //     type: 'json',
            //     parser: {
            //       parse: toml.parse,
            //     },
            //   },
            //   {
            //     test: /\.yaml$/i,
            //     type: 'json',
            //     parser: {
            //       parse: yaml.parse,
            //     },
            //   },
            //   {
            //     test: /\.json5$/i,
            //     type: 'json',
            //     parser: {
            //       parse: json5.parse,
            //     },
            //   },
        ]
    }
  };