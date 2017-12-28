// make a queue with 2 stacks

//
//methods queue
//methods enqueue

// First Implimentation;
class twoStackQ {
  constructor() {
    this.mainStack = [];
    this.subStack = [];
  }
  enqueue(val) {
    this.mainStack.push(val)
  }

  dequeue() {
    let returnVal;
    let temp;

    while (this.mainStack.length > 1) {
      temp = this.mainStack.pop();
      this.subStack.push(temp);
    }
    if (this.mainStack.length === 1) {
      returnVal = this.mainStack.pop();
    }

    while (this.subStack.length > 0) {
      temp = this.subStack.pop();
      this.subStack.push(temp);
    }
  }
}

// Second implimentation
class twoStacks2Queue {
  constructor() {
    this.pushArr = [];
    this.popArr = [];
  }

  enqueue(val) {
    this.pushArr.push(val)
  }

  dequeue() {
    let temp;
    if (this.popArr.length > 0) {
      return this.popArr.pop();
    } else {
      while (this.pushArr.length > 1) {
        temp = this.pushArr.pop();
        this.popArr.push();
      }
      return this.popArr.pop();
    }
  }
}