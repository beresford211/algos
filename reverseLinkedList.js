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

var reverseList = function (head) {
  var current = head;
  var previous = null;
  var nextNode = null;

  // until we have 'fallen off' the end of the list
  while (current) {

    // copy a pointer to the next element
    // before we overwrite current.next
    nextNode = current.next;

    // reverse the 'next' pointer
    current.next = previous;

    // step forward in the list
    previous = current;
    current = nextNode;
  }

  return previous;
};

var reverseListRecursively = function (head) {

  // until we have 'fallen off' the end of the list
  let iterateList = (current, previous, nextNode) => {
    if (!current.next) {
      current.next = previous;
      return current;
    }
    // copy a pointer to the next element
    // before we overwrite current.next
    nextNode = current.next;

    // reverse the 'next' pointer
    current.next = previous;

    // step forward in the list
    previous = current;
    current = nextNode;
  }

  return iterateList(head, previous, nextNode);
};


