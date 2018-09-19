/**
 * @param {string}
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length < 1) { return 0; }
  const sArray = s.split('');
  let noRepeatAttr = [];
  let maxLength = 1;
  noRepeatAttr.push(sArray[0]);
  for (let i = 1; i < sArray.length; i++) {
    const repeatIndex = noRepeatAttr.findIndex(e => e === sArray[i]);
    if (repeatIndex === -1) {
      noRepeatAttr.push(sArray[i]);
      continue;
    }
    maxLength = Math.max(maxLength, noRepeatAttr.length);
    noRepeatAttr = noRepeatAttr.slice(repeatIndex + 1);
    noRepeatAttr.push(sArray[i]);
  }
  return Math.max(maxLength, noRepeatAttr.length);
};

const str = 'au';

console.log(lengthOfLongestSubstring(str));