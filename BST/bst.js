//Binary Search Tree.js

/*
  Pre-order:
   Steps:
     1. Start the root node.
     2. Check the value of the current node; if it has a value, record it.
     3. Recursively call the pre-order function on the subtree to the left of the current node.
     4. Recursively call the pre-order function on the subtree to the right of the current node.
*/

/*
  In-order:
    Steps:
      1. Start at the root node
      2. Recursively call the pre-order function on the subtree to the left of the current node
      3. Check the value of the current node; if it has a value; record it.
      4. Recursively call the pre-order function on the subtree to the right of the current node.
*/

/*
  BFS
    - Start at the root
    - Place the root node in a queue
      - If anything in queue - dequeue it
        - if it has a left node enqueue it
        - if it has a right node enqueue it 
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

  // insert(data) {
  //   let n = new Node(data, null, null);
  //   if (this.root == null) {
  //     this.root = n;
  //   } else {
  //     let current = this.root;
  //     let parent;

  //     while (true) {
  //       parent = current;

  //       if (data < current.data) {
  //         current = current.left;

  //       }
  //     }
  //   }
  // }
  preOrderDFS(value) {
    let currentNode = this.root;
    if (currentNode.data === value) {
      return currentNode;
    }
    let crawlTreePreO = (node) => {
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

  inOrderDFS(value) {
    if (!this.root) {
      return;
    }
    let values = [];

    let crawlTreeIO = (node) => {
      if (!node.left && !node.right) {
        values.push(node.data);
        return;
      }

      if (node.left) {
        crawlTreeIO(node.left);
        values.push(node.left.data);
      }

      if (node.right) {
        crawlTreeIO(node.right);
      }
    }
    crawlTreeIO(this.root.left);
  }

  postOrderDFS(value) {
    if (!this.root) { return }
    let values = [];

    let crawlTreePreO = (node) => {
      if (node.data === value) {
        return node;
      }

      if (node.left) {
        crawlTree(node.left);
      }

      if (node.right) {
        crawlTree(node.right);
      }
      values.push(node.data);
    }
  }

  bfSearch() {
    if (!this.root) { return }
    let queue = [];
    let values = [];
    queue.push(this.root);

    while (queue.length > 0) {
      let currentNode = queue.shift();
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
      values.push(currentNode.data);
    }

    return values;
  }

  insertItaritively(node) {
    if (!this.root) {
      this.root = node;
    }
    let currentNode = this.root;

    while (true) {
      if (currentNode.data > node.data) {
        if (currentNode.left) {
          currentNode = currentNode.left
        } else {
          currentNode.left = node;
        }
      } else if (currentNode.data < node.data) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = node;
        }
      }
    }
  }

  insertRecursively(node) {

  }


}


