class Projector {
  public on() {
    console.debug("Turn on projector");
  }
  public off() {
    console.debug("Turn off projector");
  }
}

class SoundSystem {
  public on() {
    console.debug("Turn on sound system");
  }
  public off() {
    console.debug("Turn off sound system");
  }
}

class VideoPlayer {
  public on() {
    console.debug("Turn on video player");
  }

  public play(movie: string) {
    console.debug(`Playing movie: ${movie}`);
  }

  public stop() {
    console.debug("Stopping video player");
  }

  public off() {
    console.debug("Turn off video player");
  }
}

class PopcornMaker {
  public on() {
    console.debug("Turn on popcorn maker");
  }
  public off() {
    console.debug("Turn off popcorn maker");
  }

  public poppingPopcorn() {
    console.debug("Popping popcorn");
  }

  public stopPoppingPopcorn() {
    console.debug("Stop popping popcorn");
  }
}

type HomeTheaterFacadeType = {
  projector: Projector;
  soundSystem: SoundSystem;
  videoPlayer: VideoPlayer;
  popcornMaker: PopcornMaker;
};

class HomeTheaterFacade {
  private projector: Projector;
  private soundSystem: SoundSystem;
  private videoPlayer: VideoPlayer;
  private popcornMaker: PopcornMaker;

  public constructor({
    popcornMaker,
    projector,
    soundSystem,
    videoPlayer,
  }: HomeTheaterFacadeType) {
    this.popcornMaker = popcornMaker;
    this.projector = projector;
    this.soundSystem = soundSystem;
    this.videoPlayer = videoPlayer;
  }

  public watchMovie(movieIn: string) {
    console.debug(`Preparing to watch movie: ${movieIn}`);
    this.projector.on();
    this.soundSystem.on();
    this.popcornMaker.on();
    this.popcornMaker.poppingPopcorn();
    this.videoPlayer.on();
    this.videoPlayer.play(movieIn);
    console.debug("Enjoy your movie...");
  }

  public endWatchingMovie() {
    console.debug("End watching movie");
    this.projector.off();
    this.soundSystem.off();
    this.popcornMaker.stopPoppingPopcorn();
    this.popcornMaker.off();
    this.videoPlayer.stop();
    this.videoPlayer.off();
  }
}

function main() {
  const projector: Projector = new Projector();
  const soundSystem: SoundSystem = new SoundSystem();
  const videoPlayer: VideoPlayer = new VideoPlayer();
  const popcornMaker: PopcornMaker = new PopcornMaker();

  const homeTheaterFacade: HomeTheaterFacade = new HomeTheaterFacade({
    projector,
    soundSystem,
    videoPlayer,
    popcornMaker,
  });

  homeTheaterFacade.watchMovie("Star Wars");
  homeTheaterFacade.endWatchingMovie();
}

main();
