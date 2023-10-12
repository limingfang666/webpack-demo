import _ from 'lodash';
import "./another-module.js"
import "./style.css";

function component() {
  const element = document.createElement('div');
  const btn = document.createElement("button");

  element.innerHTML = _.join(['Hello', 'webpack-dev-server'], ' ');
  element.classList.add("box");
  btn.innerHTML = 'Click me and check the Console!';
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());