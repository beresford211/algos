
class Node {
  constructor(data, parent, right, left) {
    this.data = data;
    this.parent = parent;
    this.right = right;
    this.left = left;
    this.show = show;
  }

  show() {
    return this.data;
  }

}


class BST {
  constructor(root) {
    this.root;
    this.insert = insert;
  }

  insert(data) {
    let notPlaced = true;
    let parent;
    let n = new Node(data);

    if (!this.root) {
      this.root = node;
      return;
    }

    let currentNode = this.root;

    while (notPlaced) {
      parent = currentNode;
      if (currentNode.data > n.data) {
        currentNode = currentNode.left;
        if(currentNode === null){
          parentNode.left = n;
          break;
        }
      } else if (currentNode.data < n.data) {
        currentNode = currentNode.right;
        if(currentNode === null) {
          parentNode.right = n;
          break;
        }
      }
    }
  }

  inOrder() {
    


  }

  // inOrder() {

  // }
}





// if the data value in the inserted node < current node
  // set the inserted node to be a left child


  // In-Order: <*root*> <left> <right>
  // Preorder: <left> <*root*> <right>
  // Postorder: <left> <right> <*root*>
