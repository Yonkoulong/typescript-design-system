interface UserDetails {
  name: string;
  age: number;
  email: string;
}

interface Prototype {
  clone(): Prototype;
  getUserDetails(): UserDetails;
}

export class ConcretePrototype implements Prototype {
  constructor(private user: UserDetails) {}

  public clone(): Prototype {
    return new ConcretePrototype({ ...this.user });
  }

  public getUserDetails(): UserDetails {
    return this.user;
  }
}

const user1 = new ConcretePrototype({
  name: "leong",
  age: 25,
  email: "leong@gmail.com",
});

const user2 = user1.clone();

if (user1 === user2) {
  console.log("Both instances are the same");
} else {
  console.log("Cloned object ", user2);
}
