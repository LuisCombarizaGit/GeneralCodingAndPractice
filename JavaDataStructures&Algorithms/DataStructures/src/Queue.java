import java.util.LinkedList;

/**
 * Stack implementation using a linked list
 *
 * @author Luis Combariza Dec/2021
 */

public class Queue {

    private LinkedList<T> list = new LinkedList<T>();

    public Queue() {
    }

    ;

    public Queue(T firstElem) {
        Enqueue(firstElem);
    }

    // Return the size of the queue
    public int size() {
        return list.size();
    }

    // Returns whether or not the queue is empty
    public boolean isEmpty() {
        return size() == 0;
    }

    // Peek the element at the form of thr queue, Method throws error if the queue is empty
    public T peek() {
        if (isEmpty()) throw new RuntimeException("Queue Empty");
        return list.peekFirst();
    }

    // Poll an element from the front of the queue, Method throws error if queue is empty
    public T Dequeue() {
        if (isEmpty()) throw new RuntimeException(" Queue Empty");
        return list.removeFirst();
    }

    // Add an element to the back of the queue
    public void Enqueue(T elem) {
        list.addLast(elem);
    }

}
