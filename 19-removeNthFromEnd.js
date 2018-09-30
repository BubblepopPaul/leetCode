/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (!head.next) { return null; }
    let node = head;
    let target = head;
    let pre = head;
    let count = 0;
    while (node.next) {
        count++;
        if (count >= n) {
            target = target.next;
        }
        if (count >= n + 1) {
            pre = pre.next;
        }
        node = node.next;
    }
    if (target.next) {
        target.val = target.next.val;
        target.next = target.next.next;
    } else {
        pre.next = null;
    }
    return head;

};