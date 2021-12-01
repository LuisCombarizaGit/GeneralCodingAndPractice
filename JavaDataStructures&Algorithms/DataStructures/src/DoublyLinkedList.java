import javax.management.RuntimeErrorException;

/**
 * LinkedList implementation and practice interview questions
 *
 * @author Luis Combariza Nov/2021
 **/

public class DoublyLinkedList<T> {

    private int size = 0;
    private Node<T> head = null;
    private Node<T> tail = null;

    // Internal node class to represent data
    private static class Node<T> {
        private T data;
        private Node<T> prev;
        private Node<T> next;

        public Node(T data, Node<T> prev, Node<T> next) {
            this.data = data;
            this.prev = prev;
            this.next = next;
        }

        @Override
        public String toString() {
            return data.toString();
        }

    }

    // Empty this linked list, O(n)
    public void clear() {
        Node<T> trav = head;
        while (trav != null) {
            Node<T> next = trav.next;
            trav.prev = trav.next = null;
            trav.data = null;
            trav = next;
        }
        head = tail = trav = null;
        size = 0;
    }

    // Return the size of the linked list
    public int size() {
        return size;
    }

    // Returns true or false if list is empty
    public boolean isEmpty() {
        return size() == 0;
    }

    public void add(T elem) {
        addLast(elem);
    }

    // Add a node to the tail of the linked list, 0(1)
    public void addLast(T elem) {
        if (isEmpty()) {
            head = tail = new Node<T>(elem, null, null);
        } else {
            tail.next = new Node<T>(elem, null, null);
            tail = tail.next;
        }
        size++;
    }

    // Check the value of the first node if it exists, O(1)
    public T peekFirst() {
        if (isEmpty()) throw new RuntimeException("Empty List");
        return head.data;
    }


    // Remove the first value at the head of the linked list, O(1)
    public T removeFirst() {
        // Case when the list is empty
        if (isEmpty()) throw new RuntimeException("Empty list");

        // Extract the data at the head and move the head pointer forwards one node
        T data = head.data;
        haed = head.next;
        size--;

        //
    }


}
