/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {

    for (let i = 0; i < nums.length; i++) {
        if (nums.findIndex((e, index) => e === nums[i] && index !== i) === -1){
            return nums[i];
        }
    }
    return null;
};

const input = [2,2,1];

console.log(singleNumber(input));