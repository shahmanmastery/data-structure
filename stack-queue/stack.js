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
  peek() {
    const lastIndex = this.items.length - 1;
    return this.items[lastIndex];
  }
  isEmpty() {
    return this.items.length === 0;
  }

  printStack() {
    for (let item of this.items) {
      console.log(item);
    }
  }
}

const stack = new Stack();
stack.push(1); // adds 1 to the end of array
stack.push(2); // adds 2 to the end of array
stack.push(3); // adds 3 to the end of array
stack.printStack();
// output: 1 2 3
const lastItem = stack.peek();
console.log(lastItem); // 3

const isEmpty = stack.isEmpty();
console.log(isEmpty);

stack.pop(); // removes the last item
stack.printStack();
// output: 1 2
