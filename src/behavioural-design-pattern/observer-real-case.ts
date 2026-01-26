interface Observer {
  update(temperture: number, humidity: number, pressure: number): void;
}

interface Subject {
  registerObserver(o: Observer): void;
  removeObserver(o: Observer): void;
  notifyObservers(): void;
  setMeasurements(temperture: number, humidity: number, pressure: number): void;
}

class WeatherData implements Subject {
  private observers: Observer[] = [];
  private temperture: number = 0;
  private humidity: number = 0;
  private pressure: number = 0;

  public registerObserver(o: Observer): void {
    if (this.observers.includes(o)) {
      console.log("Observer already registered");
      return;
    }

    this.observers.push(o);
  }

  public removeObserver(o: Observer): void {
    const index = this.observers.indexOf(o);
    if (index === -1) {
      console.log("Observer not found");
      return;
    }

    this.observers.splice(index, 1);
  }

  public notifyObservers(): void {
    if (this.temperture && this.humidity && this.pressure) {
      for (const observer of this.observers) {
        observer.update(this.temperture, this.humidity, this.pressure);
      }
    }
  }

  public setMeasurements(
    temperture: number,
    humidity: number,
    pressure: number
  ): void {
    this.temperture = temperture;
    this.humidity = humidity;
    this.pressure = pressure;
    this.notifyObservers();
  }
}

export class CurrentConditionDisplay implements Observer {
  private temperture: number = 0;
  private humidity: number = 0;
  private pressure: number = 0;

  constructor(private weatherData: Subject) {
    this.weatherData.registerObserver(this);
  }

  update(temperture: number, humidity: number, pressure: number): void {
    this.temperture = temperture;
    this.humidity = humidity;
    this.pressure = pressure;
    this.display();
  }

  public display(): void {
    if (this.temperture && this.humidity && this.pressure) {
      console.log(
        `Temperture: ${this.temperture}, Humidity: ${this.humidity}, Pressure: ${this.pressure}`
      );
    }
  }
}


// client code 
const weatherData = new WeatherData();
const currentDisplay = new CurrentConditionDisplay(weatherData);

// Simulate new Weather Adjustments
weatherData.setMeasurements(30, 65, 1013);
weatherData.setMeasurements(28, 70, 1012);
weatherData.setMeasurements(25, 90, 1011);


