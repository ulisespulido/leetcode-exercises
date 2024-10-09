/**
 * Given an integer array nums and an integer k, return the kth largest element in the array.
 * Note that it is the kth largest element in the sorted order, not the kth distinct element.
 * Can you solve it without sorting?
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let start = 0;
    let end = 0;
    while(end < nums.length) {
        while(nums[start] === nums[end]) {
            end++;
        }
        if (end - start === 1) return nums[start];
        start = end;
    }
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    while(start <= end) {
        let mid = start + Math.floor((end - start) / 2);

        if (nums[mid - 1] != nums[mid] && nums[mid] != nums[mid + 1]) return nums[mid];
        
        let leftSize = nums[mid - 1] === nums[mid] ? mid - 1 : mid;
        if (leftSize % 2 === 1) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
};