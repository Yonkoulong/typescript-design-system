interface ICustomer {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

interface ICustomerBuilder {
  setFirstName(firstName: string): ICustomerBuilder;
  setLastName(firstName: string): ICustomerBuilder;
  setEmail(firstName: string): ICustomerBuilder;
  setPhoneNumber(firstName: string): ICustomerBuilder;
  build(): ICustomer;
}

class Customer implements ICustomer {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public phoneNumber: string
  ) {}
}

class CustomerBuilder implements ICustomerBuilder {
  private firstName: string = "";
  private lastName: string = "";
  private email: string = "";
  private phoneNumber: string = "";

  public setFirstName(firstName: string): ICustomerBuilder {
    this.firstName = firstName;
    return this;
  }

  public setLastName(lastName: string): ICustomerBuilder {
    this.lastName = lastName;
    return this;
  }

  public setEmail(email: string): ICustomerBuilder {
    this.email = email;
    return this;
  }

  public setPhoneNumber(phoneNumber: string): ICustomerBuilder {
    this.phoneNumber = phoneNumber;
    return this;
  }

  public build(): ICustomer {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phoneNumber: this.phoneNumber,
    };
  }
}

class CustomerDirector {
  constructor(private builder: ICustomerBuilder) {}

  public builderMinimalCustomer(
    firstName: string,
    lastName: string,
    email: string
  ): ICustomer {
    return this.builder
      .setFirstName(firstName)
      .setLastName(lastName)
      .setEmail(email)
      .build();
  }

  public builderFullCustomer() {}
}

// const customer = new Customer('leong', 'nguyen', 'leongnguyen@gmail.com', '0966928464');
const builder: ICustomerBuilder = new CustomerBuilder();
const director: CustomerDirector = new CustomerDirector(builder);
const customer: ICustomer = director.builderMinimalCustomer(
  "leong",
  "nguyen",
  "leongnguyen@gmail.com"
);
