/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
  const numChunks = Math.ceil(arr.length / size);
  const result = [];
  for (i = 0; i < numChunks; i++) {
    result.push(arr.slice(i * size, (i + 1) * size));
  }
  return result;
};
