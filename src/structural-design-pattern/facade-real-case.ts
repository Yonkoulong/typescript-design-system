class Amplifier {
  public turnOn(): void {
    console.log("Amplifier is turned on");
  }

  public setVolume(level: number): void {
    console.log(`Volume is set to ${level}`);
  }
}

class DvdPlayer {
  public turnOn(): void {
    console.log("Dvd is turned on");
  }

  public turnOff(): void {
    console.log("Dvd is turned off");
  }

  public play(movie: string): void {
    console.log(`${movie} is showing`);
  }
}

class Projector {
  public turnOn(): void {
    console.log("Projector is turned on");
  }

  public turnOff(): void {
    console.log("Projector is turned off");
  }

  public setInput(dvdPlayer: DvdPlayer): void {
    console.log("Input set to DvdPlayer");
  }
}

class Lights {
  public dim(level: number): void {
    console.log(`Lights dimmed to ${level}`);
  }
}

export class HomeTheaterFacade {
  constructor(
    private amplifier: Amplifier,
    private dvdPlayer: DvdPlayer,
    private protector: Projector,
    private lights: Lights
  ) {}

  public watchMovie(movie: string, volume: number, level: number) {
    console.log(`Get Ready to Watch ${movie}`);
    this.lights.dim(level);
    this.amplifier.turnOn();
    this.amplifier.setVolume(volume);
    this.dvdPlayer.turnOn();
    this.protector.turnOn();
    this.protector.setInput(this.dvdPlayer);
    this.dvdPlayer.play(movie);
  }
}

// ====
const amplifier = new Amplifier();
const dvdPlayer = new DvdPlayer();
const protector = new Projector();
const lights = new Lights();

const homeTheater = new HomeTheaterFacade(
  amplifier,
  dvdPlayer,
  protector,
  lights
);

homeTheater.watchMovie("Avatar 3", 10, 5);
