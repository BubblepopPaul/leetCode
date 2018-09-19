/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function (matrix) {
    if (matrix.length < 1) { return []; }
    const result = [];
    const rowCounts = matrix.length;
    const colCounts = matrix[0].length;
    let i = 0;
    let j = 0;

    while (result.length < rowCounts * colCounts) {
        // go up
        if (i === rowCounts) {
            i--;
            j += 2;
        }
        if (j === -1) {
            j++;
        }
        while (i >= 0 && j < colCounts) {
            result.push(matrix[i][j]);
            i--;
            j++;
        }       
        if (result.length > rowCounts * colCounts) {
            break;
        }
        if (j === colCounts) {
            j--;
            i += 2;
        } 
        if (i === -1){
            i++;
        }
        while (j >= 0 && i < rowCounts) {
                result.push(matrix[i][j]);
                i++;
                j--;
            }
    }
    return result;
}