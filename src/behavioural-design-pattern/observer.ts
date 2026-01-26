// The observer design pattern is a behavioral design pattern that allows you to define or
// create a subscription mechanism to send notifications to multiple objects about any
// new events that happen to the object they're observing. The object that is being
// watched is often called the subject. The objects that are wathcing the state changes are
// called observers or listerers.
interface Observer {
  update(subject: Subject): void;
}

class ConcreteObserver implements Observer {
  constructor(private id: number) {}

  public update(subject: Subject): void {
    console.log(
      `Observer ${this.id} updated, new state: ${subject.getState()}`
    );
  }
}

interface Subject {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
  getState(): number;
  setState(state: number): void;
}

class ConcreteSubject implements Subject {
  private observers: Observer[] = [];
  private state: number = 0;

  public addObserver(observer: Observer): void {
    const isExists = this.observers.includes(observer);
    if (isExists) {
      return console.log("Observer already exists");
    }

    this.observers.push(observer);
    console.log("Observer added successfully");
  }

  public removeObserver(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log("Observer does no Exist");
    }

    this.observers.splice(observerIndex, 1);
    console.log("Observer removed successfully");
  }

  public notifyObservers(): void {
    this.observers.forEach((observer) => observer.update(this));
  }

  public getState(): number {
    return this.state;
  }

  public setState(state: number): void {
    this.state = state;
    console.log("Setting State ....");
    this.notifyObservers();
  }
}

// Client code
const subject = new ConcreteSubject();

const observer1 = new ConcreteObserver(1);
subject.addObserver(observer1);

const observer2 = new ConcreteObserver(2);
subject.addObserver(observer2);

subject.setState(123);