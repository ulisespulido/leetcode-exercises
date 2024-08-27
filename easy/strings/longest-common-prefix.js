/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let result = "";
  for (let i = 0; i < strs[0].length; i++) {
      let prefix = strs[0][i];
      for (let j = 0; j < strs.length; j++) {
        if (prefix != strs[j][i]) {
          return result;
        }
      }
      result += prefix;        
  }
  return result;
};

// O(nxm) time
// O(1) space
