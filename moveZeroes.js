/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            k++;
            i--;
        }
    }
    console.log(nums);
    for (let i = 0; i < k; i++) {
        nums.push(0);
    }
    console.log(nums);
};

const input = [0,1,0,3,12];

moveZeroes(input);

