import { COLORS } from "./helpers/colors.ts";

class ControlTower {
  private airplanes: Airplane[] = [];

  public registerAirplane(airplane: Airplane): void {
    this.airplanes.push(airplane);
  }

  public sendMessage(sender: Airplane, message: string): void {
    const airplanesToSendMessage: Airplane[] = this.airplanes.filter(
      (plane) => plane !== sender
    );
    for (const airplane of airplanesToSendMessage) {
      airplane.receiveMessage(sender, message);
    }
  }

  public requestLanding(sender: Airplane): void {
    console.debug(
      `\n%cControl Tower: %cLanding permission granted to ${sender.getId()}`,
      COLORS.green,
      COLORS.white
    );

    this.sendMessage(sender, `${sender.getId()} is landing.`);
  }

  public requestTakeoff(sender: Airplane): void {
    console.debug(
      `\n%cControl Tower: %cTakeoff permission granted to ${sender.getId()}`,
      COLORS.green,
      COLORS.white
    );

    this.sendMessage(sender, `${sender.getId()} is taking off.`);
  }
}

class Airplane {
  private id: string;
  private controlTower: ControlTower;

  constructor(id: string, controlTower: ControlTower) {
    this.id = id;
    this.controlTower = controlTower;

    controlTower.registerAirplane(this);
  }

  public getId(): string {
    return this.id;
  }

  public requestLanding(): void {
    console.debug(`${this.id} requests permission to land.`);
    this.controlTower.requestLanding(this);
  }

  public requestTakeoff(): void {
    console.debug(`${this.id} requests permission to take off.`);
    this.controlTower.requestTakeoff(this);
  }

  public receiveMessage(sender: Airplane, message: string): void {
    console.debug(
      `${this.id} receives message from %c${sender.getId()}: "${message}"`,
      COLORS.blue
    );
  }
}

function main(): void {
  const controlTower: ControlTower = new ControlTower();

  const airplane1: Airplane = new Airplane("Fly 101", controlTower);
  const airplane2: Airplane = new Airplane("Fly 202", controlTower);
  const airplane3: Airplane = new Airplane("Fly 303", controlTower);

  airplane1.requestLanding();
  airplane2.requestTakeoff();
  airplane3.requestLanding();
}

main();
