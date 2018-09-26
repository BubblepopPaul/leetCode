/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let result = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            result = result < count ? count : result;
            count = 0;
            continue;
        }
        if (nums[i] === 1) {
            count++;
            if (i === nums.length - 1) {
                result = result < count ? count : result;
            }
        }
    }
    return result;
};

const numsArray = [1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1];

console.log(findMaxConsecutiveOnes(numsArray));