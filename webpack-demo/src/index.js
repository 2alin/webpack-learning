import _ from 'lodash';
import './style.css';
import Pic from './pic.png';
import printMe from './print.js'

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hi', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  let myPic = new Image();
  myPic.src = Pic;

  element.appendChild(myPic);

  // Add btn and onclick event
  btn.innerHTML = 'Click me and check console';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
