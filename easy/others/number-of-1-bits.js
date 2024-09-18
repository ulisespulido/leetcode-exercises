/**
 * Write a function that takes the binary representation of a positive integer and returns the number of set bits it has (also known as the Hamming weight).
 */

/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let result = 0;
    while(n) {
        result += n % 2;
        n = n >>> 1;
    }
    return result;
};

