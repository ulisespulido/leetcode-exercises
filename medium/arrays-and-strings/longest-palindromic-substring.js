/**
 * Given a string s, return the longest palindromic substring in s.
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let max = 0;
    let result = "";
    for (let i = 0; i < s.length; i++) {
        let r = i;
        let l = i;
        while(l >= 0 && r < s.length && s[l] === s[r]) {
            if (max < (r - l + 1)) {
                max = r - l + 1;
                result = s.substring(l, r + 1);
            }
            l--;
            r++;
        }
        r = i + 1;
        l = i;
        while(l >= 0 && r < s.length && s[l] === s[r]) {
            if (max < (r - l + 1)) {
                max = r - l + 1;
                result = s.substring(l, r + 1);
            }
            l--;
            r++;
        }
    }
    return result;
};