/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let output = new Array(nums.length).fill(1);
    let prefix = 1;
    for (let i = 0; i < nums.length - 1; i++) {
        prefix = prefix * nums[i];
        output[i + 1] = prefix;
    }
    let postfix = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        postfix = postfix * nums[i];
        output[i - 1] = postfix * output[i - 1];
    }
    return output;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let output = new Array(nums.length).fill(1);
    let prefix = 1;
    for (let i = 0; i < nums.length; i++) {
        output[i] *= prefix;
        prefix = prefix * nums[i];
    }
    let postfix = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] = postfix * output[i];
        postfix = postfix * nums[i];
    }
    return output;
};