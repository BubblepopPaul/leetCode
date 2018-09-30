/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function (l1, l2) {
    if (!l1 && !l2) {
        return null;
    }
    let n1 = l1;
    let n2 = l2;
    if (!n1 || !n2) {
        return n1 || n2;
    }
    let link;
    if (n1.val < n2.val) {
        link = new ListNode(n1.val);
        n1 = n1.next;
    } else {
        link = new ListNode(n2.val);
        n2 = n2.next;
    }
    let node;
    while (n1 || n2) {
        if (n1 && n2) {
            if (n1.val > n2.val) {
                node = new ListNode(n2.val);
                n2 = n2.next;
            } else {
                node = new ListNode(n1.val);
                n1 = n1.next;
            }
            node.next = link;
            link = node;
            continue;
        }
        if (n1) {
            node = new ListNode(n1.val);
            n1 = n1.next;
            node.next = link;
            link = node;
            continue;
        }
        if (n2) {
            node = new ListNode(n2.val);
            n2 = n2.next;
            node.next = link;
            link = node;
        }
    }
    if (!link || !link.next) { return link; }
    let reverse = null;
    let nodeR = link;
    while (nodeR.next) {
        const tempNode = new ListNode(nodeR.val);
        tempNode.next = reverse;
        reverse = tempNode;
        nodeR = nodeR.next;
    }
    const lastOne = new ListNode(nodeR.val);
    lastOne.next = reverse;
    reverse = lastOne;
    return reverse;
};


function ListNode(val) {
    this.val = val;
    this.next = null;
}