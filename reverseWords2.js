/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
    const sArr = s.split(' ');
    for (let i = 0; i < sArr.length; i++) {
        sArr[i] = sArr[i].split('').reverse().join('');
    }
    return sArr.join(' ');
};

const input = 'Let\'s take LeetCode contest';

console.log(reverseWords(input));