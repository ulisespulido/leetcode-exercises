/**
 * You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:
struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
 * Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.
 */

/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    let queue = root ? [root] : [];
    while(queue.length) {
        let levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            let currNode = queue.shift();
            if (i + 1 < levelSize) {
                currNode.next = queue[0];
            }
            if (currNode.left) {
                queue.push(currNode.left);
            }
            if (currNode.right) {
                queue.push(currNode.right);
            }
        }
    }
    return root;
};

// O(n) time
// O(n) space

/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    let curr = root;
    let next = root ? root.left : null;
    while(curr && next) {
        curr.left.next = curr.right;
        if (curr.next) {
            curr.right.next = curr.next.left;
        }
        curr = curr.next;
        if (!curr) {
            curr = next;
            next = next.left;
        }
    }
    return root;
};

// O(n) time
// O(1) space