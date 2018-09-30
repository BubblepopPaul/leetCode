/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const reg = /^[0-9]+$/;
    const sa = str.split('');
    const numA = [];
    for (let i = 0; i < sa.length; i++) {
        if (numA.length === 0){
            if (sa[i] === ' ') {
                continue;
            }
            if (sa[i] === '-' || sa[i] === '+') {
                numA.push(sa[i]);
                continue;
            }
            if (!reg.test(sa[i])) {
                return 0;
            }
        }
        if(reg.test(sa[i])) {
            numA.push(sa[i]);
        } else {
            break;
        }
    }
    if (numA.length === 0 || (numA.length === 1 && !reg.test(numA[0]))) {
        return 0;
    }
    const num = parseInt(numA.join(''), 10);
    if (num < -Math.pow(2, 31)) {
        return -Math.pow(2, 31);
    }
    if (num >= Math.pow(2, 31)) {
        return Math.pow(2, 31) - 1;
    }
    return num;

};

const input = "2147483648";

console.log(myAtoi(input));