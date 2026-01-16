class Grinder {
  public grindBread() {
    console.log("Grinding bean ...");
  }
}

class Boiler {
  public boilWater() {
    console.log("Boiling Water ...");
  }
}

class Brewer {
  public brewCoffee(): void {
    console.log("Brewing Coffee ...");
  }
}

export class CoffeeMakerFacade {
  constructor(
    private grinder: Grinder,
    private boiler: Boiler,
    private brewer: Brewer
  ) {}

  public makeCoffee() {
    this.grinder.grindBread();
    this.boiler.boilWater();
    this.brewer.brewCoffee();
    console.log("The coffee is ready");
  }
}


// ====
const grinder = new Grinder();
const boiler = new Boiler();
const brewer = new Brewer();

const coffeeMaker = new CoffeeMakerFacade(grinder, boiler, brewer);
coffeeMaker.makeCoffee();