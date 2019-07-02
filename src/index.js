import _ from 'lodash';
import print from './print';

import './index.css';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('test');

  print();

  return element;
}

document.body.appendChild(component());
