/**
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1) return n;
      
    let first = 1;
    let second = 1;
    let steps = 1;
    while(steps < n) {
        let temp = first;
        first = first + second;
        second = temp;
        steps++;
    }
    return first;
  };

  // O(n) time as we need to traverse up to n
  // O(1) space as we are not creating new data structures for the solution.