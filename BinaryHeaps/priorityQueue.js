class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  Enqueue(value, priority) {
    let newNode = new Node(value, priority);
    if (this.values.length === 0) {
      this.values.push(newNode);
    } else {
      let idx = this.values.length - 1;
      let element = this.values[idx];
      while (idx > 0) {
        let parentIdx = Math.floor((idx - 1) / 2);
        let parent = this.values[parentIdx];
        if (parent.priority >= element.priority) break;
        [this.values[idx], this.values[parentIdx]] = [this.values[parentIdx], this.values[idx]];
        idx = parentIdx;
      }
    }
  }

  Dequeue() {
    let min = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    let length = this.values.length;
    let element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
      }
      //To be done
      //   (swap === null && )
      // )
    }
  }
}
