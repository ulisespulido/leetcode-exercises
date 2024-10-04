/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let islands = 0;
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === "1") {
                islands++;
                traverse(grid, r, c);
            }
        }
    }
    
    return islands
};

const DIRECTIONS = [
    [-1, 0], // top
    [0, 1], // right
    [1, 0], // bottom
    [0, -1] // left
];

const traverse = (grid, r, c) => {
    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length) {
        return;
    }

    if (grid[r][c] === "0") {
        return;
    }

    grid[r][c] = "0";

    for (let i = 0; i < DIRECTIONS.length; i++) {
        traverse(grid, r + DIRECTIONS[i][0], c + DIRECTIONS[i][1]);
    }

}