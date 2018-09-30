/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    const strArr = str.split(' ');
    const result = [];
    console.log(strArr);
    for (let i = 0; i < strArr.length; i++) {
        console.log(i);
        if (strArr[i] !== '') {
            result.push(strArr[i]);
        }
    }
    return result.reverse().join(' ');
};

const str = '';

console.log(reverseWords(str));