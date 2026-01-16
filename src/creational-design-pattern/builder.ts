//The Builder pattern is a creational design pattern that lets you construct complex objects step by step.

interface Builder {
  setPartA(): void;
  setPartB(): void;
  setPartC(): void;
}

class Product {
  private parts: string[] = [];

  public add(part: string): void {
    this.parts.push(part);
  }

  listParts(): void {
    console.log(`Product Parts: ${this.parts.join(" ,")}`);
  }
}

export class ConcreteBuilder implements Builder {
  private product!: Product;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.product = new Product();
  }

  public setPartA(): void {
    this.product.add("PartA");
  }

  public setPartB(): void {
    this.product.add("PartB");
  }

  public setPartC(): void {
    this.product.add("PartC");
  }

  public getProduct(): Product {
    const result = this.product;
    this.reset();
    return result;
  }

  public getFullProduct(): Product {
    const result = this.product;
    this.reset();
    return result;
  }
}

export class Director {
  private builder!: Builder;

  public setBuilder(builder: Builder) {
    this.builder = builder;
  }

  public builderMinimumProduct() {
    this.builder.setPartA();
  }

  public builderFullProduct() {
    this.builder.setPartA();
    this.builder.setPartB();
    this.builder.setPartC();
  }
}

const builder = new ConcreteBuilder();
const director = new Director();
director.setBuilder(builder);

director.builderMinimumProduct();
const minProduct = builder.getProduct();
console.log(minProduct);

director.builderFullProduct();
const fullProduct = builder.getFullProduct();
console.log(fullProduct);
