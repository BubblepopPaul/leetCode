/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let rightIndex = 1;
    while (rightIndex < numbers.length) {
        for (let i = 0; i < rightIndex; i++) {
            if (numbers[i] + numbers[rightIndex] === target) {
                return [i + 1, rightIndex + 1];
            }
        }
        rightIndex++;
    }
    return [];
};

const nums = [2, 7, 11, 15];
const tar = 9;

console.log(twoSum(nums, tar));