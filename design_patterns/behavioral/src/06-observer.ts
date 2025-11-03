import { COLORS } from "./helpers/colors.ts";

interface Observer {
  notify(videoTitle: string): void;
}

class YouTubeChannel {
  private subscribers: Observer[] = [];
  private name: string;

  constructor(nameIn: string) {
    this.name = nameIn;
  }

  public subscribe(observerIn: Observer): void {
    this.subscribers.push(observerIn);
    console.debug(
      `Adding New Channel Subscriber: %c${this.name}`,
      COLORS.green
    );
  }

  public unSubscribe(observerIn: Observer): void {
    this.subscribers = this.subscribers.filter(
      (observer: Observer) => observer !== observerIn
    );
    console.debug(`Unsubscribe Channel from: ${this.name}`);
  }

  public uploadVideo(videoTitle: string) {
    console.debug(`New video add to channel: ${this.name} by ${videoTitle}`);
    for (const sub of this.subscribers) sub.notify(videoTitle);
  }
}

class Subscriber implements Observer {
  private name: string;
  constructor(nameIn: string) {
    this.name = nameIn;
  }
  public notify(videoTitle: string): void {
    console.debug(`Notified ${this.name} by ${videoTitle}`);
  }
}

function main() {
  const newChannel: YouTubeChannel = new YouTubeChannel("Test Channel 01");

  const Melisa: Subscriber = new Subscriber("Melisa");
  const lucas: Subscriber = new Subscriber("Lucas");

  newChannel.subscribe(Melisa);
  newChannel.subscribe(lucas);

  newChannel.uploadVideo("First Video");
  newChannel.unSubscribe(Melisa);
  newChannel.uploadVideo("Second Video");

  newChannel.unSubscribe(lucas);
  newChannel.uploadVideo("Third Video");
}

main();
