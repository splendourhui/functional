/**
* @Author: SplendourHui
* @Date:   2016-05-03 14:42
* @Last modified by:   SplendourHui
* @Last modified time: 2016-05-03 20:20
*/



'use strict';
const functional = require('./functional');

function add(x, y) {
  return x + y;
}

function asyncAdd(x, y) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(x + y), 100);
  });
}

// add = functional.reduce(add);
// asyncAdd = functional.reduce(asyncAdd, true);
// console.log(add(1, 2, 3, 4));
// asyncAdd(1, 2, 3, 4, 5).then(result => console.log(result));

// const debounce = functional.debounce(() => {
//   console.log('debounce test');
// }, 1000);
//
// debounce();
// debounce();

add = functional.multicast(add);
console.log(add([1, 2, 3], 4));
