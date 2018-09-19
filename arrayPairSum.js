/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
   const c = nums.sort(compare);
   let result = 0;
   for(let i = 0; i < c.length; i += 2) {
      result += nums[i];
   }
   return result;
};

const compare = (v1, v2) => v1 - v2;

const num = [1,4,3,2];

console.log(arrayPairSum(num));
