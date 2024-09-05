/**
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 * There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 
 * Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let h = head;
    let t = head;
    while(h && h.next) {
        h = h.next.next;
        t = t.next;
        if (h === t) {
            return true;
        }
    }
    return false;
};

// O(n) time as we need to traverse the linked list
// O(1) space as we are not creating a new data structure.