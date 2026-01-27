// The iterator pattern is a design pattern that allows sequential access to
// elements in a collection, without exposing its underlying representation. It
// provides a way to access the elements of an aggregate object sequentially
// without exposing the underlying details.
class ArrayIterator<T> {
  private position: number = 0;
  constructor(private collection: T[]) {}

  public next(): T {
    // Get the next element in the collection
    const result: T = this.collection[this.position] || {} as T;
    this.position += 1;
    return result;
  }

  public hasNext(): boolean {
    return this.position < this.collection.length;
  }
}

// client code
const array: number[] = [1, 2, 3, 4, 5, 6];
const iterator = new ArrayIterator(array);
console.log(iterator.hasNext());
console.log(iterator.next());
