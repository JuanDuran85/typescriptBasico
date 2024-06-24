/**
 * Command Pattern
 */

// Command is a behavioral design pattern that turns a request into a stand-alone object, encapsulating
// the request as an object, thereby letting you parameterize clients with different requests, queue
// or log requests, and support undoable operations. 


interface CommandOne {
    execute(): void;
}

class ConcreteCommandOne implements CommandOne {
    public constructor(private receiver: ReceiverOne){}

    public execute(): void {
        this.receiver.action();
    }
}

class ReceiverOne {
    public action(): void {
        console.debug("ReceiverOne action - action called");
    }
}

class InvokerOne {
    private command: CommandOne;

    public setCommand(command: CommandOne): void {
        this.command = command;
    }

    public execute(): void {
        this.command.execute();
    }
}

const receiverOne = new ReceiverOne();
const commandOne = new ConcreteCommandOne(receiverOne);
const invokerOne = new InvokerOne();
invokerOne.setCommand(commandOne);
invokerOne.execute();