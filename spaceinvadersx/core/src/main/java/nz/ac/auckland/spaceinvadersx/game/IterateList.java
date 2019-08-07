package nz.ac.auckland.spaceinvadersx.game;

import java.util.AbstractCollection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;

public class IterateList<E> extends AbstractCollection<E> {

	private IterateListNode<E> head;
	private IterateListNode<E> tail;
	private Iterator<E> iterator;
	private int size;

	public IterateList() {
		head = null;
		tail = null;
		size = 0;
	}

	public boolean add(E element) {
		if (size == 0) {
			head = tail = new IterateListNode<E>(element);
		} else {
			tail.next = new IterateListNode<E>(element);
			tail = tail.next;
		}
		size++;
		return true;
	}

	public Iterator<E> iterator() {
		this.iterator = new IL_Iterator();
		return iterator;
	}

	public int size() {
		return size;
	}

	private class IL_Iterator implements Iterator<E> {
		IterateListNode<E> prev;
		IterateListNode<E> node;

		public IL_Iterator() {
			prev = null;
			node = null;
		}

		public boolean hasNext() {
			if (node == null)
				return head != null;
			else
				return node.next != null;
		}

		public E next() {
			if (this != iterator) throw new ConcurrentModificationException();
			prev = node;
			if (node == null)
				node = head;
			else
				node = node.next;
			return node.element;
		}

		public void remove() {
			if (this != iterator) throw new ConcurrentModificationException();
			if (node == prev) throw new NullPointerException();
			node = node.next;
			if (prev == null) {
				head = node;
				if (node == null) tail = null;
			} else {
				prev.next = node;
				if (node == null) tail = prev;
			}
			node = prev;
			size--;
		}


	}

	private static class IterateListNode<E> {
		E element;
		IterateListNode<E> next;

		public IterateListNode(E element) {
			this.element = element;
			next = null;
		}
		public IterateListNode(E element, IterateListNode<E> next) {
			this.element = element;
			this.next = next;
		}
	}



}
