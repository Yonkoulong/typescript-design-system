//The singleton pattern is a creational design pattern that lets you ensure that
// a class has only one instance, while providing a global access point this instance

export class Singleton {
  private static instance: Singleton;
  private static _value: number;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  set setValue(value: number) {
    Singleton._value = value;
  }

  get value() {
    return Singleton._value;
  }
}

const newInstance = Singleton.getInstance();
const newInstance1 = Singleton.getInstance();

newInstance.setValue = 10;
console.log("new Instance 1", newInstance1.value);
