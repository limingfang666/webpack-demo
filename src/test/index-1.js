/**
 * 一些基本loader的使用：图片，html，xml，csv数据等
 */

import _ from 'lodash';
// // css和自定义字体文件
// import './src/style.css'
// // 引入图片
// import Icon from './src/dog.jpg';
// // xml csv文件
// import Data from './src/data.xml';
// import Notes from './src/data.csv';

// 通过使用 自定义解析器（parser） 替代特定的 webpack loader，可以将任何 toml、yaml 或 json5 文件作为 JSON 模块导入。
// import toml from './src/data.toml';
// import yaml from './src/data.yaml';
// import json from './src/data.json5';

// console.log(toml.title); // output `TOML Example`
// console.log(toml.owner.name); // output `Tom Preston-Werner`

// console.log(yaml.title); // output `YAML Example`
// console.log(yaml.owner.name); // output `Tom Preston-Werner`

// console.log(json.title); // output `JSON5 Example`
// console.log(json.owner.name); // output `Tom Preston-Werner`

// 管理输出
// import printMe from './print.js';


function component() {
  const element = document.createElement('div');
  // const btn = document.createElement('button');

  // lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack-config.js--npm script'], ' ');

  // btn.innerHTML = 'Click me and check the console!';
  // btn.onclick = printMe;

  // // 写入样式
  // element.classList.add('hello');

  // // 将图像添加到已经存在的 div 中。
  // const myIcon = new Image();
  // myIcon.src = Icon;

  // element.appendChild(myIcon);
  // element.appendChild(btn);

  // console.log(Data);
  // console.log(Notes);

  return element;
}

document.body.appendChild(component());