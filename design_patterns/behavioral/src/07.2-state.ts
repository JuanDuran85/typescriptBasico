import { COLORS } from "./helpers/colors.ts";
import { sleep } from "./helpers/sleep.ts";

interface State {
  name: string;

  open(): void;
  close(): void;
}

class AutomaticDoor {
  private state: State;

  constructor() {
    this.state = new Closed(this);
  }

  public setState(state: State): void {
    this.state = state;
    console.debug(`%cState changed to: ${state.name}`, COLORS.green);
  }

  public open(): void {
    this.state.open();
  }

  public close(): void {
    this.state.close();
  }

  public getStateName(): string {
    return this.state.name;
  }
}

class Closed implements State {
  private door: AutomaticDoor;
  public name: string;

  constructor(doorIn: AutomaticDoor) {
    this.door = doorIn;
    this.name = "Closed";
  }

  public open(): void {
    console.debug("Opening the door...");
    this.door.setState(new Opening(this.door));
  }

  public close(): void {
    console.debug("The door is already closed.");
  }
}

class Opening implements State {
  public name: string = "Opening";
  private door: AutomaticDoor;

  constructor(door: AutomaticDoor) {
    this.door = door;
    this.afterOpen();
  }

  private async afterOpen() {
    await sleep(3000);

    console.debug("The door has opened.");
    this.door.setState(new Open(this.door));
  }

  public open(): void {
    console.debug("The door is already opening.");
  }

  public close(): void {
    console.debug("The door cannot be closed while opening.");
  }
}

class Open implements State {
  private door: AutomaticDoor;
  public name: string = "Open";

  constructor(door: AutomaticDoor) {
    this.door = door;
  }

  public open(): void {
    console.debug("The door is already open.");
  }

  public close(): void {
    console.debug("Closing the door...");
    this.door.setState(new Closing(this.door));
  }
}

class Closing implements State {
  public name: string;
  private door: AutomaticDoor;

  constructor(door: AutomaticDoor) {
    this.door = door;
    this.name = "Closing";

    this.afterClose();
  }

  public open(): void {
    console.debug("Detecting movement. Opening the door again...");
    this.door.setState(new Opening(this.door));
  }

  private async afterClose() {
    await sleep(3000);

    console.debug("The door has closed.");
    this.door.setState(new Closed(this.door));
  }

  public close(): void {
    console.debug("The door has closed.");
    this.door.setState(new Closed(this.door));
  }
}

async function main() {
  const door: AutomaticDoor = new AutomaticDoor();

  let selectedOption: string | null = "3";

  do {
    console.clear();
    console.debug(`Current state: ${door.getStateName()}`);
    selectedOption = prompt(`
      1. Open door
      2. Close door
      3. Exit

      Select an option: 
    `);

    switch (selectedOption) {
      case "1":
        door.open();
        break;
      case "2":
        door.close();
        break;
      case "3":
        console.debug("Exiting the simulator...");
        break;
      default:
        console.debug("Invalid option.");
        break;
    }

    await sleep(2000);
  } while (selectedOption !== "3");
}

main();
