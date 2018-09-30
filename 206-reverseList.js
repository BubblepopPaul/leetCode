/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head || !head.next) { return head; }
    let reverse = null;
    let node = head;
    while (node.next) {
        const tempNode = new ListNode(node.val);
        tempNode.next = reverse;
        reverse = tempNode;
        node = node.next;
    }
    const lastOne = new ListNode(node.val);
    lastOne.next = reverse;
    reverse = lastOne;
    return reverse;
}