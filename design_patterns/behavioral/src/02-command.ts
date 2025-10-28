import { COLORS } from "./helpers/colors.ts";

interface Command {
  execute(): void;
}

class Light {
  public turnOn(): void {
    console.debug("%cLight turn ON", COLORS.green);
  }

  public turnOff(): void {
    console.debug("%cLight turn OFF", COLORS.red);
  }
}

class Fan {
  public on(): void {
    console.debug("%cFan ON", COLORS.blue);
  }

  public off(): void {
    console.debug("%cFan OFF", COLORS.red);
  }
}

// commands

class LightOnCommand implements Command {
  constructor(private light: Light) {}

  public execute(): void {
    this.light.turnOn();
  }
}

class LightOffCommand implements Command {
  constructor(private light: Light) {}

  public execute(): void {
    this.light.turnOff();
  }
}

class FanOnCommand implements Command {
  constructor(private fan: Fan) {}

  public execute(): void {
    this.fan.on();
  }
}

class FanOffCommand implements Command {
  constructor(private fan: Fan) {}

  public execute(): void {
    this.fan.off();
  }
}

class RemoteControl {
  private commandSlots: Record<string, Command> = {};

  public setCommand(button: string, command: Command): void {
    this.commandSlots[button] = command;
  }

  public pressButton(button: string): void {
    if (this.commandSlots[button]) {
      this.commandSlots[button].execute();
      return;
    }
    console.debug("Button command do not exist");
  }
}

function main() {
  const remote: RemoteControl = new RemoteControl();
  const light: Light = new Light();
  const fan: Fan = new Fan();

  // set commands to devices
  remote.setCommand("1", new LightOnCommand(light));
  remote.setCommand("2", new LightOffCommand(light));
  remote.setCommand("3", new FanOnCommand(fan));
  remote.setCommand("4", new FanOffCommand(fan));

  let continueProgram: boolean = true;

  while (continueProgram) {
    const input: string =
      prompt(`Choose an option:
            1: Turn ON Light
            2: Turn OFF Light
            3: Turn ON Fan
            4: Turn OFF Fan
            5: Exit

            Button:
    `) ?? " ";

    if (input === "5") {
      continueProgram = false;
      continue;
    }

    remote.pressButton(input);
  }
}

main();
