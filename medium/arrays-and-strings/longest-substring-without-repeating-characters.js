/**
 * Given a string s, find the length of the longest substring without repeating characters.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let set = new Set();
    let start = 0;
    let end = 0;
    while(end < s.length) {
        if (set.has(s[end])) {
            while(set.has(s[end])) {
                set.delete(s[start]);
                start++;
            }
        } else {
            set.add(s[end]);
            end++;
        }
        maxLength = Math.max(maxLength, end - start);
    }
    return maxLength;
};

// O(n) time
// O(n) space