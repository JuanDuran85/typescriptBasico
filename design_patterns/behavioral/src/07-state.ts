import { COLORS } from "./helpers/colors.ts";

interface StateInterface {
  name: string;
  insertMoney(): void;
  selectProduct(): void;
  dispenseProduct(): void;
}

class VendingMachine {
  private stateVendingMachine: StateInterface;

  constructor() {}

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
  private name: string = "WaitingForMoney";
  private vendingMachine: VendingMachine;

  constructor(vendingMachineIn: VendingMachine) {
    this.vendingMachine = vendingMachineIn;
  }

  public insertMoney(): void {
    console.debug(`Money Inserted. %cPlease, select a product...`, COLORS.blue);
  }
  public selectProduct(): void {
    console.debug(`First... %cYou need to insert your money`, COLORS.red);
  }
  public dispenseProduct(): void {
    console.debug(`First... %cYou need to insert your money`, COLORS.red);
  }
}

class ProductSelected implements StateInterface {
  private name: string = "ProductSelected";
  private vendingMachine: VendingMachine;

  constructor(vendingMachineIn: VendingMachine) {
    this.vendingMachine = vendingMachineIn;
  }

  public insertMoney(): void {
    console.debug(`You need to select a product first`, COLORS.red);
  }
  public selectProduct(): void {
    this.vendingMachine.setActualState();
  }
  public dispenseProduct(): void {
    console.debug(`First... %cYou need to select a product first`, COLORS.red);
  }
}

class DispensingProduct implements StateInterface {
  private name: string = "DispensingProduct";
  private vendingMachine: VendingMachine;

  constructor(vendingMachineIn: VendingMachine) {
    this.vendingMachine = vendingMachineIn;
  }

  public insertMoney(): void {
    console.debug(
      `You need to wait for the product to be dispensed`,
      COLORS.red
    );
  }
  public selectProduct(): void {
    console.debug(`The product was dispensed.`, COLORS.red);
  }
  public dispenseProduct(): void {
    console.debug(`%cProduct dispensed`, COLORS.green);
    this.vendingMachine.setActualState(new WaitingForMoney());
  }
}
