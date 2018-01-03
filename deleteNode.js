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

// Runtime: O(n);
// Space: O(1);

let deleteNodeWithKey = function (head, val) {
  let n = head;
  let nextNext;
  let nextVal;

  if (!n.next) {
    return head;
  }

  while (n !== undefined && n.val !== val) {
    n = n.next;
  }

  if (n !== undefined) {
    let nextVal = n.next.val;
    let nextNext = n.next.next;
    n.next = nextNext;
    n.val = nextVal;
  }
};


// Runtime: O(n);
// Space: O(1);

let deleteNodeWithPreviousKey = function (head, val) {
  let prev = null;
  let curr = head;

  if (!curr.next) {
    return head;
  } else if (head.val === val) {
    return head.next;
  }

  while (curr && curr.val !== val) {
    prev = curr;
    curr = curr.next;
  }

  if (!curr) {
    return head;
  }

  prev.next = curr.next;
  return head;
};