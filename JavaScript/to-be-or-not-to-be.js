/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  const originalValue = val;
  return {
    toBe: (val) => {
      if (val !== originalValue) {
        throw new Error('Not Equal');
      }
      return true;
    },
    notToBe: (val) => {
      if (val === originalValue) {
        throw new Error('Equal');
      }
      return true;
    },
  };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
