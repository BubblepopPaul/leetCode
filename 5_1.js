/**
 * 中心扩展算法
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 1) return '';
    let start = 0;
    let end = 0;
    for (let i = 0; i < s.length; i++) {
      const sArr = s.split('');
      const len1 = findPalindrome(sArr, i, i);
      const len2 = findPalindrome(sArr, i, i + 1);
      const len = Math.max(len1, len2);
      if (len > end - start) {
          start = i - Math.floor((len - 1) / 2);
          end = i + Math.floor(len / 2);
      }
    }
    return s.substring(start, end + 1);
  };
  
  const findPalindrome = (strArr, left, right) => {
      let l = left;
      let r = right;
      while ( l >= 0 && r <= strArr.length && strArr[l] === strArr[r] ) {
          l--;
          r++;
      }
      return r - l - 1;
  };
  
  const str = "babad"
  console.log(longestPalindrome(str));
  
  