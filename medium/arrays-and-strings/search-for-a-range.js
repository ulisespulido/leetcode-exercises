/**
 * Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
 * If target is not found in the array, return [-1, -1].
 * You must write an algorithm with O(log n) runtime complexity.
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    let result = [];
    let i = -1;
    while (l <= r) {
        let m = l + Math.trunc((r - l) / 2);
        if (nums[m] === target) {
            r = m - 1;
            i = m;
        } else if (nums[m] < target) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    
    result.push(i);

    i = -1;
    l = 0;
    r = nums.length - 1;
    while (l <= r) {
        let m = l + Math.trunc((r - l) / 2);
        if (nums[m] === target) {
            l = m + 1;
            i = m;
        } else if (nums[m] < target) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    
    result.push(i);
    
    return result;
};