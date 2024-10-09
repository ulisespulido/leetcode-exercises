/**
 * Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, 
 * with the colors in the order red, white, and blue.
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    if (nums.length < 2) return;
     
     let start = 0;
     let end = nums.length - 1;
     let index = 0;
     while(index <= end) {
         if (nums[index] === 0) {
             nums[index] = nums[start];
             nums[start] = 0;
             index++;
             start++;
         } else if (nums[index] === 2) {
             nums[index] = nums[end];
             nums[end] = 2;
             end--;
         } else {
             index++;
         }
         
     }
 };

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let red = 0;
    let white = 0;
    let blue = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            red++
        } else if (nums[i] === 1) {
            white++;
        } else if (nums[i] === 2) {
            blue++;
        }
    }
    for (let i = 0; i < red; i++) {
        nums[i] = 0;
    }
    for (let i = red; i < red + white; i++) {
        nums[i] = 1;
    }
    for (let i = red + white; i < nums.length; i++) {
        nums[i] = 2;
    }
};