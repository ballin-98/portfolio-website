export class CircularArray<T> {
  private array: T[];
  private currentIndex: number;

  constructor(size: number) {
    this.array = new Array<T>(size);
    this.currentIndex = 0;
  }

  // Add an element to the circular array
  push(element: T): void {
    this.array[this.currentIndex] = element;
    this.currentIndex = (this.currentIndex + 1) % this.array.length;
  }

  // Get the current element at the cursor
  getCurrent(): T | undefined {
    return this.array[this.currentIndex];
  }

  // Move the cursor to the next element
  moveNext(): void {
    this.currentIndex = (this.currentIndex + 1) % this.array.length;
  }

  // Move the cursor to the previous element
  movePrevious(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.array.length) % this.array.length;
  }
}
