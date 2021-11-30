/**
 * LinkedList implementation and practice interview questions
 *
 * @author Luis Combariza Nov/2021
 */

public class LinkedList<T> {

    private int size = 0;
    private Node<T> head = null;

    // Internal node class to represent data
    private static class Node<T> {
        private T data;
        private Node<T> prev, next;

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


}
