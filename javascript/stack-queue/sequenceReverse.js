class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    // return top most element in the stack
    // and removes it from the stack
    // Underflow if stack is empty
    if (this.items.length == 0) return "Underflow";
    return this.items.pop();
  }
}

// reverse array using stack
const sequenceReverse = arr => {
  const stack = new Stack();
  const l = arr.length;
  for (let n of arr) {
    stack.push(n);
  }
  const reverseArr = [];
  for (let i = 1; i <= 10; i++) {
    reverseArr.push(stack.pop());
  }
  return reverseArr;
};

console.log(sequenceReverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
