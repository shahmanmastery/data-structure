// Stack Class from stack.js
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
}

// Queue Class from queue.js
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  // dequeue function
  dequeue() {
    // removing element from the queue
    // returns underflow when called
    // on empty queue
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }
  // front function
  front() {
    // returns the Front element of
    // the queue without removing it.
    if (this.isEmpty()) return "No elements in Queue";
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

// ============ reverseQueue function =============

// const reverseQueue = queue => {
//   const stack = new Stack();
//   const queueReverse = new Queue();
//   while (!queue.isEmpty()) {
//     stack.push(queue.dequeue());
//   }
//   while (!stack.isEmpty()) {
//     queueReverse.enqueue(stack.pop());
//   }
//   return queueReverse;
// };

// // new queue
// const queue = new Queue();
// for (let i = 1; i <= 10; i++) {
//   queue.enqueue(i);
// }

// const queueReverse = reverseQueue(queue);
// console.log(queueReverse);

// ============ reverseFirstK function =============

const reverseFirstK = (queue, k) => {
  const stack = new Stack();
  const queueReverse = new Queue();
  for (let i = 1; i <= k; i++) {
    stack.push(queue.dequeue());
  }
  while (!stack.isEmpty()) {
    queueReverse.enqueue(stack.pop());
  }
  while (!queue.isEmpty()) {
    queueReverse.enqueue(queue.dequeue());
  }

  return queueReverse;
};

// new queue
const queue = new Queue();
for (let i = 1; i <= 10; i++) {
  queue.enqueue(i);
}

const queueReverse = reverseFirstK(queue, 5);
console.log(queueReverse);
