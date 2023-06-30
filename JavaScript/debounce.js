/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
  let scheduledFn;
  return function (...args) {
    clearTimeout(scheduledFn);
    scheduledFn = setTimeout(() => fn(...args), t);
  };
};
