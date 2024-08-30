/**
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 */


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let n = 0;
    for (let i = 0; i < haystack.length; i++) {
        for (n = 0; n < needle.length; n++) {
            if (haystack[i + n] !== needle[n]) break;
        }
        if (n === needle.length) {
            return i;
        }
    }

    return - 1;
};

// O(n x m) time
// O(1) space