/**
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let head = new ListNode();
    let curr = head;
    while(list1 && list2) {
      if (list1.val < list2.val) {
        curr.next = new ListNode(list1.val);
        list1 = list1.next;
      } else {
        curr.next = new ListNode(list2.val);
        list2 = list2.next;  
      }
      curr = curr.next;
    }
    while(list1) {
        curr.next = new ListNode(list1.val);
        list1 = list1.next;
        curr = curr.next;
    }
    while(list2) {
        curr.next = new ListNode(list2.val);
        list2 = list2.next;
        curr = curr.next;
    }
    
    return head.next;
};

// O(nxm) time as we traverse the two lists
// O (nxm) space as we are creating new nodes with the values.