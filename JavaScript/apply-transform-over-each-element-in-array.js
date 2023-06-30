/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  const result = [];
  arr.forEach((e, i) => {
    result.push(fn(e, i));
  });
  return result;
};
