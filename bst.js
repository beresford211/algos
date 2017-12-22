//Binary Search Tree.js

// preorder
// Visits the root node first
// followed by the nodes in the subtrees - left child of the root node
// followed by the nodes in the subtrees - right child of the root node

// inorder
// postorder

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

}
