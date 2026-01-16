//The Adapter Deisgn Pattern is a software design pattern that allows the interface of an
//existing class to be used from another interface. It's often used to make existing classes
// work with others without modifying their source code. The Adapter Pattern is especially
// usefull when the classes that need to communicate with each other do not have
// compatible interfaces.

class Rectangle {
  constructor(private width: number, private height: number) {}

  public getWidth(): number {
    return this.width;
  }

  public getHeight(): number {
    return this.height;
  }

  public area(): number {
    return this.width * this.height;
  }
}

class Square {
  constructor(private side: number) {}

  public getSide() {
    return this.side;
  }

  public area(): number {
    return this.side * this.side;
  }
}

class SquareToRectangleAdapter {
  constructor(private square: Square) {}

  public getWidth(): number {
    return this.square.getSide();
  }

  public getHeight(): number {
    return this.square.getSide();
  }

  public area(): number {
    return this.square.area();
  }
}

// Client code
const square = new Square(5);
const adapter = new SquareToRectangleAdapter(square);

console.log(adapter.getHeight());
console.log(adapter.getWidth());
console.log(adapter.area());

