
/**
 * You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
 * You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
 * DO NOT allocate another 2D matrix and do the rotation.
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let size = matrix.length;
    for (let i = 0; i < size; i++) {
        for (let j = i; j < size; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < (size / 2); j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][size - 1 - j];
            matrix[i][size -1 - j] = temp;
        }
    }
    
};

// O(nxm) time
// O(1) space