/**
 * Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
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
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = [];
    if (root === null) return result;
    let queue = [root];
    while(queue.length) {
        let level = [];
        let size = queue.length;
        for(let i = 0; i < size; i++) {
            let node = queue.shift();
            if (node === null) continue;
            level.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        }
        if (level.length) {
            result.push(level);            
        }
    }
    return result;
};

// O(n) time as we need to traverse the whole tree
// O(2n) space as we create a new array structure to hold the return values and a queue to make use of the BFS algorithm. 