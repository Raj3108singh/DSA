/**
 * A stack is a linear data structure that follows the principle of Last In First Out (LIFO).
 * It means last element inserted will be removed first.
 * In stack we insert/remove from the same side then only it becomes lifo.
 * Stacks can be implemented using arrays or Linked list .
 * With Arrays we use push/pop to add and remove elements also we can use unshift/shift to add and remove data.
 * TC Big O(1) if we use array with push pop else O(N) if we use shift/unshift;
 */

class Stack {
  constructor() {
    this.item = [];
    this.size = 0;
  }

  push(val) {
    this.item.push(val);
    this.size++;
  }
  pop() {
    if (this.size === 0) return 'Stack is empty';
    this.size--;
    return this.item.pop();
  }
  peek() {
    return this.item[this.size - 1];
  }
  isEmpty() {
    return this.size === 0 ? 'yes' : 'No';
  }
}
