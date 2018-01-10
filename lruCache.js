class lruNode {
  createNode(data, count) {
    this.prev = null;
    this.next = null;
    this.data = data;
    this.timeStamp = + new Date()
  }
}

class lruCache {
  constructor() {
    this.lastUsed = null;
    this.list = null;
    this.maxCount = 5;
    this.hash = {};
  }

  lruCacheAdd(data) {
    if (!this.list) {
      this.hash[data] = data;
      this.list = new lruNode(data, ++this.count);
      this.lastUsed = this.list;
    } else if (this.hash[data]) {
      if (this.lastUsed.data === data) {
        this.lastUsed.timeStamp = +new Date();
        return
      }
      findAndUpdate(data);
    } else if (Object.keys(this.hash) === this.maxCount) {
      let lastNode;
      let currNode = this.list;
      let newHead = currNode.next;
      currNode.next = null;
      newHead.prev = null;

      let newNode = new lruNode(data, + new Date());
      this.hash[data] = data;
      lastNode = this.lastUsed;
      lastNode.next = newNode;
      newNode.prev = lastNode;
      this.lastUsed = newNode;
    } else {
      let lastNode;
      let newNode = new lruNode(data, + new Date());
      this.hash[data] = data;
      lastNode = this.lastUsed;
      lastNode.next = newNode;
      newNode.prev = lastNode;
      this.lastUsed = newNode;
    }
  }

  findAndUpdate(data) {
    let currNode = this.list;
    while (currNode && currNode.data !== data) {
      currNode = currNode.next;
    }

    if (!currNode) {
      throw Error;
    }
    // Get the current Node's prev and next pointers
    let holdNode = this.lastUsed;
    let prevNode = currNode.prev;
    let nextNode = currNode.next;

    // update the prev node's next and the next node's prev
    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    // set up currNode to be the final node
    currNode.next = null;
    currNode.timeStamp = + new Date();
    holdNode.next = currNode;
    this.lastUsed = currNode;
  }

}