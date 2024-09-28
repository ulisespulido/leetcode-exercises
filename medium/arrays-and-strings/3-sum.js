/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let triplets = {};
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break;
        let target = 0 - nums[i];
        let start = i + 1;
        let end = nums.length - 1;
        while (start < end) {
            let sum = nums[start] + nums[end];
            if (target === sum) {
                triplets[`${nums[i]}${nums[start]}${nums[end]}`] = [nums[i], nums[start], nums[end]];                   start++;
                end--;
            } else if (target > sum) {
                start++;
            } else {
                end--;
            }
        }
    }
    let result = [];
    for (triplet in triplets) {
        result.push(triplets[triplet]);
    }
    return result;
};