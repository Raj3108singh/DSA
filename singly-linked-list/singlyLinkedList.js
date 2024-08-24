/**
 * If Insertion and deletion is frequent we prefer Linked list and if searching opertation is
 * frequent or is priority we use arrays as random access is available in arrays but not in LL.
 *
 */

//This is one way of creating linked list which is very manual.
class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}
let node1 = new Node(10);
node1.next = new Node(20);
node1.next.next = new Node(30);

console.log(node1);

class singlyListList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let tailNode = this.tail;
      tailNode.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  traverse() {
    if (!this.head) return null;
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  pop() {
    if (!this.head) return null;

    let currentNode = this.head;
    let newTail = currentNode;

    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentNode;
  }

  shift() {
    if (!this.head) return null;
    let currentNode = this.head;
    this.head = currentNode.next;
    currentNode.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentNode;
  }

  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let currentHead = this.head;
      newNode.next = currentHead;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index >= this.length || index < 0) return null;
    if (index === 0) return this.head;
    let counter = 0;
    let currentNode = this.head;
    while (counter != index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  set(value, index) {
    if (index > this.length || index < 0) return null;
    let node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }

  insert(value, index) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this.unshift(value);
    // To return Boolean values we can use !! called as Bang Bang. Shown Below
    // if(index === this.length) return !!this.push(value);
    if (index === this.length) return this.push(value);

    let nodeAtGivenIndexMinus1 = this.get(index - 1);
    let nodeAtGivenIndex = nodeAtGivenIndexMinus1.next;
    let newNode = new Node(value);
    nodeAtGivenIndexMinus1.next = newNode;
    newNode.next = nodeAtGivenIndex;
    this.length++;
    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    let foundNodeAtMinusIndex = this.get(index - 1);
    let removingNode = foundNodeAtMinusIndex.next;
    foundNodeAtMinusIndex.next = removingNode.next;
    this.length--;
    removingNode.next = null;
    return removingNode;
  }

  print() {
    let arrayOfNodes = [];
    let currntNode = this.head;

    while (currntNode) {
      arrayOfNodes.push(currntNode.value);
      currntNode = currntNode.next;
    }
    return arrayOfNodes;
  }

  //reverse linked list with inplace
  reverse() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    let prevNode = null,
      nextNode;
    for (let i = 0; i < this.length; i++) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    return this;
  }
}
