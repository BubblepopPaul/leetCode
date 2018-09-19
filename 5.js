/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 2) {
      return s;
    }
      console.log(s.length);
    const sArr = s.split("");
    let palindrome = sArr[0];
    let sameIndex = sArr.length - 1;
    for (let i = 0; i < sArr.length; i++) {
      sameIndex = sArr.lastIndexOf(sArr[i]);
        if (palindrome.length > sArr.length - i) {
          break;
      }
      while (sameIndex > i) {
        let tempPal = sArr.slice(i, sameIndex + 1);
        if (isPalindProme(tempPal)  && tempPal.length > palindrome.length) {
            palindrome = tempPal.join('');
            break;
        } else {
            sameIndex = sArr.slice(0, sameIndex).lastIndexOf(sArr[i]);
        }
        
      }
    }
    return palindrome;
  };
  
  const isPalindProme = arr => {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
      if (arr[i] !== arr[arr.length - 1 - i]) {
        return false;
      }
    }
    return true;
  };
  
  const str = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
  console.log(longestPalindrome(str));
  
  