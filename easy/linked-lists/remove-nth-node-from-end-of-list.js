/**
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let currentNode = head;
    for (let i = 0; i < n; i++) {
        currentNode = currentNode.next;
    }
    if (currentNode === null) {
        return head.next;
    }
    
    let nodeBeforeHead = head;
    
    while(currentNode.next != null) {
        currentNode = currentNode.next;
        nodeBeforeHead = nodeBeforeHead.next;
    }
    
    nodeBeforeHead.next = nodeBeforeHead.next.next;
    return head;
    
};

// O(n) time as we need to traverse the list
// O(1) space as we are not using additional data structures.