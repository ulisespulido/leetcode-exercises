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
            columns[j] = columns[j] || {};
            let squarePosition = `${Math.floor(i/3)}${Math.floor(j/3)}`;
            squares[squarePosition] = squares[squarePosition] || {};
            
            if (rows[i][num] || columns[j][num] || squares[squarePosition][num]) {
                return false;
            } 
            rows[i][num] = true;
            columns[j][num] = true;
            squares[squarePosition][num] = true;
        }
    }
    
    return true;
};