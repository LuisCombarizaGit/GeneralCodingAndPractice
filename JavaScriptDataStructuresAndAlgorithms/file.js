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

// function Queue() {
//     collection =[];
//     this.print = function(){
//         console.log(collection);
//     };

//     this.enqueue = function(element){
//         collection.push(element);
//     };

//     this.dequeue = function(){
//         return collection.shift(); // removes first element of array and return element
//     };

//     this. front = function(){
//         return collection[0];
//     };

//     this.size = function(){
//         return collection.lenth;
//     }

//     this.isEmpty = function(){
//         return(collection.length === 0);
//     }

// }

// var q  = new Queue();
// q.enqueue('a');
// q.enqueue('b');
// q.enqueue('c');
// q.print();
// q.dequeue();
// console.log(q.front());
// q.print();

// ==============  Priority queue ============ // 
// function PriorityQueue() {
//     var collection = [];
//     this.printCollection = function(){
//         console.log(collection);
//     };

//     this.enqueue = function (element){
//         if(this.isEmpty()){
//             collection.push(element);
//         }else{
//             var added = false;
//             for(var i=0; i<collection.length; i++){
//                 if(element[1] < collection[i][1]){
//                     collection.splice(i,0,element);
//                     added = true;
//                     break;
//                 }
//             }
//             if(!added){
//                 collection.push(element);
//             }
//         }

//     };

//     this.dequeue = function(){
//         var value = collection.shift();
//         return value[0];
//     };

//     this.front = function(){
//         return collection[0];
//     };
    
//     this.size = function(){
//         return collection.length;
//     };

//     this.isEmpty = function(){
//         return(collection.length === 0);
//     }

// }


// var pq = new PriorityQueue();
// pq.enqueue(['Luis', 2]);
// pq.enqueue(['Quincy Larson',3]);
// pq.enqueue(['Juan C',1]);
// pq.enqueue(['SomeoneElse',1])
// pq.printCollection();
// pq.dequeue();
// pq.front();
// pq.printCollection();




// ==================== Binary Serach Tree ================ //

class Node { 
    constructor(data, left = null, right = null ){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor(){
        this.root = null;
    }
    // This is how you define a function when dealing with classess
    add(data){
        const node = this.root;
        if (node === null){
            this.root = new Node(data);
            return;
        }
        else {
            // Recursive function to check the nodes in the tree
            const searchTree = function(node){
                if(data < node.data){
                    if(node.left === null){
                        node.left = new Node(data);
                        return;
                    } else if(node.left !== null){
                        return searchTree(node.left)
                    }
                } else if (data > node.data){
                    if (node.right === null){
                        node.right = new Node(data);
                        return;
                    } else if (node.right !== null){
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            };
            return searchTree(node);
        }
    }

    findMin(){
        let current = this.root;
        while(current.left !== null){
            current = current.left;
        }
        return current.data;
    }

    findMax(){
        let current = this.root;
        while(current.right !== null){
            current = current.right;
        }
        return current.data;
    }

    find(data){
        let current = this.root;
        while(current.data !== data){
            if(data < current.data){
                current = current.left;
            }else{
            current = current.right;
        }
        if(current === null){
            return null;
            }
         }
    }


    isPresent(data){
        let current = this.root;
        while(current){
            if(data === current.data){
                return true;
            }
            if (data < current.data){
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return false;
    }

    remove(data){
        const removeNode = function(node, data){
            if(node == null){
                return null;
            }
            if(data == node.data){
                // node has no children
                if(node.left == null && node.right == null){
                    return null;
                }
                // node has no left child
                if(node.left == null){
                    return node.right;
                }
                // node has no right child
                if(node.right == null){
                    return node.left;
                }

                // node has two children
                var tempNode = node.right;
                while(tempNode.left !== null){
                    tempNode = tempNode.left;
                }

                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            }   else if(data < node.data){
                node.left = removeNode(node.left, data);
                return node;
            }   else {
                node.right = removeNode(node.right, data);
                return node;
            }

            this.root = removeNode(this.root, data);

        }
    }


}


