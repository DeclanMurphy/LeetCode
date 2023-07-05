/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
  k %= nums.length;
  const tempArray = nums.slice();
  for (var i = 0; i < nums.length; i++) {
    nums[(i + k) % nums.length] = tempArray[i];
  }
};
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

module.exports = rotate;
