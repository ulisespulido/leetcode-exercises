/**
 * Write a function that reverses a string. The input string is given as an array of characters s.
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for (let i = 0; i < s.length / 2; i++) {
        let temp = s[i];
        s[i] = s[s.length - 1 - i];
        s[s.length - 1 - i] = temp;
    }
};

// O(n/2) time as we need to traverse the array up to the middle point
// O(1) space as we are not adding a new datastructure. 