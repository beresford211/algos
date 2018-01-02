function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function (value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};

BinaryTreeNode.prototype.insertRight = function (value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};

class crawlTree {
  constructor(root) {
    this.root = root;
  }

  startCrawl(node) {
    if (!this.root) {
      this.root = node;
    }
    let crawler = function (node, side) {
      if (!node.left && !node.right) {
        return;
      }

      if (side === "left") {
        if (this.root.value > node.value) {
          return;
        }
      }

      if (side === "right") {
        if (this.root.value < node.value) {
          return;
        }
      }

      if (node.left && node.left.value > node.value) {
        return false;
      }

      if (node.right && node.right.value < node.value || node.right.value < this.root.value) {
        return false;
      }

      if (node.left) {
        if (!side) {
          crawler(node.left, "left");
        } else {
          crawler(node.left, side);
        }
      }
      if (node.right) {
        if (!side) {
          crawler(node.right, "right");
        } else {
          crawler(node.right, side);
        }
      }
    }
  }
}