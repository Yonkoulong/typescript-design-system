interface Shape {
  area(): number;
  perimeter(): number;
}

export class Circle2 implements Shape {
  constructor(private radius: number) {}

  area(): number {
    return Math.PI * this.radius * this.radius;
  }

  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

export class Retangle2 implements Shape {
  constructor(private width: number, private height: number) {}

  area(): number {
    return this.height * this.width;
  }

  perimeter(): number {
    return 2 * (this.width + length);
  }
}

export function calculateTotalArea(shape: Shape) {
  return shape.area();
}

export function calculateTotalPerimeter(shape: Shape) {
  return shape.perimeter();
}

