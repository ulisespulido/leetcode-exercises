/**
 * You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. 
 * The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
 */


/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let i = digits.length - 1;
    while (true) {
        if (i >= 0) {
         let sum = digits[i] + 1;
         if (sum > 9) {
           digits[i] = 0;
          } else {
           digits[i] = sum;
           break;
          }   
          i--;
        } else {
          digits.unshift(1);
          break;
        }
    }
    return digits;
};

// O(2n) time
// O(1) space
// we start at the end and add one value, if the value is bigger than 9 we add one to the next element to the left, we repeat this process until i is >= than 0
// if i is negative it means that we have traversed the whole array and we need to add 1 to the array at the beginning and then we break.


/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let reversed = digits.reverse();
    let i = 0;
    let carry = 0;
    while(i < reversed.length) {
        let sum = reversed[i] + 1;
        console.log(sum);
        if (sum > 9) {
            carry = 1;
            reversed[i] = 0;
        } else {
            carry = 0;
            reversed[i] = sum;
            break;
        }
        i++;
    }

    if (carry === 1) {
        reversed.push(1);
    }

    return reversed.reverse();
};

// O(3n) time
// O(1) space
// we reverse the array and add one, if there is carry over we pass it to the next element, at the end we reverse the reversed array to get the actual number.