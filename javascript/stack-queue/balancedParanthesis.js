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

const isBalanced = str => {
  const opening = ["[", "("];
  //   const matching = [
  //     ["[", "]"],
  //     ["(", ")"]
  //   ];
  const matching = ["[]", "()"];

  console.log(matching);
  const stack = new Stack();
  if (str.length % 2 !== 0) {
    return false;
  }
  for (let b of str) {
    if (opening.includes(b)) {
      stack.push(b);
    } else {
      if (stack.length === 0) {
        return false;
      }
      const last = stack.pop();
      const found = last + b;
      if (!matching.includes(found)) {
        return false;
      }
    }
  }
  return true;
};

console.log(isBalanced("[[([([])])]]"));
