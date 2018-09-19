/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 0) {
    return [];
  }
  if (numRows === 1) { return [[1]]; }
  const result = [[1]];
  for (let i = 1; i < numRows; i++) {
    const line = [];

    for (let j = 0; j <= i; j++) {
      console.log(`i: ${i}, j: ${j}`);
      if (j === 0 || j === i) {
        line.push(1);
      } else {
        line.push(result[i - 1][j - 1] + result[i - 1][j]);
      }
    }
    result.push(line);
  }
  return result;
};

console.log(generate(1));
