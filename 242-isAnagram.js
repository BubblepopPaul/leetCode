/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const sArr = s.split('');
    const tArr = t.split('');
    for (let i = 0; i < sArr.length; i++) {
        const tIndex = tArr.findIndex(e => e === sArr[i]);
        if (tIndex > -1) {
            sArr.splice(i, 1);
            tArr.splice(tIndex, 1);
            i--;
        } else {
            return false;
        }
    }
    return sArr.length === tArr.length && tArr.length === 0;

};

const input1 = "anagram";
const input2 = "nagarmm";

console.log(isAnagram(input1, input2));