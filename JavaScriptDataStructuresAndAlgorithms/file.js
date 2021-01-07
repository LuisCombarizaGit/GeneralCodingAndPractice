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

// class PriorityQueue {
//   constructor() {
//     let collection = [];

//     this.printCollection = () => {
//       console.log(collection);
//     };

//     this.enqueue = function (element) {
//       if (this.isEmpty()) {
//         collection.push(element);
//       } else {
//         let added = false;
//         for (let i = 0; i < collection.length; i++) {
//           // index 1 is the priority of the item added to que queue
//           if (element[1] < collection[i][1]) {
//             collection.splice(i, 0, element);
//             added = true;
//             break;
//           }
//         }
//         if (!added) {
//           collection.push(element);
//         }
//       }
//     };

//     this.dequeue = function () {
//       var value = collection.shift();

//       // Return the item without the priority
//       return value[0];
//     };

//     this.front = function () {
//       return collection[0];
//     };

//     this.size = function () {
//       return collection.length;
//     };

//     this.isEmpty = function () {
//       return collection.length === 0;
//     };
//   }
// }

// let pq = new PriorityQueue();
// pq.enqueue(["Beau Carner", 2]);
// pq.enqueue(["Beau EEE", 3]);
// pq.enqueue(["Beau WWW", 6]);
// pq.enqueue(["Beau WRRW", 1]);
// pq.enqueue(["Beau WRTTW", 1]);

// pq.printCollection();

// ----------------------------------------------------------------//
// --------------------- BINARY SEARCH TREE -----------------------//
// ----------------------------------------------------------------//
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }
  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }
  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  remove(data) {
    const removeNode = function (node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        // node has no children
        if (node.left == null && node.right == null) {
          return null;
        }
        // node has no left child
        if (node.left == null) {
          return node.right;
        }
        // node has no right child
        if (node.right == null) {
          return node.left;
        }
        // node has two children
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }
  isBalanced() {
    return this.findMinHeight() >= this.findMaxHeight() - 1;
  }
  findMinHeight(node = this.root) {
    if (node == null) {
      return -1;
    }
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }
  findMaxHeight(node = this.root) {
    if (node == null) {
      return -1;
    }
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }
  inOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    }
  }
  preOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePreOrder(node) {
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      }
      traversePreOrder(this.root);
      return result;
    }
  }
  postOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePostOrder(node) {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      }
      traversePostOrder(this.root);
      return result;
    }
  }

  levelOrder() {
    let result = [];
    let Q = [];
    if (this.root != null) {
      Q.push(this.root);
      while (Q.length > 0) {
        let node = Q.shift();
        result.push(node.data);
        if (node.left != null) {
          Q.push(node.left);
        }
        if (node.right != null) {
          Q.push(node.right);
        }
      }
      return result;
    } else {
      return null;
    }
  }
}

const bst = new BST();

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);

console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
bst.add(10);
console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
console.log("inOrder: " + bst.inOrder());
console.log("preOrder: " + bst.preOrder());
console.log("postOrder: " + bst.postOrder());

console.log("levelOrder: " + bst.levelOrder());
