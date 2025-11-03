import { COLORS } from "./helpers/colors.ts";
import { sleep } from "./helpers/sleep.ts";

interface StateInterface {
  name: string;
  insertMoney(): void;
  selectProduct(): void;
  dispenseProduct(): void;
}

class VendingMachine {
  private stateVendingMachine: StateInterface;

  constructor() {
    this.stateVendingMachine = new WaitingForMoney(this);
  }

  public insertMoney(): void {
    this.stateVendingMachine.insertMoney();
  }
  public selectProduct(): void {
    this.stateVendingMachine.selectProduct();
  }
  public dispenseProduct(): void {
    this.stateVendingMachine.dispenseProduct();
  }

  public getActualState(): string {
    return this.stateVendingMachine.name;
  }

  public setActualState(newStateIn: StateInterface): void {
    const actualState: string =
      this.stateVendingMachine.name || "NoStateDefined";
    this.stateVendingMachine = newStateIn;

    console.debug(
      `State has been changed from ${actualState} to %c${newStateIn.name}`,
      COLORS.yellow
    );
  }
}

class WaitingForMoney implements StateInterface {
  public name: string = "WaitingForMoney";
  private vendingMachine: VendingMachine;

  constructor(vendingMachineIn: VendingMachine) {
    this.vendingMachine = vendingMachineIn;
  }

  public insertMoney(): void {
    console.debug(`Money Inserted. %cPlease, select a product...`, COLORS.blue);
    this.vendingMachine.setActualState(
      new ProductSelected(this.vendingMachine)
    );
  }
  public selectProduct(): void {
    console.debug(`First... %cYou need to insert your money`, COLORS.red);
  }
  public dispenseProduct(): void {
    console.debug(`First... %cYou need to insert your money`, COLORS.red);
  }
}

class ProductSelected implements StateInterface {
  public name: string = "ProductSelected";
  private vendingMachine: VendingMachine;

  constructor(vendingMachineIn: VendingMachine) {
    this.vendingMachine = vendingMachineIn;
  }

  public insertMoney(): void {
    console.debug(`%cYou need to select a product first`, COLORS.red);
  }
  public selectProduct(): void {
    this.vendingMachine.setActualState(
      new DispensingProduct(this.vendingMachine)
    );
  }
  public dispenseProduct(): void {
    console.debug(`First... %cYou need to select a product first`, COLORS.red);
  }
}

class DispensingProduct implements StateInterface {
  public name: string = "DispensingProduct";
  private vendingMachine: VendingMachine;

  constructor(vendingMachineIn: VendingMachine) {
    this.vendingMachine = vendingMachineIn;
  }

  public insertMoney(): void {
    console.debug(
      `%cYou need to wait for the product to be dispensed`,
      COLORS.red
    );
  }
  public selectProduct(): void {
    console.debug(`%cThe product was dispensed.`, COLORS.red);
  }
  public dispenseProduct(): void {
    console.debug(`%cProduct dispensed`, COLORS.green);
    this.vendingMachine.setActualState(
      new WaitingForMoney(this.vendingMachine)
    );
  }
}

async function main() {
  const vendingMachine: VendingMachine = new VendingMachine();

  let selectedOption: string | null = "4";

  do {
    console.clear();
    console.debug(
      `Select an option: %c${vendingMachine.getActualState()}`,
      COLORS.orange
    );

    selectedOption = prompt(`
      1. Insert Money
      2. Select Product
      3. Dispense Product
      4. Exit

      option: `);

    switch (selectedOption) {
      case "1":
        vendingMachine.insertMoney();
        break;
      case "2":
        vendingMachine.selectProduct();
        break;
      case "3":
        vendingMachine.dispenseProduct();
        break;
      case "4":
        console.debug("Exiting program...");
        break;

      default:
        console.debug("Invalid option.");
        break;
    }

    await sleep(3000);
  } while (selectedOption !== "4");
}

main();
