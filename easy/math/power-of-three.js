/**
 * Given an integer n, return true if it is a power of three. Otherwise, return false.
 * An integer n is a power of three, if there exists an integer x such that n == 3x.
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n <= 0) return false;
    if (n === 1) return true;
    while(n >= 2) {
        if (n % 3 === 0) n /= 3;
        else return false;
    }
    return true;
};