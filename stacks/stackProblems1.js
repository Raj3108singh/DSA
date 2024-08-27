/**
 * Evaluate post fix expression using stacks
 * In Fix ==> 7 * ( 4 * -3)/(1 + 5)
 * post fix ==> 7 4 -3 * 1 5 + / *
 */

//Below example doesn't take neagtive number that needs to be included

class Stack {
  constructor() {
    this.item = [];
    this.size = 0;
  }

  push(value) {
    this.item.push(value);
    this.size++;
  }
  pop() {
    if (this.size === 0) return 'Empty Stack';
    this.size--;
    return this.item.pop();
  }
}

function postFixEvaluator(exp) {
  let stack = new Stack();
  for (let i = 0; i < exp.length; i++) {
    let c = exp[i];
    if (!isNaN(c)) {
      stack.push(+c);
    } else {
      let value1 = stack.pop();
      let value2 = stack.pop();
      if (value1 === 'Empty Stack' || value2 === 'Empty Stack') {
        return 'Inappropriate expression';
      }

      switch (c) {
        case '+':
          stack.push(value2 + value1);
          break;
        case '-':
          stack.push(value2 - value1);
          break;
        case '*':
          stack.push(value2 * value1);
          break;
        case '/':
          stack.push(value2 / value1);
          break;
      }
    }
  }
  return stack.pop();
}

postFixEvaluator('235*+8-');
// result 9
postFixEvaluator('235*+8-');
//1.5
