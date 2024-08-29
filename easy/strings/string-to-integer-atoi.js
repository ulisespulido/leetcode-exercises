/**
 * Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.
 * The algorithm for myAtoi(string s) is as follows:
 *   Whitespace: Ignore any leading whitespace (" ").
 *   Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity is neither present.
 *   Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
 *   Rounding: If the integer is out of the 32-bit signed integer range [-2^31, 2^31 - 1], then round the integer to remain in the range. Specifically, integers less than -2^31 should be rounded to -2^31, 
 *             and integers greater than 2^31 - 1 should be rounded to 2^31 - 1.
 */

/**
 * @param {string} s
 * @return {number}
 */
const MAX_INT = Math.pow(2, 31);
const MIN_INT = -Math.pow(2, 31);

var myAtoi = function(s) {
    let result = 0;
    let i = 0;
    let sign = 1;

    // trim whitespace
    while(s[i] === ' ' && i < s.length) {
      i++;
    }
    // change sign if negative.
    if (s[i] === '-') {
      sign = -1;
    }
    // if there is a sign move to the next character.
    if (s[i] === '-' || s[i] === '+') {
      i++
    }
    
    while(/[0-9]/.test(s[i])  && i < s.length) {
        // we would surpass the max value or min value allowed, we should return that one instead as expected by the algorithm
        if (result > Math.trunc(MAX_INT / 10) || (result === Math.trunc(MAX_INT / 10) && parseInt(s[i]) > 7)) {
            return sign === 1 ? MAX_INT - 1 : MIN_INT;
        } 
        result = (result * 10) + parseInt(s[i])
        i++
    }
    
    return sign * result;
    
};