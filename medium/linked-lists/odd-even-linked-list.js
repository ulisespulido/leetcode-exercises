/**
 * Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.
 * The first node is considered odd, and the second node is even, and so on.
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
var oddEvenList = function(head) {
    if (!head) return head;
    let dummy = new ListNode();
    dummy.next = head;
    let dummyEven = new ListNode();
    dummyEven.next = head.next;
    
    let odd = head;
    let even = head.next;
    
    while(odd && odd.next && even && even.next) {
        let tempOdd = odd.next.next;
        let tempEven = even.next.next;
        odd.next = odd.next.next;
        even.next = even.next.next;
        odd = tempOdd;
        even = tempEven;
    }
    odd.next = dummyEven.next;    
    return dummy.next;
    
};