/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function (fn) {
  const result = {};
  this.forEach((element) => {
    const key = fn(element);
    if (result[key]) {
      result[key].push(element);
    } else {
      result[key] = [element];
    }
  });
  return result;
};
