import { COLORS } from "./helpers/colors.ts";
interface Approver {
  setNext(approver: Approver): Approver;
  approveRequest(amount: number): void;
}

abstract class BaseApprover implements Approver {
  private nextApprover: Approver | null = null;

  public setNext(approver: Approver): Approver {
    this.nextApprover = approver;
    return approver;
  }

  abstract approveRequest(amount: number): void;

  protected next(amount: number): void {
    if (this.nextApprover) {
      this.nextApprover.approveRequest(amount);
      return;
    }

    console.debug(`%cRequest of $${amount} could not be approved.`, COLORS.red);
  }
}

// 3. Clases Concretas de Aprobadores

class Supervisor extends BaseApprover {
  // TODO: Implementar el método approveRequest si el monto es menor o igual a 1000
  // TODO: Si el monto es mayor a 1000, pasar la solicitud al siguiente aprobador
  override approveRequest(amount: number): void {
    throw new Error("Method not implemented.");
  }
}

class Manager extends BaseApprover {
  //TODO: Implementar el método approveRequest si el monto es menor o igual a 5000
  // TODO: Si el monto es mayor a 5000, pasar la solicitud al siguiente aprobador

  override approveRequest(amount: number): void {
    throw new Error("Method not implemented.");
  }
}

class Director extends BaseApprover {
  // TODO: Implementar el método approveRequest si el monto
}

function main() {
  const supervisor: Supervisor = new Supervisor();
  const manager: Manager = new Manager();
  const director: Director = new Director();

  supervisor.setNext(manager).setNext(director);

  console.debug("500 USD Purchase Request:");
  supervisor.approveRequest(500);

  console.debug("3000 USD Purchase Request:");
  supervisor.approveRequest(3000);

  console.debug("7000 USD Purchase Request:");
  supervisor.approveRequest(7000);
}

main();
