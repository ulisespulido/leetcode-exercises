/**
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
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
 * @return {ListNode}
 */

var reverseList = function(head) {
    let prev = null;
    while(head) {
        let nextNode = head.next;
        head.next = prev;
        prev = head;
        head = nextNode;
    }
    
    return prev;
    
}

// O(n) time as we traverse the whole linked list
// O(1) space as we are not adding additional data structures.