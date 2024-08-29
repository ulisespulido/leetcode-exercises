/**
 * Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = {};
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = map[s[i]] || 0;
        map[s[i]]++;
    }
    
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) {
            return i;
        }
    }
    
    return -1;
    
};

// O(2n) time as we move through the array twice.
// O(n) space as we are creating a data structure to hold the number a letter is repeated.