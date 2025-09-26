import { COLORS } from './helpers/colors.ts';

class CPU {
  public stopOperations(): void {
    console.debug('CPU: Stopping operations.');
  }

  public jump(position: number): void {
    console.debug(`CPU: Jumping to memory position ${position}.`);
  }

  public execute(): void {
    console.debug('CPU: Executing instructions.');
  }
}

class HardDrive {
  public read(position: number, size: number): string {
    console.debug(
      `HardDrive: Reading ${size} bytes from position ${position}.`
    );
    return '001010001010100';
  }

  public close(): void {
    console.debug('HardDrive: Stopping hard drive.');
  }
}

class Memory {
  public load(position: number, data: string): void {
    console.debug(`Memory: Loading data at position ${position} ${data}.`);
  }

  public free(): void {
    console.debug('Memory: Freeing memory.');
  }
}

// 2. Clase Facade - ComputerFacade

class ComputerFacade {
  // TODO: Agregar los atributos necesarios CPU, Memory y HardDrive

  // TODO: Agregar el constructor para instanciar los atributos CPU, Memory y HardDrive
  constructor() {}

  public startComputer(): void {
    console.debug('%cStarting the computer...', COLORS.cyan);

    // TODO: ejecutar las operaciones necesarias para encender la computadora
    // 1. Cargar el sistema operativo en la memoria - memory.load(0, hardDrive.read(0, 1024))
    // 2. Saltar a la posición de memoria 0 - cpu.jump(0)
    // 3. Ejecutar las instrucciones del CPU - cpu.execute()

    console.debug('Computer ready to use. \n');
  }

  public shutDownComputer(): void {
    console.debug('%cShutting down the computer...', COLORS.red);
    console.debug('Closing processes and saving data...');

    // TODO: ejecutar las operaciones necesarias para apagar la computadora
    // 1. Detener las operaciones del CPU - cpu.stopOperations()
    // 2. Liberar la memoria - memory.free()
    // 3. Cerrar el disco duro - hardDrive.close()

    console.debug('Computer shut down.\n');
  }
}

// 3. Código Cliente para Usar la Facade
// TODO: Aquí no hay nada que hacer, debe de encender la computadora y apagarla sin problemas
function main() {
  const computer = new ComputerFacade();

  // Encender la computadora usando la fachada
  computer.startComputer();

  // Apagar la computadora usando la fachada
  computer.shutDownComputer();
}

main();
