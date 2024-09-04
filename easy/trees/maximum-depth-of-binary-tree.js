/**
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
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
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) return 0;
    
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
// O(n) time as we traverse the whole tree
// O(n) space as we add recursive calls to the stack.



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
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) return 0;
    let queue = [root];
    let result = 0;
    while(queue.length) {
      let size = queue.length;
      for (let i = 0; i < size; i++) {
        let node = queue.shift();
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);            
        }
      }
      result +=1;
    }
    return result;
};

// O(n*n) time as we are using shift that emulates a queue on an array in javascript and that involves a O(n) operation
// O(n) space as we are using a data structure to hold the tree values.

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
 * @return {number}
 */
var maxDepth = function(root) {
    let result = 0;
    let stack = [[root, 0]];
    while(stack.length) {
        let [node, depth] = stack.pop();
        if (node) {
            stack.push([node.left, depth + 1]);
            stack.push([node.right, depth + 1]);
            result = Math.max(result, depth + 1);
        }
    }
    return result;
};

// O(n) time as we are traversing the tree once, we are using pop which is a O(1) operation in javascript to get the values.
// O(n) space as we are using a stack datastructure to hold the leafs.