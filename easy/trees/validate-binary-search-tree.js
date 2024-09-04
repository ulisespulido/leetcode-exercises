/**
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 * A valid BST is defined as follows:
 *  The left subtree of a node contains only nodes with keys less than the node's key.
 *  The right subtree of a node contains only nodes with keys greater than the node's key.
 *  Both the left and right subtrees must also be binary search trees.
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
 * @return {boolean}
 */
var isValidBST = function(root) {
    if (root === null) return true;
    let array = [];
    inorder(array, root);
    for (let i = 1; i < array.length; i++) {
        let isInOrder = array[i - 1] < array[i];
        if (!isInOrder) {
            return false;
        }
    }
    return true;
};

const inorder = (array, node) => {
    if(node.left) {
        inorder(array, node.left);
    }
    array.push(node.val);
    if (node.right) {
        inorder(array, node.right)
    }
}

// O(2n) as we traverse the whole tree and then the array to validate if it is ordered as expected.
// O(n*n) as we are traversing recursively plus the need of an array datastructure to hold the values 


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
 * @return {boolean}
 */
var isValidBST = function(root) {
    return isValid(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

const isValid = (node, left, right) => {
    if (node === null) return true;
    
    if (node.val <= left || node.val >= right) {
        return false;
    }
    
    return (isValid(node.left, left, node.val) && isValid(node.right, node.val, right));
}

// O(n) time as we are traversing the tree
// O(n) space as we are adding to the stack but not using a new data structure.