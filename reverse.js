/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reverseNum;
    if (x < 0) {
        reverseNum = parseInt(`-${x.toString().split('').slice(1).reverse().join('')}`, 10);
    } else {
        reverseNum = parseInt(x.toString().split('').reverse().join(''), 10);
    }
    if (reverseNum < -Math.pow(2, 31) || reverseNum >= Math.pow(2, 31)) {
        return 0;
    }
    return reverseNum;
};

const input = 123;

console.log(reverse(input));