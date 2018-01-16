//Swap Nth Node with Head

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(root = null) {
    this.root = root;
    this.tail = null;
  }

  insert(data) {
    if (this.root === null) {
      this.root = new Node(data);
      this.tail = this.root;
    } else {
      let newNode = new Node(data);
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Memory is Constant
  // Runtime is N
  swapNthWithHead(n) {
    if (n === 1) {
      return this.root;
    }

    let rootNode = this.root;
    let rootNext = this.root.next;

    let currNode = this.root;

    let prevNode = this.root;

    while (n > 0) {

      if (n === 1) {
        let temp = currNode.next;
        prevNode.next = rootNode;
        rootNode.next = temp;
        this.root = currNode;
        this.root.next = rootNext;
        --n;
      } else {
        prevNode = currNode;
        currNode = currNode.next;
        --n;
      }
    }
  }

  printLinkedList() {
    let list = [];
    let currNode = this.root;

    while (currNode) {
      list.push(currNode.data);
      currNode = currNode.next;
    }
    console.log("Print the node list", list.join("  ===>  "));
  }
}

let ll = new LinkedList();
ll.insert(1);
ll.insert(2);
ll.insert(3);
ll.insert(4);
ll.printLinkedList();

ll.swapNthWithHead(3);
console.log("UPDATE ANSWER UPDATE ANSWER UPDATE ANSWER UPDATE");
ll.printLinkedList();




