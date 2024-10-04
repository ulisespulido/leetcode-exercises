/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if (n === 0) return [];
    
    let stack = [];
    let combinations = [];
    
    const backtrack = (openN, closedN) => {
        if (openN === n && closedN === n) {
            combinations.push(stack.join(""));
        }
        
        if (openN < n) {
            stack.push('(');
            backtrack(openN + 1, closedN);
            stack.pop();
        }
        
        if (closedN < openN) {
            stack.push(')');
            backtrack(openN, closedN + 1);
            stack.pop();
        }
    }
    
    backtrack(0, 0);

    return combinations;
};