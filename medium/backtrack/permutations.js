/**
 * Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [];
    
    if (nums.length === 1) {
        return [[...nums]];
    }
    
    for (let i = 0; i < nums.length; i++) {
        let n = nums.shift();
        let perms = permute(nums);
        for (const perm of perms) {
            perm.push(n);
        }
        result.push(...perms);
        nums.push(n);
    }
    
    return result;
    
};