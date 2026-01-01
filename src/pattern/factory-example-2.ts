type PaymentType = "Paypal" | "Stripe" | "BankTransfer";

abstract class PaymentProcess {
  abstract processPayment(): void;
}

class PaypalProcessor extends PaymentProcess {
  constructor(public amount: number) {
    super();
  }

  processPayment(): void {
    console.log(`This is paypal payment method with amount ${this.amount}`);
  }
}

class StripeProcessor extends PaymentProcess {
  constructor(public amount: number) {
    super();
  }

  processPayment(): void {
    console.log(`This is stripe payment method with amount ${this.amount}`);
  }
}

class BankTransferProcessor extends PaymentProcess {
  constructor(public amount: number) {
    super();
  }

  processPayment(): void {
    console.log(
      `This is bank transfer payment method with amount ${this.amount}`
    );
  }
}

class PaymentProcessFactory {
  public createProcessPayment(type: PaymentType, amount: number) {
    switch (type) {
      case "Paypal":
        return new PaypalProcessor(amount);
      case "Stripe":
        return new StripeProcessor(amount);
      case "BankTransfer":
        return new BankTransferProcessor(amount);
      default:
        throw new Error("Invalid payment processor type");
    }
  }
}

const paymentProcessorfactory = new PaymentProcessFactory();

const paypalPayment = paymentProcessorfactory.createProcessPayment(
  "Stripe",
  200
);

paypalPayment.processPayment();
