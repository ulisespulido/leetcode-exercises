/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length) return false;
    
    let mapS = {};
    for (let i = 0; i < s.length; i++) {
        mapS[s[i]] = mapS[s[i]] || 0;
        mapS[s[i]]++;
    }
    
    let mapT = {};
    for (let i = 0; i < t.length; i++) {
        mapT[t[i]] = mapT[t[i]] || 0;
        mapT[t[i]]++;
    }
    
    for (let key in mapS) {
        if (mapS[key] != mapT[key]) return false;
    }
    
    return true;
};

// O(2n x m)) time as we need to traverse both maps and at the end compare the keys
// O(n x m) as we need to create two maps for comparison.
