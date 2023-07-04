/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicatesWithSplice = function (nums) {
  var left = nums.length - 2;
  var right = nums.length - 1;
  while (left >= 0) {
    if (nums[left] === nums[right]) {
      nums[left] = nums[right];
      left--;
      right--;
    } else if (nums[left] === nums[left - 1]) {
      nums.splice(left - 1, 1);
      left--;
      right--;
    } else {
      left--;
    }
  }
  return right + 1;
};

var removeDuplicates = function (nums) {
  var left = 0;
  var right = 0;
  while (right < nums.length) {
    if (nums[left] !== nums[right]) {
      nums[++left] = nums[right];
    }
    right++;
    console.log(JSON.stringify(nums), {
      left: `${left}/${nums[left]}`,
      right: `${right}/${nums[right]}`,
    });
  }
  return ++left;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
