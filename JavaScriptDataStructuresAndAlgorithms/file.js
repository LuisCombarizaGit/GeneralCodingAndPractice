// ============================= REVIEW 2021 =============================== //

// =============================  STACKS  ================================== //
// Stack implementation can be done using an array with build in methods such 
// as pop() , push ()

// var letters = []; // This represents the stack
// var word = 'racecar';

// var rword = '';

// // Put letters of word into stack
// for (var i=0; i<word.length; i++){
//     letters.push(word[i]);
// }
// console.log(letters);

// // Pop off the stack in reverse order
// for (var i=0; i<word.length; i++){
//     rword += letters.pop();
// }

// console.log(rword)

// // Check if its a palindrome
// if(rword === word) {
//     console.log(word+"is a palindrome.");
// }
// else{
//     console.log(word+"is not a palindrome.")
// }

// === CREATING A STACK ===

// var Stack = function(){
//     this.count = 0;
//     this.storage = {};

//     // Adds a value onto the end of the stack
//     this.push = function(value){
//         this.storage[this.count]= value;
//         this.count ++;
//     }

//     // Removes and returns the value at the end of the stack
//     this.pop = function(){
//         if(this.count === 0){
//             return undefined;
//         }
//         this.count --;
//         var result = this.storage[this.count];
//         delete this.storage[this.count];
//         return result;

//     }

//     this.size = function(){
//         return this.count;
//     }

//     // Returns the value at the end of the stack
//     this.peek = function(){
//         return this.storage[this.count-1];
//     }

// }

// var myStack = new Stack();

// myStack.push(1);
// myStack.push(2);
// console.log(myStack.count);
// console.log(myStack.storage);
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());


/// ====================== SETS ====================== //
//  ================= No duplicates ================== //
//  =============== No especific order ============= //
//  ==== Used to check for the presence of an item == //

// function mySet(){

//     // The array collection will hold the set
//     var collection = [];

//     // This method will check for the presence of an element and return true or false
//     this.has = function(element){
//         return(collection.indexOf(element) !== -1 );
//     }

//     // This method will return all the values in the set
//     this.values = function(){
//         return collection;
//     }

//     // This method will add an element to the set
//     this.add = function(element){
//         if(!this.has(element)){
//             collection.push(element);
//             return true;
//         }
//         return false;
//     };

//     // This method will remove an element from a set
//     this.remove = function(element){
//         if(this.has(element)){
//             index = collection.indexOf(element);
//             collection.splice(index,1); // remove one item at [index]
//             return true;
//         }
//     }

//     // This method will return the size of the colleciton
//     this.size = function(){
//         return collection.length;
//     }

//     // This method will return the union of two sets
//     this.union = function(otherSet){
//         var unionSet = new mySet();
//         var firstSet = this.values();
//         var secondSet = otherSet.values();
//         firstSet.forEach(function(e){
//             unionSet.add(e);
//         });
//         secondSet.forEach(function(e){
//             unionSet.add(e);
//         });
//         return unionSet;
//     };

//     // This method will return the intersection of two sets as a new set
//     this.intersection = function(otherSet){
//         var intersectionSet = new mySet();
//         var firstSet = this.values();
//         firstSet.forEach(function(e){
//             if(otherSet.has(e)){
//                 intersectionSet.add(e);
//             }
//         });
//         return intersectionSet;
//     }


//     // This method will return the difference of two sets as a new set
//     this.difference = function(otherSet){
//         var differenceSet = new mySet();
//         var firstSet = this.values();
//         firstSet.forEach(function(e){
//             if(!otherSet.has(e)){
//                 differentSet.add(e);
//             }
//         })
//         return differenceSet();
//     }

//     // This method will test if the set is a subset of a different set
//     this.subset = function(otherSet){
//         var firstSet = this.values();
//         return firstSet.every(function(value){
//             return otherSet.has(value);
//         });
//     }
// }


// var setA = new mySet();
// var setB = new mySet();
// setA.add('a');
// setA.add('a');
// setB.add('b');
// setB.add('c');
// setB.add('a');
// setB.add('d');
// console.log(setA.values());
// console.log(setB.values());
// console.log(setA.subset(setB));


///  ===================  QUEUE ======================= ///
///  ============== FIRST IN FIRST OUT =============== ///

function Queue() {
    collection =[];
    this.print = function(){
        console.log(collection);
    };

    this.enqueue = function(element){
        collection.push(element);
    };

    this.dequeue = function(){
        return collection.shift(); // removes first element of array and return element
    };

    this. front = function(){
        return collection[0];
    };

    this.size = function(){
        return collection.lenth;
    }

    this.isEmpty = function(){
        return(collection.length === 0);
    }

}

var q  = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
q.front();
q.print();