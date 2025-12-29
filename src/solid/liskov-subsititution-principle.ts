//3. Liskov Substitution principle
// If S is a subtype of T, then objects of type T in a program may be replaced with objects of type S without altering any of the desirable properties of that program.

// ======= example 1
abstract class Shape {
  abstract calculateArea(): number;
}

class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super();
  }

  public calculateArea(): number {
    return this.width * this.height;
  }
}

class Square extends Shape {
  constructor(public side: number) {
    super();
  }

  public calculateArea(): number {
    return this.side * this.side;
  }
}

// ======= Client Code
function area(shape: Shape): number {
  return shape.calculateArea();
}

const rectangle = new Rectangle(10, 12);
const square = new Square(8);

area(rectangle);
area(square);

//======= example 2

abstract class PaymentProcessor {
  abstract processPayment(amount: number): void;
}

class CreditCardProcessor extends PaymentProcessor {
  constructor() {
    super();
  }

  public processPayment(amount: number): string {
    return `This is credit card processor payment: ${amount}`;
  }
}

class DebitCardProcessor extends PaymentProcessor {
  constructor() {
    super();
  }

  public processPayment(amount: number): string {
    return `This is debit card processor payment: ${amount}`;
  }
}

class PaypalProcessor extends PaymentProcessor {
  constructor() {
    super();
  }

  public processPayment(amount: number): string {
    return `This is paypal processor payment: ${amount}`;
  }
}

// ======= Client Code
function executePayment(
  paymentProcessor: PaymentProcessor,
  amount: number
): void {
  return paymentProcessor.processPayment(amount);
}

const creditCard = new CreditCardProcessor();
const debitCard = new DebitCardProcessor();
const paypal = new PaypalProcessor();

executePayment(creditCard, 200);
executePayment(debitCard, 300);
executePayment(paypal, 400);
