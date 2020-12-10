###############  LINKED LIST PRACTICE ##############

# Node class
class Node:
    # Function to initialize the node object
    def __init__(self,data):
        self.data = data # Data
        self.next = None # Initialize next as null

class LinkedList:
    # Function to initialize head
    def __init__(self):
        self.head = None


    # Function to print content of linked list starting from head
    def printlist(self):
        temp = self.head
        while(temp):
            print(temp.data)
            temp = temp.next

    # Function to add a node at the front of list   TIME COMPLEX: 0(1) constant
    def push(self,new_data):
        new_node = Node(new_data)
        new_node.next = self.head
        self.head = new_node


    # Function that inserts node after a given location TIME COMPLEX: 0(1) constant
    def insertAfter(self,prev_node,new_data):
        new_node = Node(new_data)
        new_node.next = prev_node.next
        prev_node.next = new_node




if __name__== '__main__':
    linkedlist = LinkedList() # creating the linked list

    linkedlist.head = Node(1) # head of linked list is not Node with value (1)
    second = Node(2) # Created a node with value 2
    third = Node(3) # Created a node with value 3

    linkedlist.head.next = second
    second.next = third

    linkedlist.printlist()
    print()

    linkedlist.insertAfter(second,6)


    linkedlist.printlist()



