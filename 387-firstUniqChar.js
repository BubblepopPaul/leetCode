/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    if (s.length < 1) {
        return -1;
    }
    if (s.length === 1) {
        return 0;
    }
    const sArr = s.split('');
    let same = false;
    for (let i = 0; i < sArr.length; i++) {
        for (let j = 0; j < sArr.length; j++) {
            if (sArr[i] === sArr[j] && i !== j) {
                same = true;
                break;
            }
        }

        if (!same) {
            return i;
        }
        if (same) {
            same = false;
        }
    }
    return -1;
};

const input = '1';

console.log(firstUniqChar(input));