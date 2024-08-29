/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. 
 * Alphanumeric characters include letters and numbers.
 * 
 * Given a string s, return true if it is a palindrome, or false otherwise.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let l = 0;
    let r = s.length - 1;
    while(l < r) {
        while (!isAlphanumeric(s[l].toLowerCase()) && l < r) {
            l++;
        }
        
        while(!isAlphanumeric(s[r].toLowerCase()) && l < r) {
            r--;
        }
        if (s[l].toLowerCase() != s[r].toLowerCase()) {
            return false;
        }
        l++;
        r--;
    }
    return true;
}

const isAlphanumeric = (text) => {
    return /[a-z|0-9]/.test(text);
}

//O(n) time as we traverse the length of the string array once.
//O(1) space as we are not using an additional data structure.
