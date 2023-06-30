/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  const reversedFN = functions.reverse();
  return function (x) {
    let result = x;
    reversedFN.forEach((f) => {
      result = f(+result);
    });
    return result;
  };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
