/**
 * Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let h = head;
    let t = head;
    let counter = 0;
    while (h && h.next) {
        h = h.next.next;
        t = t.next;
        counter++;
    }
    
    let prev = null;
    while (head != t) {
        let nextNode = head.next;
        head.next = prev;
        prev = head;
        head = nextNode;
    }
    
    if (h) {
        t = t.next;
    }
    
    while (prev && t) {
        if (prev.val != t.val) {
            return false;
        }
        prev = prev.next;
        t = t.next;
    }
    
    return true;
};

// O(n) time as we need to traverse the linked list
// O(1) space as we are not creating a new data structure.