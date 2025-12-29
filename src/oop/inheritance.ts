class Animal {
  constructor(public name: string) {}

  move(distance: number): void {
    console.log(`${this.name} moved ${distance} meters.`);
  }
}

class Dog extends Animal {
  constructor(public name: string = "dog") {
    super(name);
  }
}

const myDog = new Dog('Bear');
myDog.move(5);
