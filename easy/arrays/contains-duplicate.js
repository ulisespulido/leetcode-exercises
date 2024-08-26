/**
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (map[num]) {
            return true;
        }
        map[num] = true;
    }
    return false;
};

// O(n) time as we are traversing through the array once.
// O(n) space as we are making use of a map datastructure.
