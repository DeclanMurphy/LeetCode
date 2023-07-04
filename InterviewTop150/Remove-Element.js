/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  var left = 0;
  var right = nums.length - 1;
  while (left <= right) {
    if (nums[left] === val) {
      nums[left] = nums[right];
      nums[right] = '_';
      right--;
    } else {
      left++;
    }
  }
  return left;
};

console.log(removeElement([3, 2, 2, 3], 3));
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
