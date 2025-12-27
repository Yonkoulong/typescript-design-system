//Abtraction in OOP
"1. To hide implementation details and expose only essential features because abstraction in object-oriented programming focuses on concealing complex inner workings, allowing users to interact with simpler, high-level interfaces. This enables better usability and maintainability of code by emphasizing what an object does rather than how it does it.";
"2. It allows changes to code without affecting other parts of the system because abstraction helps isolate components, enabling modifications to be made in one area without having unintended consequences on others. This modularity enhances maintainability and reduces the risk of introducing errors, which is especially valuable in large codebases.";
"3. Increased Complexity as the correct answer because abstraction simplifies interactions by hiding complicated implementation details, rather than adding complexity. This makes it easier for users to work with systems without needing to understand every underlying aspect.";

interface Shape {
  area(): number;
  perimeter(): number;
}

export class Circle implements Shape {
  constructor(private radius: number) {}

  area(): number {
    return Math.PI * this.radius * this.radius;
  }

  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

export class Retangle implements Shape {
  constructor(private width: number, private height: number) {}

  area(): number {
    return this.height * this.width;
  }

  perimeter(): number {
    return 2 * (this.width + length);
  }
}
