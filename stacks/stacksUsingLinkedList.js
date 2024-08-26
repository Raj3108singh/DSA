class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    let newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let lastNode = this.last;
      newNode.next = lastNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }

  pop() {
    if (this.size === 0) return 'Stack is Empty';
    let poppedNode = this.last;
    if (this.first === this.last) {
      this.first = null;
    }
    this.last = poppedNode.next;
    poppedNode.next = null;
    this.size--;
    return poppedNode;
  }
}

let stack = new Stack();
