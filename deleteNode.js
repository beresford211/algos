/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
let deleteNode = function (node) {
  if (!node.next) {
    return;
  }
  let nextVal = node.next.val;
  let nextNext = node.next.next;
  node.next = nextNext;
  node.val = nextVal;
};