/**
 * Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).
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
var zigzagLevelOrder = function(root) {
    if (!root) return [];
    
    let result = [];
    let queue = [root];
    while(queue.length) {
        let currSize = queue.length;
        let levelNodes = [];
        for (let i = 0; i < currSize; i++) {
            let currNode = queue.shift();
            levelNodes.push(currNode.val);
            if (currNode.left) {
                queue.push(currNode.left);
            } 
            if (currNode.right) {
                queue.push(currNode.right);
            }
        }
        if (result.length % 2 === 1) {
            levelNodes = levelNodes.reverse();
        }
        result.push(levelNodes);
    }
    return result;
};