/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection. 
 * Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map = {};
    
    for (let i = 0; i < nums1.length; i++) {
        let num = nums1[i];
        map[num] = map[num] + 1 || 1;   
    }
    
    let result = [];
    for (let i = 0; i < nums2.length; i++) {
        let num = nums2[i];
        if (map[num]) {
            result.push(num);
            map[num] = map[num] - 1;
        }
    }
    return result;
};

// O (n) space
// O (n + m) time

// we traverse the first array and add a counter each time we find the same value.
// we take the second array and traverse it, if we find a matching element then we add it to the result and reduce the count.