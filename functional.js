/**
* @Author: SplendourHui
* @Date:   2016-05-03 14:41
* @Last modified by:   SplendourHui
* @Last modified time: 2016-05-03 20:18
*/



'use strict';

/**
* 将函数转化为多参数操作的函数
* @async 是否异步函数
*/
exports.reduce = (fn, async) => {
  if (async) {
    return function(...args) {
      return args.reduce((a, b) => {
        return Promise.resolve(a).then((v) => fn.call(this, v, b));
      });
    }
  } else {
    return function(...args) {
      return args.reduce(fn.bind(this));
    }
  }
}

/**
* 限制函数调用的频率
* @wait 限制两次调用之间的间隔
*/
exports.throttle = (fn, wait) => {
  let timer = null;
  return function(...args) {
    if (!timer) {
      timer = setTimeout(() => {
        clearTimeout(timer);
      }, wait);
      return fn.apply(this, args);
    }
  }
}

/**
* 使函数延时一定时间后触发，重复调用会重置计时
* @delay 延时时间
*/
exports.debounce = (fn, delay) => {
  let timer = null;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  }
}

/**
* 使函数支持批量操作
*/
exports.multicast = (fn) => {
  return function(list, ...args) {
    if (Array.isArray(list)) {
      return list.map(item => fn.apply(this, [item, ...args]));
    } else {
      return fn.apply(this, [list, ...args]);
    }
  }
}
