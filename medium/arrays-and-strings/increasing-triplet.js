/**
 * Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let small = Number.MAX_VALUE;
    let secondSmall = Number.MAX_VALUE;
    for (const num of nums) {
        if (num <= small) {
            small = num;
        } else if (num <= secondSmall) {
            secondSmall = num;
        } else {
            return true;
        }
    }
    return false; 
};