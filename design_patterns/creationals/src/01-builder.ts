class Computer {
  public cpu: string = "CPU - not defined";
  public ram: string = "RAM - not defined";
  public hdd: string = "HDD - not defined";
  public gpu?: string = "GPU - not defined";

  public displayConfiguration(): void {
    console.log(`
            Computer Configuration:
            CPU: ${this.cpu}
            RAM: ${this.ram}
            HDD: ${this.hdd}
            GPU: ${this.gpu ? this.gpu : "Not defined"}    
        `);
  }
}

class ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.computer = new Computer();
  }
  public setCPU(cpu: string): ComputerBuilder {
    this.computer.cpu = cpu;
    return this;
  }

  public setRAM(ram: string): ComputerBuilder {
    this.computer.ram = ram;
    return this;
  }

  public setHDD(hdd: string): ComputerBuilder {
    this.computer.hdd = hdd;
    return this;
  }

  public setGPU(gpu: string): ComputerBuilder {
    this.computer.gpu = gpu;
    return this;
  }

  public build(): Computer {
    return this.computer;
  }
}

function main() {
  const computerBuilder: Computer = new ComputerBuilder()
    .setCPU("Intel Core i7")
    .setRAM("16GB")
    .setHDD("1TB")
    .build();
  computerBuilder.displayConfiguration();
}

main();
