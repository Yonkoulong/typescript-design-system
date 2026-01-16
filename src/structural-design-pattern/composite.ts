// The Composite pattern is a structural design pattern that lets you compose objects
// into tree-like structures and then work with these structures as if they were individual objects
interface Employee {
  getName(): string;
  getSalary(): number;
  getRole(): string;
}

interface CompositeEmployee {
  addEmployee(employee: Employee): void;
  removeEmployee(employee: Employee): void;
  getEmployees(): Employee[];
}

export class Staff implements Employee {
  constructor(private name: string, private salary: number) {}

  public getName(): string {
    return this.name;
  }
  public getSalary(): number {
    return this.salary;
  }
  public getRole(): string {
    return "Staff";
  }
}

export class Manager implements Employee, CompositeEmployee {
  constructor(
    private name: string,
    private salary: number,
    private employees: Employee[] = []
  ) {}
  public getName(): string {
    return this.name;
  }

  public getSalary(): number {
    return this.salary;
  }

  public getRole(): string {
    return "Manager";
  }

  public addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  public removeEmployee(employee: Employee): void {
    const index = this.employees.findIndex(
      (emp) => emp.getName() === employee.getName()
    );
    if (index !== -1) {
      this.employees.splice(index, 1);
    }
  }

  getEmployees(): Employee[] {
    return this.employees;
  }
}

const staff = new Staff("LLL", 1000);
const staff1 = new Staff("LLL1", 12000);
const manager = new Manager("Michael", 23);

manager.addEmployee(staff);
manager.addEmployee(staff1);
console.log(manager.getEmployees());
manager.removeEmployee(staff);
console.log(manager.getEmployees());
