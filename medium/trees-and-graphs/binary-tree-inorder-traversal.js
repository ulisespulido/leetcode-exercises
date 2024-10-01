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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let result = [];
    traverse(result, root);
    return result;
};

const traverse = (array, root) => {
    if (root == null) return;
    traverse(array, root.left);
    array.push(root.val);
    traverse(array, root.right)
}

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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let result = [];
    let stack = [];
    let curr = root;
    while (curr || stack.length)  {
        while(curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        result.push(curr.val);
        curr = curr.right;
    }
    return result;
};