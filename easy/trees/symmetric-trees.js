
/**
 * Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
 * Follow up: Could you solve it both recursively and iteratively?
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
var isSymmetric = function(root) {
    if (root === null) return true;
    
    return evaluate(root.left, root.right);
};

const evaluate = (nodeLeft, nodeRight) => {
    if (nodeLeft === null || nodeRight === null) {
        return nodeLeft === null && nodeRight === null;
    }
    if (nodeLeft.val != nodeRight.val) return false;
    
    return evaluate(nodeLeft.left, nodeRight.right) && evaluate(nodeLeft.right, nodeRight.left);
}


// O(n) time as we are traversing the whole tree
// O(n) space as we are add calls to the stack using recursion.



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
var isSymmetric = function(root) {
    if (root === null) return true;
    let q1 = [root.left];
    let q2 = [root.right];
    while(q1.length) {
        let n1 = q1.shift();
        let n2 = q2.shift();
        
        if (n1 === null && n2 != null) return false;
        if (n2 === null && n1 != null) return false;
        if (n2 === null && n1 === null) continue;
        if (n1.val != n2.val) return false;
        
        q1.push(n1.left);
        q1.push(n1.right);
        q2.push(n2.right);
        q2.push(n2.left);
    }
    return true;    
};

// O(n) time as we are traversing the tree
// O(n) space as we make use of data structures to hold the nodes.