// The Bridge pattern | lets you split a large class or a set of closely related classes into two separeate
// hierarchies-abstraction and implmentation-which can be developed independently of each other

interface MediaPlayerImplementation {
  playAudio(): void;
  playVideo(): void;
}

class WindowMediaPlayer implements MediaPlayerImplementation {
  public playAudio(): void {
    console.log("Playing audio on Window media player");
  }

  public playVideo(): void {
    console.log("Playing video on Window media player");
  }
}

class MacOSMediaPlayer implements MediaPlayerImplementation {
  public playAudio(): void {
    console.log("Playing audio on MacOS media player");
  }
  public playVideo(): void {
    console.log("Playing video on MacOS media player");
  }
}

abstract class MediaPlayerAbstraction {
  constructor(protected implementation: MediaPlayerImplementation) {}

  abstract playFile(): void;
}

export class AudioPlayer extends MediaPlayerAbstraction {
  public playFile(): void {
    this.implementation.playAudio();
  }
}

export class VideoPlayer extends MediaPlayerAbstraction {
  public playFile(): void {
    this.implementation.playVideo();
  }
}

const windowsAudioPlayer = new AudioPlayer(new WindowMediaPlayer());
windowsAudioPlayer.playFile();

const macOSAudioPlayer = new AudioPlayer(new MacOSMediaPlayer());
macOSAudioPlayer.playFile();
