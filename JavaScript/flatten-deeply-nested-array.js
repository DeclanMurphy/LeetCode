/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
  const flattened = [];

  const flattenHelper = function (arr, n) {
    for (const e of arr) {
      if (typeof e === 'number' || n === 0) {
        flattened.push(e);
      } else {
        flattenHelper(e, n - 1);
      }
    }
  };

  flattenHelper(arr, n);
  return flattened;
};
