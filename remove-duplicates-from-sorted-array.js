/**
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. 
 * The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let left = 0;
    let right = 0;
    while(right < nums.length) {
       if (nums[left] === nums[right]) {
           right++;
       } else {
           left++;
           nums[left] = nums[right];
       }
    }
    return left + 1;
};

// O(n) time as we are only traversing through the array once.
// O(1) space as no new data structures were created