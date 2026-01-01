// The factory design pattern is a type of creational design pattern that provides
// an interface for creating objects in a superclass, but allows subclasses to alter the type of
// objects that will be created

type CarType = "Sedan" | "SUV" | "Hatchback";

abstract class Car {
  constructor(public model: string, public productionYear: number) {}

  abstract displayCarInfo(): void;
}

class Sedan extends Car {
  public displayCarInfo(): void {
    console.log(
      `This is a Sedan. Model: ${this.model}, Production Year: ${this.productionYear}`
    );
  }
}

class SUV extends Car {
  public displayCarInfo(): void {
    console.log(
      `This is a SUV. Model: ${this.model}, Production Year: ${this.productionYear}`
    );
  }
}

class Hatchback extends Car {
  public displayCarInfo(): void {
    console.log(
      `This is a Hatchback. Model: ${this.model}, Production Year: ${this.productionYear}`
    );
  }
}

class CarFactory {
  public createCar(type: CarType, model: string, productionYear: number): Car {
    switch (type) {
      case "Sedan":
        return new Sedan(model, productionYear);
      case "SUV":
        return new Sedan(model, productionYear);
      case "Hatchback":
        return new Sedan(model, productionYear);
      default:
        throw new Error("Invalid car type");
    }
  }
}

const carFactory = new CarFactory();
const sedan = carFactory.createCar("Sedan", "Camry", 2023);
sedan.displayCarInfo();
