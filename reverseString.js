const reverseString = str => {
  if (str < 2) {
    return str;
  }
  const strArr = str.split('');
  let start = 0;
  let end = strArr.length - 1;
  while (start < end) {
    const temp = strArr[start];
    strArr[start] = strArr[end];
    strArr[end] = temp;
    end--;
    start++;
  }
  return strArr.join('');
}

const str = 'a,feg,feg feg    ';

console.log(reverseString(str));

