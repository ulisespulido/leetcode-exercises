/**
 * Given an integer array nums of unique elements, return all possible subsets (the power set).
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let results = [];
    
    let subset = [];
    const dfs = (i) => {
        if (i >= nums.length) {
            results.push([...subset]);
            return;
        }
        subset.push(nums[i]);
        dfs(i + 1);

        subset.pop();
        dfs(i + 1);
    }
    dfs(0);
    return results;
};