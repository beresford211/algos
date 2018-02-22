// Given roots of two binary trees, determine if these trees are identical or not.
// Identical trees have the same layout and data at each node.
// Consider the following two identical binary trees having the same layout and same data.

class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function areTwoTreesIdentical(root1, root2) {
  let queue = [root1, root2];
  let identicalSoFar = true;
  let node1;
  let node2;


  while (identicalSoFar && stack.length > 0) {
    node1 = stack.shift() || null;
    node2 = stack.shift() || null;

    // let checkForOneNullNode = (node1 === null || node2 === null) && node2 !== node1

    if ((node1 === null || node2 === null) && node2 !== node1) {
      identicalSoFar = false;
      break;
    }

    if (node1.value !== node2.value) {
      identicalSoFar = false;
      break;
    }


    if (node1.left && node2.left) {
      queue.push(node1.left);
      queue.push(node2.left);
    } else if ((node1.left === null && node2.left) || (node1.left && node2.left === null)) {
      identicalSoFar = false;
      break;
    }

    if (node1.right && node2.right) {
      queue.push(node1.right);
      queue.push(node2.right);
    } else if ((node1.right === null && node2.right) || (node1.right && node2.right === null)) {
      identicalSoFar = false;
      break;
    }
  }
  return indenticalSoFar
}