/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let left = m - 1;
  let right = n - 1;
  let i = m + n - 1;

  while (i >= 1) {
    const leftV = nums1[left];
    const rightV = nums2[right];
    if (rightV > leftV) {
      nums1[i] = rightV;
      i--;
      right--;
    } else {
      nums1[i] = leftV;
      i--;
      left--;
    }
  }
};

// [1,2,3,0,0,0]
//      L     i
// [2,5,6]
//      R
