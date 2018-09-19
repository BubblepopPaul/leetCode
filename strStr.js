/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle.length === 0) return 0;
  if (needle.length > haystack.length) return -1;
  const hArr = haystack.split("");
  const nArr = needle.split("");
  let firstIndex = hArr.findIndex(e => e === nArr[0]);
  if (firstIndex === -1) {
    return -1;
  }
  let subH = haystack;
  while (subH.length > 0) {
    if (firstIndex === -1) {
      return -1;
    }
    if (needle === haystack.substr(firstIndex, needle.length)) {
      return firstIndex;
    }
    subH = haystack.substr(firstIndex + 1);
    // console.log(firstIndex);
    firstIndex = hArr.findIndex((e, index) => e === nArr[0] && index > firstIndex);
  }
  return -1;
};

const h = 'hh';
const n = 'hhhhhhh';

console.log(strStr(h,n));