/**
 * Given an integer array nums, find the subarray with the largest sum, and return its sum.
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSub = nums[0];
    let currSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (currSum < 0) {
            currSum = 0;
        }
        currSum += nums[i];
        maxSub = Math.max(maxSub, currSum);
    }
    return maxSub;
};

// O(n) time as we are traversing the array once.
// O(1) space as we are not creating a new data structure.