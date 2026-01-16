// The Decorator design pattern is a structural design pattern that allows you to
// dynamically add or override behavior in an existing object without changing its imlementation.
// This Pattern is particularly usefull when you want to modify the behavior of an object without affacting other of the same class.

interface Coffee {
  cost(): number;
  description(): string;
}

class SimpleCoffee implements Coffee {
  public cost(): number {
    return 10;
  }

  public description(): string {
    return "Simple Coffee";
  }
}

abstract class ConffeeDecorator implements Coffee {
  constructor(protected coffee: Coffee) {}

  abstract cost(): number;
  abstract description(): string;
}

class MilkDecorator extends ConffeeDecorator {
  constructor(coffee: Coffee) {
    super(coffee);
  }

  public cost(): number {
    return this.coffee.cost() + 2;
  }

  public description(): string {
    return `${this.coffee.description()}, with milk`;
  }
}

// client code
let coffee: Coffee = new SimpleCoffee();
coffee = new MilkDecorator(coffee);

console.log(`Cost: ${coffee.cost()}`);
console.log(`Description: ${coffee.description()}`);
