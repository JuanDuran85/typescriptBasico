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

  public abstract approveRequest(amount: number): void;

  protected next(amount: number): void {
    if (this.nextApprover) {
      this.nextApprover.approveRequest(amount);
      return;
    }

    console.debug(`%cRequest of $${amount} could not be approved.`, COLORS.red);
  }
}

class Supervisor extends BaseApprover {
  public override approveRequest(amount: number): void {
    if (amount <= 1000) {
      console.debug(
        `%cSupervisor approved request of $${amount}.`,
        COLORS.green
      );
      return;
    }

    console.debug(
      `%cSupervisor can not approved this request of $${amount}.`,
      COLORS.red
    );
    super.next(amount);
  }
}

class Manager extends BaseApprover {
  public override approveRequest(amount: number): void {
    if (amount <= 5000) {
      console.debug(`%cManager approved request of $${amount}.`, COLORS.blue);
      return;
    }

    console.debug(
      `%cManager can not approved this request of $${amount}.`,
      COLORS.red
    );
    super.next(amount);
  }
}

class Director extends BaseApprover {
  public override approveRequest(amount: number): void {
    if (amount > 5000) {
      console.debug(
        `%cDirector approved request of $${amount}.`,
        COLORS.yellow
      );
      return;
    }

    console.debug("%cDirector can not approved this request.", COLORS.red);
  }
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
