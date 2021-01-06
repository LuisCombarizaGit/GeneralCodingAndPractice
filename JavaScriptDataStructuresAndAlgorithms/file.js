// ------------ JavaScript Data Structure and Algorithms ---------- //

// ----------------------------------------------------------------//
// ------------------------ STACKS --------------------------------//
// ----------------------------------------------------------------//

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

class mySet {
  constructor() {
    // This var will hold the set
    var collection = [];

    // This method will check for the presence of an element and return true or false
    this.has = function (element) {
      return collection.indexOf(element) !== -1;
    };

    // This method will return all the values in the set
    this.values = function () {
      return collection;
    };

    // this method will add an element to the set
    this.add = function (element) {
      if (!this.has(element)) {
        collection.push(element);
        return true;
      }
      return false;
    };
  }
}
