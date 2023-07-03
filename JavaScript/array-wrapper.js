/**
 * @param {number[]} nums
 */
class ArrayWrapper {
  constructor(nums) {
    this.nums = nums;
  }
}

ArrayWrapper.prototype.valueOf = function () {
  return this.nums.reduce((result, element) => (result += element), 0);
};

ArrayWrapper.prototype.toString = function () {
  return `[${this.nums.toString()}]`;
};
