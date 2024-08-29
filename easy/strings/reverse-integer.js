/**
 * Given a signed 32-bit integer x, return x with its digits reversed. 
 * If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reversed = 0;

    while(x != 0) {
        let remainder = x % 10;
        x = Math.trunc(x/10);
        reversed = reversed * 10 + remainder;
    }
    
    if (reversed > Math.pow(2, 31) || reversed < -Math.pow(2, 31)) {
        reversed = 0;
    }
    return reversed;
        
};

// O (n) time depending on the length of the integer
// O (1) space as we are not creating a new datastructure.
