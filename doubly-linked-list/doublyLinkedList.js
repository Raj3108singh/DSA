class Node {
  constructor(value) {
    (this.value = value), (this.prev = null);
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return null;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prevOfPoppedNode = poppedNode.prev;
      this.tail = prevOfPoppedNode;
      prevOfPoppedNode.next = null;
      poppedNode.prev = null;
      this.length--;
    }
    return poppedNode;
  }
  shift() {
    if (!this.head) return null;
    let head = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = head.next;
      this.head.prev = null;
      head.next = null;
    }
    this.length--;
    return head;
  }

  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let head = this.head;
      head.prev = newNode;
      newNode.next = head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === this.length - 1) return this.tail;
    if (index === 1) return this.head;
    let length = Math.floor(this.length / 2);
    let currentNode;
    if (index <= length) {
      currentNode = this.head;
      let count = 0;
      while (index !== count) {
        currentNode = currentNode.next;
        count++;
      }
    } else {
      let count = this.length - 1;
      currentNode = this.tail;
      while (index !== count) {
        currentNode = currentNode.prev;
        count--;
      }
    }
    return currentNode;
  }

  set(value, index) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
    } else {
      return false;
    }
    return true;
  }

  insert(value, index) {
    let newNode = new Node(value);
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.newNode = afterNode;
    this.length++;
    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let foundNode = this.get(index);
    prevNode = foundNode.prev;
    nextNode = foundNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.length--;
    return true;
  }
}
