/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function(nums, k) {
    let temp;
    for (let i = 0; i < k % nums.length; i++) {
        for (let j = 0; j < nums.length - 1; j++) {
            temp = nums[0];
            nums[0] = nums[j + 1];
            nums[j + 1] = temp;
            // console.log(`j: ${nums}`);
        }
        console.log(`i: ${nums}`);
    }
};

const nums = [1, 2, 3, 4, 5, 6];

const k = 4;

rotate(nums, k);
