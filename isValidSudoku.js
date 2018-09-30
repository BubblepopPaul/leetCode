/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === '.') continue;
            if (board[i].findIndex((e, index) => e === board[i][j] && index !== j) > -1) {
                return false;
            }
            for (let k = 0; k < board.length; k++) {
                if (k !== i && board[k][j] === board[i][j]) {
                    return false;
                }
            }
            const blockM = 3 * Math.floor(i / 3);
            const blockN = 3 * Math.floor(j / 3);
            for (let k = blockM; k < 3 + blockM; k++) {
                for (let l = blockN; l < 3 + blockN; l++) {
                    if (board[k][l] === board[i][j] && (k !== i || l !== j)) {
                        return false;
                    }
                }
            }
        }
    }
    return true;
};

const input = [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]];

console.log(isValidSudoku(input));