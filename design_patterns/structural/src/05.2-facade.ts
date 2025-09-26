import { COLORS } from "./helpers/colors.ts";

class CPU {
  public stopOperations(): void {
    console.debug("CPU: Stopping operations.");
  }

  public jump(position: number): void {
    console.debug(`CPU: Jumping to memory position ${position}.`);
  }

  public execute(): void {
    console.debug("CPU: Executing instructions.");
  }
}

class HardDrive {
  public read(position: number, size: number): string {
    console.debug(
      `HardDrive: Reading ${size} bytes from position ${position}.`
    );
    return "001010001010100";
  }

  public close(): void {
    console.debug("HardDrive: Stopping hard drive.");
  }
}

class Memory {
  public load(position: number, data: string): void {
    console.debug(`Memory: Loading data at position ${position} ${data}.`);
  }

  public free(): void {
    console.debug("Memory: Freeing memory.");
  }
}

type ComputerFacadeType = {
  cpu: CPU;
  memory: Memory;
  hardDrive: HardDrive;
};

class ComputerFacade {
  private cpu: CPU = new CPU();
  private memory: Memory = new Memory();
  private hardDrive: HardDrive = new HardDrive();

  public startComputer(): void {
    console.debug("%cStarting the computer...", COLORS.cyan);
    this.memory.load(0, this.hardDrive.read(0, 1024));
    this.cpu.jump(0);
    this.cpu.execute();

    console.debug("Computer ready to use. \n");
  }

  public shutDownComputer(): void {
    console.debug("%cShutting down the computer...", COLORS.red);
    console.debug("Closing processes and saving data...");

    this.cpu.stopOperations();
    this.memory.free();
    this.hardDrive.close();

    console.debug("Computer shut down.\n");
  }
}

function main() {
  const computer: ComputerFacade = new ComputerFacade();
  computer.startComputer();
  computer.shutDownComputer();
}

main();
