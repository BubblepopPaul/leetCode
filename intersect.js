/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let inter = [];
    for (let i = 0; i < nums1.length; i++) {
        const sIndex = nums2.findIndex(e => e === nums1[i]);
        if (sIndex > -1) {
            inter.push(nums1[i]);
            nums1.splice(i, 1);
            nums2.splice(sIndex, 1);
            i--;
        }
    }
    return inter;
};

const input1 = [1, 2, 2, 1];
const input2 = [2, 2];

console.log(intersect(input1, input2));