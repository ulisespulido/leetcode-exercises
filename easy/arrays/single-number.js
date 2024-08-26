/**
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        res = nums[i] ^ res;
    }
    return res;
};

//O(n) time
//O(1) space


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = map[nums[i]] || 0;
        map[nums[i]]++;
    }

    for (key in map) {
        console.log(key);
        if (map[key] === 1) {
            return key
        }
    }

};

// O(2n) time as we are looping twice.
// O(n) space as we are using a separate data structure.