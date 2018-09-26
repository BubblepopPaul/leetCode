/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
    let minLength = 0;
    let b = 0;
    let e = 0;
    let sum = 0;
    while (b < nums.length) {
        e = b;
        sum = 0;
        while (sum < s && e < nums.length) {
            sum += nums[e];
            e++;
        }
        if (sum >= s) {
            if (minLength === 0) {
                minLength = e - b;
            } else {
                minLength =  e - b < minLength ? e - b : minLength;
            }
        }
        b++;
    }
    return minLength;

};


const s = 15;

const arr =
    [123];

console.log(minSubArrayLen(s, arr));