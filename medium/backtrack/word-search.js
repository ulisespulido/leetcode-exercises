/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const coordinates = {};
    const traverse = (i, j, l) => {
       if (l === word.length) return true;
       if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) return false;
       if (coordinates[`${i}-${j}`]) return false;
       if (board[i][j] != word[l]) return false;

       coordinates[`${i}-${j}`] = true;
        
       const result =  traverse(i - 1, j, l + 1, coordinates) ||
           traverse(i, j + 1, l + 1, coordinates) ||
           traverse(i + 1, j, l + 1, coordinates) ||
           traverse(i, j - 1, l + 1, coordinates);
        
       coordinates[`${i}-${j}`] = false; 

       return result; 
    }
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (traverse(i, j, 0)) {
                return true;
            }
        }
    }
    
    return false;
    
};

