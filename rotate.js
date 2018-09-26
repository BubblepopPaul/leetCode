/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let temp;
    for (let i = 0; i < nums.length; i++) {
        temp = nums[(i + k % nums.length) % nums.length];
        nums[(i + k % nums.length) % nums.length] = nums[i];

        i = (i + k % nums.length) % nums.length;

    }
};


