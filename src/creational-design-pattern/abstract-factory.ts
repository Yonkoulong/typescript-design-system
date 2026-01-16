// Provides an interface for creating families of related objects without specifying their concrete classes
// IProductA and IProduct B are abstract products
// Factrory is a concrete factory
// The client depends only on interfaces 
// This improves scalability and testability

interface IProductA {
  operationA(): string;
}

interface IProductB {
  operationB(): string;
}

interface IFactory {
  createProductA(): IProductA;
  createProductB(): IProductB;
}

class ProductA implements IProductA {
  public operationA(): string {
    return "This is the result of Operation A";
  }
}

class ProductB implements IProductB {
  public operationB(): string {
    return "This is the result of Operation B";
  }

  public combineOperation(collaborator: IProductA): string {
    const result = collaborator.operationA();
    return `The reuslt of Product B Collobrating with (${result})`;
  }
}

class Factory implements IFactory {
  createProductA(): IProductA {
    return new ProductA();
  }

  createProductB(): IProductB {
    return new ProductB();
  }
}

// ====
const factory = new Factory();

const productA = factory.createProductA();
console.log(productA.operationA());

const productB = factory.createProductB();
console.log(productB.operationB());
