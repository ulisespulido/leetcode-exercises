/**
 * The count-and-say sequence is a sequence of digit strings defined by the recursive formula:
 * countAndSay(1) = "1"
 * countAndSay(n) is the run-length encoding of countAndSay(n - 1).
 */

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n <= 0) return "";
    let temp = "1";    
    while (n > 1) {
        let current = "";
        for (let i = 0; i < temp.length; i++) {
            let count = 1; 
            while (i + 1 < temp.length && temp[i] === temp[i + 1]) {
                count++;
                i++;
            }
            current += "" + count + temp[i];
        }
        temp = current;
        n--;
    }
    return temp;
};