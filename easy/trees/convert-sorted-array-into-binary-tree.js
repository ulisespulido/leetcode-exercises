/**
 * Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    const helper = (l, r) => {
        if (l > r) return null;
        let m = Math.trunc((r + l) / 2);
        let root = new TreeNode(nums[m]);
        root.left = helper(l, m - 1);
        root.right = helper(m + 1, r);
        return root;
    }
    return helper(0, nums.length - 1);
  };
  
// O(n) time as we traverse the whole array
// O(n) space as we use a recursive stack method calls.  