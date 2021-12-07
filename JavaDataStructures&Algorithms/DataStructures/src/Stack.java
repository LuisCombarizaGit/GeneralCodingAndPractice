/**
 * Stack implementation using a linked list
 *
 * @author Luis Combariza Nov/2021
 */


public class Stack<T> {

    private java.util.LinkedList<T> list = new java.util.LinkedList<T>();

    // Create an empty stack
    public Stack() {
    }

    // Create a Stack with an initial element
    public Stack(T firstElement) {
        push(firstElement);
    }

    // Return the number of elements in the stack
    public int size() {
        return list.size();
    }

    // Check if the stack is empty
    public boolean isEmpty() {
        return size() == 0;
    }

    // Pop an element off the stack


}
