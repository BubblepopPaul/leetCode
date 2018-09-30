/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n === 1) {
        return '1';
    }
    const last = countAndSay(n - 1).split('');
    const result = [];
    for (let i = 0; i < last.length; i++) {
        let count = 0;
        for (let j = i; j < last.length && last[j] === last[i]; j++) {
            count++;
        }
        result.push(count.toString());
        result.push(last[i]);
        i += count - 1;
    }
    return result.join('');
};

const input = 30;

console.log(countAndSay(input));

