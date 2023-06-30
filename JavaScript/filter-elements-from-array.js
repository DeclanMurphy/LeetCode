/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  const result = [];
  arr.forEach((e, i) => (fn(e, i) ? result.push(e) : null));
  return result;
};
