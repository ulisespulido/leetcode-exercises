/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};
    for (let i = 0; i < strs.length; i++) {
        let bucket = strs[i].split('').sort().join('');
        if (map[bucket]) {
            map[bucket].push(strs[i]);
        } else {
            map[bucket] = [strs[i]];    
        }
        
    }
    let result = [];
    for (key in map) {
        result.push(map[key]);
    }
    return result;
};

// O(nlogn * m)
// O(n)


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};
    
    for (let i = 0; i < strs.length; i++) {
        let freq = new Array(26).fill(0);
        for (let j = 0; j < strs[i].length; j++) {
            let bucket = strs[i][j].charCodeAt(0) - 'a'.charCodeAt(0);
            freq[bucket]++;
        }
        let key = freq.join(',');
        if (map[key]) {
            map[key].push(strs[i]);
        } else [
            map[key] = [strs[i]]
        ]
    }
    let result = [];
    for (key in map) {
        result.push(map[key]);
    }
    return result;
};

//O(n*m) time
//O(n*m) space