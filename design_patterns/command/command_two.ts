/**
 * Command Pattern
 * Command is a behavioral design pattern that turns a request into a stand-alone object that contains all
 * information about the request. This transformation lets you pass requests as a method arguments, delay or
 * queue a request’s execution, and support undoable operations.
 */

interface CommandTwo {
  name: string;
  execute(args: unknown): unknown;
}

class CommandManagerTwo {
  private commands: Record<string, CommandTwo> = {};

  public registerCommand(name: string, command: CommandTwo): void {
    this.commands[name] = command;
  }

  public executeCommand(command: string | CommandTwo, arg: unknown): void {
    if (typeof command === "string") {
      this.commands[command].execute(arg);
    } else {
      command.execute(arg);
    }
  }
}

class OpenUrlCommandTwo implements CommandTwo {
  public name: string;
  public execute(args: unknown): void {
    console.debug(`Openurl: ${args}`);
  }
}

class SendMesaageCommandTwo implements CommandTwo {
  public name: string;
  public execute(args: unknown): void {
    console.debug(`Send message: ${args}`);
  }
}

class UIEventHandlerTwo {
  public constructor(public cdmManager: CommandManagerTwo) {}

  public handleAction(command: string | CommandTwo, arg: unknown): void {
    this.cdmManager.executeCommand(command, arg);
  }
}

const commandManaggerTwo: CommandManagerTwo = new CommandManagerTwo();

const openURLInstance: OpenUrlCommandTwo = new OpenUrlCommandTwo();
commandManaggerTwo.registerCommand("openURL", openURLInstance);

const sendMessageInstance: SendMesaageCommandTwo = new SendMesaageCommandTwo();
commandManaggerTwo.registerCommand("mes", sendMessageInstance);

const eventHandler: UIEventHandlerTwo = new UIEventHandlerTwo(
  commandManaggerTwo
);
eventHandler.handleAction("openURL", "https://www.google.com");
eventHandler.handleAction("mes", "Hello");
