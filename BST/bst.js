//Binary Search Tree.js

/*
  Pre-order:
   Steps:
     1. Start the root node.
     2. Check the value of the current node; if it has a value, record it.
     3. Recursively call the pre-order function on the subtree to the left of the current node.
     4. Recursively call the pre-order function on the subtree to the right of the current node.
*/

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
  }

  show() {
    return this.data;
  }
}

class BST {
  constructor() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
  }

  insert(data) {
    let n = new Node(data, null, null);
    if (this.root == null) {
      this.root = n;
    } else {
      let current = this.root;
      let parent;

      while (true) {
        parent = current;

        if (data < current.data) {
          current = current.left;

        }
      }
    }
  }
  preOrder(value) {
    if (this.root.data === value) {
      return this.root;
    }
    let currentNode = this.root;
    let crawlTree = (node) => {
      if (node.data === value) {
        return node;
      }

      if (node.left) {
        crawlTree(node.left);
      }

      if (node.right) {
        crawlTree(node.right);
      }
    }
    if (currentNode.left) {
      crawlTree(currentNode.left);
    }
    if (currentNode.right) {
      crawlTree(currentNode.right);
    }

  }

  postOrder() {

  }

  inOrder() {

  }


}
