/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    const rotateMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        const row = [];
        for (let j = matrix.length - 1; j > -1; j--) {
            row.push(matrix[j][i]);
        }
        rotateMatrix.push(row);
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            matrix[i][j] = rotateMatrix[i][j];
        }
    }
};

const input = [
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16]
];

rotate(input);