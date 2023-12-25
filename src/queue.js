const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {
  constructor() {
    this.list = null;
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() { 
    return this.head; //возвращает связанный список
  }

  enqueue(value) {          
    let nodeEnqueue = new ListNode(value);
    if (!this.head) {
      this.head = nodeEnqueue;
    }
    if (this.tail) this.tail.next = nodeEnqueue;
    this.tail = nodeEnqueue;
  }

  dequeue() {
    let current = this.head.value;
    this.head = this.head.next;
    return current;
  }
}
const queue = new Queue();
function queueData(){
  queue.enqueue(1);
  queue.enqueue(3);
  queue.enqueue(7);
  queue.enqueue(8);
}
function dequeueData(){
  console.log(queue.dequeue());
} 
// queueData();
// dequeueData();
module.exports = {
  Queue
};
