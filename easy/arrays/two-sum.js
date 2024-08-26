
/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (map[num] != undefined) {
            return [map[num], i];
        } else {
            map[target - num] = i;
        }
    }
};

// O(n) time as we are traversing only once.
// O(n) space as we are creating a map to store the relation of the values.