/**
 * A peak element is an element that is strictly greater than its neighbors.
 * Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.
 * You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.
 * You must write an algorithm that runs in O(log n) time.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if (nums.length === 1) {
        return 0;
    }
    if (nums.length === 2) {
        return nums[0] > nums[1] ? 0 : 1;
    }
    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i - 1] < nums[i] && nums[i + 1] < nums[i]) return i;
    }
    
    return nums[0] > nums[nums.length - 1] ? 0 : nums.length - 1; 
};

// O(n) time complexity
// O(1) space

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let l = 0; 
    let r = nums.length - 1;
     while(l <= r) {
         let m = l + Math.trunc((r - l) / 2);
         if (nums[m] < nums[m - 1]) {
             r = m - 1;
         } else if (nums[m] < nums[m + 1]) {
             l = m + 1;
         } else {
             return m;
         }
     }
     return nums[0] > nums[nums.length - 1] ? 0 : nums.length - 1;
 };
 // O(log n) time complexity
 // O(1) space