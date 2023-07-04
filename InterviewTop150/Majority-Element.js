/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function (nums) {
  const result = {};
  nums.forEach((e) => {
    result[e] = result[e] + 1 || 1;
  });
  let max = null;
  Object.keys(result).forEach((key, index) => {
    max = result[key] > result[max] ? key : max || key;
  });
  return max;
};

var majorityElementAttempt1 = function (nums) {
  const result = new Map([]);
  for (var i = 0; i < nums.length; i++) {
    if (result.has(nums[i])) {
      var a = result.get(nums[i]);
      result.set(nums[i], a + 1);
    } else {
      result.set(nums[i], 1);
    }
  }
  const [key, value] = [...result.entries()].reduce((accumulator, element) => {
    return element[1] > accumulator[1] ? element : accumulator;
  });
  return key;
};

console.log(majorityElement([3, 2, 3]));
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
