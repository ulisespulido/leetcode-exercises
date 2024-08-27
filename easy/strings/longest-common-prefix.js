
/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = "";
    for (let i = 0; i < strs[0].length; i++) {
        let prefix = strs[0][i];
        let isCommon = true;
        for (let j = 0; j < strs.length; j++) {
          if (prefix != strs[j][i]) {
            isCommon = false;   
            break;
          }
        }
        if (isCommon) {
            result += prefix;
        } else {
            break;
        }
        
    }
    return result;
};

// O(nxm) time as we need to traverse each char in the string array
// O(1) space as we are not using additional data structures.
