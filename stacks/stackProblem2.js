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

function parenthesisMatching(exp) {
  let stack = new Stack();
  for (let i = 0; i < exp.length; i++) {
    let character = exp[i];
    if (character === '(' || character === '{' || character === '[') {
      stack.push(character);
    } else {
      if (character === ')' || character === '}' || character === ']') {
        let popValue = stack.pop();
        if (popValue === 'Empty value') {
          return 'Invalid expression';
        }
        switch (character) {
          case ']':
            if (popValue !== '[') return `Invalid expression ${character} closing not matching`;
            else break;
          case '}':
            if (popValue !== '{') return `Invalid expression ${character} closing not matching`;
            else break;
          case ')':
            if (popValue !== '(') return `Invalid expression ${character} closing not matching`;
            else break;
        }
      }
    }
  }
  return 'Valid Expression';
}

parenthesisMatching('{([a+b]*[c-d])/e}'); // returns Valid Expression

parenthesisMatching('{([a+b)*[c-d])/e}'); // returns Invalid Expression
