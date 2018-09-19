/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length < 1) {
    return [];
  }
  const rRange = matrix.length;
  const cRange = matrix[0].length;
  const result = [];
  // right top col index
  let rtj = cRange - 1;
  let rbi = rRange - 1;
  let lbj = 0;
  let lti = 1;
  let i = 0;
  let j = 0;
  while (result.length < rRange * cRange) {
    while (j <= rtj) {
      result.push(matrix[i][j]);
      j++;
    }
    if (result.length === rRange * cRange) { return result; }
    j = rtj;
    i++;
    rtj--;
    while (i <= rbi) {
      result.push(matrix[i][j]);
      i++;
    }
    if (result.length === rRange * cRange) { return result; }
    i = rbi;
    j--;
    rbi--;
    while (j >= lbj) {
      result.push(matrix[i][j]);
      j--;
    }
    if (result.length === rRange * cRange) { return result; }
    j = lbj;
    i--;
    lbj++;
    while (i >= lti) {
      result.push(matrix[i][j]);
      i--;
    }
    if (result.length === rRange * cRange) { return result; }
    i = lti;
    j++;
    lti++;
  }
  return result;
};

const matr = [
    [ 1, 2, 3, 10 ],
    [ 4, 5, 6, 11 ],
    [ 7, 8, 9, 12 ]
   ];

console.log(spiralOrder(matr));