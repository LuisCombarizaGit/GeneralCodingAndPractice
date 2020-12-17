###############  LINKED LIST PRACTICE ##############

# # Node class
# class Node:
#     # Function to initialize the node object
#     def __init__(self,data):
#         self.data = data # Data
#         self.next = None # Initialize next as null
#
# class LinkedList:
#     # Function to initialize head
#     def __init__(self):
#         self.head = None

#
#     # Function to print content of linked list starting from head
#     def printlist(self):
#         temp = self.head
#         while(temp):
#             print(temp.data)
#             temp = temp.next
#
#     # Function to add a node at the front of list   TIME COMPLEX: 0(1) constant
#     def push(self,new_data):
#         new_node = Node(new_data)
#         new_node.next = self.head
#         self.head = new_node
#
#     # Function that appends a node at the end of the list
#     def append(self,new_data):
#         # create node -> put data -> set next as None , if list empty than new node is head
#         new_node = Node(new_data)
#
#         if self.head == None:
#             self.head = new_node
#             return
#
#         last = self.head
#         while(last):
#             print(last.data)
#             last = last.next
#
#         last.next =new_node
#
#
#     # Function that inserts node after a given location TIME COMPLEX: 0(1) constant
#     def insertAfter(self,prev_node,new_data):
#         new_node = Node(new_data)
#         new_node.next = prev_node.next
#         prev_node.next = new_node
#
#
#
#
# if __name__== '__main__':
#     linkedlist = LinkedList() # creating the linked list
#
#     linkedlist.head = Node(1) # head of linked list is not Node with value (1)
#     second = Node(2) # Created a node with value 2
#     third = Node(3) # Created a node with value 3
#
#     linkedlist.head.next = second
#     second.next = third
#
#     linkedlist.printlist()
#     print()
#
#     linkedlist.insertAfter(second,6)
#
#
#     linkedlist.printlist


#########        ----- Linked List Deletion -----        ###########

# class Node:
#     def __init__(self,data):
#         self.data = data
#         self.next = None
#
# class LinkedList:
#     def __init__(self):
#         self.head = None
#
#
#     def deleteList(self):
#
#         #initialize the current node
#         current = self.head
#         while current:
#             prev = current.next # Move to next node
#
#             # delete the current node
#             del current.data
#
#             # set current equals prev node
#             current = prev
#
#     # push function to add node in front of list
#     def push(self,new_data):
#         # allocate Node
#         new_node = Node(new_data)
#
#         # Point new node to head of list (previous head)
#         new_node.next = self.head
#
#         # set new head as new node created
#         self.head = new_node
#
#     # Utility function to print the linked LinkedList
#     def printList(self):
#         temp = self.head
#         while (temp):
#             print(" %d" % (temp.data)),
#             temp = temp.next
#
#
# # list 1 -> 2 -> 3 -> 4 -> 5
# if __name__ == '__main__':
#     llist = LinkedList()
#     llist.push(1)
#     llist.push(2)
#     llist.push(3)
#     llist.push(4)
#     llist.push(5)
#
#
#     LinkedList.printList(llist)
#
#     print("Deleting linked list")
#     llist.deleteList()
#
#     print("Linked list deleted")
#
#     LinkedList.printList(llist)


#############  --- Length of a Linked List --- #############
#
# # Node class
# class Node:
#     # Function to initialize the node object
#     def __init__(self,data):
#         self.data = data # Data
#         self.next = None # Initialize next as null
#
# class LinkedList:
#     # Function to initialize head
#     def __init__(self):
#         self.head = None
#
#     def linkedListCount(self):
#         count = 0
#
#         p1 = self.head
#
#         while(p1):
#             count += 1
#             p1 = p1.next
#
#         return print(count)
#
#
#     def searchElement(self, value):
#
#         p1 = self.head
#         while(p1):
#             if p1.data == value:
#                 return print(True )
#
#
#     # push function to add node in front of list
#     def push(self,new_data):
#          # allocate Node
#         new_node = Node(new_data)
#
#         # Point new node to head of list (previous head)
#         new_node.next = self.head
#
#         # set new head as new node created
#         self.head = new_node
#
#     # list 1 -> 2 -> 3 -> 4 -> 5
# if __name__ == '__main__':
#     llist = LinkedList()
#     llist.push(1)
#     llist.push(2)
#     llist.push(3)
#     llist.push(4)
#     llist.push(5)
#
#     llist.linkedListCount()


# y = [7,8,3]
# for index, item in enumerate(y):
#     print(index,item)

# names = ['cosmo', 'pedro', 'Anu', 'Ray']
# idx = [k for k, v in enumerate(names) if v == 'Anu']
# print(idx)
# print('index = ' + str(idx[0]))
#



## --------------------------- STACK IMPLEMENTATION --------------------------------- ##

# class Stack():
#     def __init__(self):
#         self.stack = []
#
#     def push(self,item):
#         self.stack.append(item)
#     def pop(self):
#         if len(self.stack) > 0:
#             return self.stack.pop()
#         else:
#             return None
#     def peek(self):
#         if len(self.stack) > 0:
#             return self.stack[len(self.stack)-1]
#         else:
#             return None
#
#     def __str__(self):
#         return str(self.stack)
#
#
# ## ----------------------------- Python MaxHeap ----------------------------------- ##
#
# class MaxHeap:
#     def __init__(self, items=[]):
#         super().__init__()
#         self.heap = [0]
#         for item in items:
#             self.heap.append(item)
#             self.__floatUp(len(self.heap)-1)
#
#
#     def push(self,data):
#         self.heap.append(data)
#         self.__floatUp(len(self.heap) -1)
#
#     def peek(self):
#         if self.heap[1]:
#             return self.heap[1]
#         else:
#             return False
#
#     def pop(self):
#         if len(self.heap) > 2:
#             self.__swap(1, len(self.heap)-1)
#             max = self.heap.pop()
#             self.__bubbleDown(1)
#         elif len(self.heap) == 2:
#             max = self.heap.pop()
#         else:
#             max = False
#         return max
#
#     def __swap(self,i,j):
#         self.heap[i], self.heap[j] = self.heap[j],self.heap[i]
#
#     def __floatUp(self,index):
#         parent = index//2
#         if index <=1:
#             return
#         elif self.heap[index] > self.heap[parent]:
#             self.__swap(index, parent)
#             self.__floatUp(parent)
#
#     def __bubbleDown (self, index):
#         left = index * 2
#         right = index * 2 + 1
#         largest = index
#         if len(self.heap) > left and self.heap[largest] < self.heap[left]:
#             largest = left
#         if len(self.heap) > right and self.heap[largest] < self.heap[right]:
#             largest = right
#         if largest != index:
#             self.__swap(index, largest)
#             self.__bubbleDown(largest)
#
#     def __str__(self):
#         return str(self.heap)


