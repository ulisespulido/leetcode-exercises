/**
 * Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let rows = [];
    let columns = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                rows.push(i);
                columns.push(j);
            }
        }
    }
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[rows[i]][j] = 0;            
        }
    }
    
    for (let i = 0; i < columns.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            matrix[j][columns[i]] = 0;            
        }
    }
    
};