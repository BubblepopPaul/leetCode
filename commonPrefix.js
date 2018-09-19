/**
 *
 * @param {[]} inputStrs
 */
var longestCommonPrefix = inputStrs => {
  if (inputStrs.length === 0) return "";
    if (inputStrs.length === 1) return inputStrs[0];
  const result = [];
  let sIndex = 0;
  let strLength = inputStrs[0];
  for (let i = 0; i < inputStrs.length; i++) {
    sIndex = inputStrs[i].length < strLength ? i : sIndex;
  }
  for (let i = 0; i < inputStrs[sIndex].length; i++) {
    let equal = true;
    for (let j = 0; j < inputStrs.length; j++) {
      // console.log(inputStrs[j]);
      if (inputStrs[j].substr(i, 1) === inputStrs[sIndex].substr(i, 1)) {
        continue;
      } else {
        equal = false;
        break;
      }
    }
    if (equal) {
      result.push(inputStrs[sIndex].substr(i, 1));
    } else {
      return result.join('');
    }
  }
  return result.join('');
};

const strs = ["dog","racecar","car"];

console.log(commonPrefix(strs));
