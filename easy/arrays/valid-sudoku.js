
/**
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
 * Each row must contain the digits 1-9 without repetition.
 * Each column must contain the digits 1-9 without repetition.
 * Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = {};
    let columns = {};
    let squares = {};
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let num = board[i][j];
            if (num === ".") {
                continue;
            }
            rows[i] = rows[i] || {};
            if (rows[i][num]) {
                return false;
            } else {
                rows[i][num] = true;
            }
            
            columns[j] = columns[j] || {};
            if(columns[j][num]) {
                return false;
            } else {
                columns[j][num] = true;
            }
            let squarePosition = `${Math.floor(i/3)}${Math.floor(j/3)}`;
            squares[squarePosition] = squares[squarePosition] || {};
            if (squares[squarePosition][num]) {
                return false;
            } else {
                squares[squarePosition][num] = true;
            }
        }
    }
    
    return true;
};

// O(9) time
// O(9*9*3) space