import _ from 'lodash';
import './style.css';
import Pic from './pic.png';

function component() {
  let element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hi', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  let myPic = new Image();
  myPic.src = Pic;

  element.appendChild(myPic);

  return element;
}

document.body.appendChild(component());
