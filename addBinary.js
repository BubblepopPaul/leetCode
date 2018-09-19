/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const result = [];
  const aArr = a.split("");
  const bArr = b.split("");
  let aIndex = aArr.length;
  let bIndex = bArr.length;
  let equalTwo = false;
  while (aIndex > -1 && bIndex > -1) {
    if (aArr[aIndex] !== bArr[bIndex]) {
      if (equalTwo) {
        result.unshift("0");
      } else {
        result.unshift("1");
      }
    }
    if (aArr[aIndex] === "0" && bArr[bIndex] === "0") {
      if (equalTwo) {
        result.unshift("1");
        equalTwo = false;
      } else {
        result.unshift("0");
      }
    }
    if (aArr[aIndex] === "1" && bArr[bIndex] === "1") {
      if (equalTwo) {
        result.unshift("1");
      } else {
        result.unshift("0");
        equalTwo = true;
      }
    }
    aIndex--;
    bIndex--;
  }
  let restIndex = Math.max(aIndex, bIndex);
  let longStr = aArr.length > bArr.length ? aArr : bArr;
  for (let i = restIndex; i > -1; i--) {
    if (equalTwo) {
      if (longStr[i] === '1') {
        result.unshift('0');
      } else {
        result.unshift('1');
        equalTwo = false;
      }
    } else {
      if (longStr[i] === '1') {
        result.unshift('1');
      } else {
        result.unshift('0');
      }
    }
  }
  if (equalTwo) {
    result.unshift('1');
  }

  return result.join('');
};


const a = '0';
const b = '0';

console.log(addBinary(a, b));