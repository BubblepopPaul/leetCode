/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s){
    const sa = s.split('');
    const reg = /^[A-Za-z0-9]+$/;
    for (let i = 0; i < sa.length; i++) {
        if (!reg.test(sa[i])){
            sa.splice(i, 1);
            i--;
        }
    }
    for (let i = 0; i < sa.length / 2; i++) {
        if (sa[i] !== sa[sa.length - 1 - i].toLowerCase()
            && sa[i] !== sa[sa.length - 1 - i].toUpperCase()) {
            return false;
        }
    }

    return true;
};

const input = "A man, a plan, a canal: Panama";

console.log(isPalindrome(input));