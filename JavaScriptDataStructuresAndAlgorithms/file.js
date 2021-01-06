// ------------ JavaScript Data Structure and Algorithms ---------- //

// ----------------------------------------------------------------//
// ------------------------ STACKS --------------------------------//
// ----------------------------------------------------------------//

// LIFO
// functions: push, pop, peek, length

// Stack using a array
// var letters = []; // this is the stakc
// var word = "Racecar";
// var rword = "";

// // Put letters of word into stack
// for (var i = 0; i < word.length; i++) {
//   letters.push(word[i]);
//   console.log(letters);
// }

// // Pop off the stack in reverse order
// for (var i = 0; i < word.length; i++) {
//   rword += letters.pop();
//   console.log(rword);
// }

// console.log(rword);

// if (rword === word) {
//   console.log(word + " is a palindrome.");
// } else {
//   console.log(word + "is not a palindrome.");
// }

// Creating a stack from scratch
// class Stack {
//   constructor() {
//     this.count = 0;
//     this.storage = {};

//     this.push = function (value) {
//       this.storage[this.count] = value;
//       this.count++;
//     };

//     this.pop = function (value) {
//       if (this.count === 0) {
//         return undefined;
//       }
//       this.count--;
//       var result = this.storage[this.count];
//       return result;
//     };

//     this.size = () => {
//       return this.count;
//     };

//     this.peek = () => {
//       return this.storage[this.count - 1];
//     };
//   }
// }

// var myStack = new Stack();

// myStack.push(1);
// myStack.push(2);
// myStack.push(4);
// console.log(myStack.peek());
// console.log(myStack.size());

// ----------------------------------------------------------------//
// ------------------------- SETS ---------------------------------//
// ----------------------------------------------------------------//

// Kind of like an array , but no duplicates and no order.

// class mySet {
//   constructor() {
//     // This var will hold the set
//     var collection = [];

//     // This method will check for the presence of an element and return true or false
//     this.has = function (element) {
//       return collection.indexOf(element) !== -1;
//     };

//     // This method will return all the values in the set
//     this.values = function () {
//       return collection;
//     };

//     // this method will add an element to the set
//     this.add = function (element) {
//       if (!this.has(element)) {
//         collection.push(element);
//         return true;
//       }
//       return false;
//     };
//   }
// }

// ----------------------------------------------------------------//
// ------------------------- QUEUE --------------------------------//
// ----------------------------------------------------------------//

// FIFO
// Functions : enqueue (add to back --- front is index 0 ---)
// Functions : dequeue (remove from front -- index 0 -- shift index )
// Function : print ( print values in the queue)
// Functions : front ( return value at front of queue -- index 0 --)

// class Queue {
//   constructor() {
//     let collection = [];

//     this.print = () => {
//       console.log(collection);
//     };

//     // Items are added at the end of the array ( index 0 is front )
//     this.enqueue = function (element) {
//       collection.push(element);
//     };

//     // Items are removed from the begininng of the array ( index 0 is front)
//     this.dequeue = function () {
//       return collection.shift();
//     };

//     // Return the value at the beginning of the queue ( index 0 )
//     this.front = function () {
//       return collection[0];
//     };

//     // Return the size of the queue
//     this.size = function () {
//       return collection.length;
//     };

//     // Return treu if the queue is empty
//     this.isEmpty = function () {
//       return collection.length === 0;
//     };
//   }
// }

// var q = new Queue();
// q.enqueue("a");
// q.enqueue("b");
// q.enqueue("c");
// q.print();
// q.dequeue();
// console.log(q.front());
// q.print();

class PriorityQueue {
  constructor() {
    let collection = [];

    this.printCollection = () => {
      console.log(collection);
    };

    this.enqueue = function (element) {
      if (this.isEmpty()) {
        collection.push(element);
      } else {
        let added = false;
        for (let i = 0; i < collection.length; i++) {
          // index 1 is the priority of the item added to que queue
          if (element[1] < collection[i][1]) {
            collection.splice(i, 0, element);
            added = true;
            break;
          }
        }
        if (!added) {
          collection.push(element);
        }
      }
    };

    this.dequeue = function () {
      var value = collection.shift();
      return value[0];
    };

    this.front = function () {
      return collection[0];
    };

    this.size = function () {
      return collection.length;
    };

    this.isEmpty = function () {
      return collection.length === 0;
    };
  }
}

let pq = new PriorityQueue();
pq.enqueue(["Beau Carner", 2]);
pq.enqueue(["Beau Carner", 2]);
pq.enqueue(["Beau Carner", 2]);
pq.printCollection();
pq.dequeue();
pq.front();
pq.printCollection();
