/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function (rowIndex) {
    if (rowIndex === 0) {
        return [];
    }
    if (rowIndex === 1) { return [[1]]; }
    const result = [[1]];
    for (let i = 1; i < rowIndex; i++) {
        const line = [];

        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                line.push(1);
            } else {
                line.push(result[i - 1][j - 1] + result[i - 1][j]);
            }
        }
        result.push(line);
    }
    return result[rowIndex - 1];
};

const getNum  = k => {
    const arr = [];
    for (let i = 0; i < k + 1; i++) {

    }
};

const k = 7;

console.log(getRow(29));

