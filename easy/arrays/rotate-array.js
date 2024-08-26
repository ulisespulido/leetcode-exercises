/**
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let l = 0;
    let r = nums.length - 1;
    k = k % nums.length;
    
    // we reverse the whole array.
    reverse(nums, l, r);

    // reverse only from the k'th element to the right
    reverse(nums, 0, k - 1);

    // reverse from the k elementh to the end
    reverse(nums, k, nums.length - 1);
    
};

var reverse = function(nums, l, r) {
    
    while (l < r) {
        let temp = nums[l];
        nums[l] = nums[r];
        nums[r] = temp;
        l++;
        r--;
    }
} 

// O(2n) time as we loop through the array twice.
// O(1) space as we are not using an additional data structure. 