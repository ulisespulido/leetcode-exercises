/** 
 * You are given two non-empty linked lists representing two non-negative integers. 
 * The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode();
    let tail = head;
    let carry = 0;
    while(l1 && l2) {
        let sum = l1.val + l2.val + carry;
        let temp = new ListNode();
        if (sum >= 10) {
            temp.val = sum - 10;
            carry = 1;
        } else {
            temp.val = sum;
            carry = 0;
        }
        tail.next = temp;
        tail = tail.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    while(l1) {
        let sum = l1.val + carry;
        let temp = new ListNode();
        if (sum >= 10) {
            temp.val = sum - 10;
            carry = 1;
        } else {
            temp.val = sum;
            carry = 0;
        }
        tail.next = temp;
        tail = tail.next;
        l1 = l1.next;
    }
    while(l2) {
        let sum = l2.val + carry;
        let temp = new ListNode();
        if (sum >= 10) {
            temp.val = sum - 10;
            carry = 1;
        } else {
            temp.val = sum;
            carry = 0;
        }
        tail.next = temp;
        tail = tail.next;
        l2 = l2.next;
    }
    if (carry == 1) {
        let temp = new ListNode();
        temp.val = 1;
        tail.next = temp;
    }
    return head.next;
};



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode();
    let tail = head;
    let carry = 0;
    while(l1 || l2) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        let temp = new ListNode();
        if (sum >= 10) {
            temp.val = sum - 10;
            carry = 1;
        } else {
            temp.val = sum;
            carry = 0;
        }
        tail.next = temp;
        tail = tail.next;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    
    if (carry == 1) {
        let temp = new ListNode();
        temp.val = 1;
        tail.next = temp;
    }
    return head.next;
};

// O(n) time
// O(n) space