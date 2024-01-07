class Departament {
  private employees: string[] = [];
  // when you use protected for a property, that property is available in the other class
  protected budget: number[] = [];

  // You can use a short definition on the constructor
  public constructor(public name: string, private readonly idUser: string) {}

  public describe(this: Departament) {
    console.debug(`Department: ${this.name}`);
    console.debug(`Id User: ${this.idUser}`);
  }

  public addEmployees(employee: string) {
    this.employees.push(employee);
  }

  public showEmployeeInformation() {
    console.debug(`Employees: ${this.employees}`);
  }
}

class ItDepartament extends Departament {
  public constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
}

class AccountingDepartament extends Departament {
  private lastReport: string | undefined;

  public constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[this.reports.length - 1];
  }

  public get mostRecentReports() {
    if (this.lastReport) return this.lastReport;
    throw new Error("No report available");
  }

  public set mostRecentReports(newValue: string) {
    if (!newValue) throw new Error("Pless pass in a valid value");
    this.addReports(newValue);
  }

  public addReports(reportText: string) {
    this.reports.push(reportText);
    this.lastReport = reportText;
  }

  public getReports() {
    console.debug(this.reports);
  }

  public addBudget(newBudget: number) {
    if (newBudget < 1000) {
      console.error("Error: new budget");
    }
    this.budget.push(newBudget);
  }
}

const iTDepart = new ItDepartament("1a3S234d62", ["Juan"]);
iTDepart.describe();
iTDepart.addEmployees("Empleado 1");
iTDepart.addEmployees("Empleado 2");
iTDepart.addEmployees("Empleado 3");
iTDepart.showEmployeeInformation();

const iTDepartCopy = {
  name: "DUMMY",
  describe: iTDepart.describe,
};

console.debug({ iTDepartCopy });

const accounting = new AccountingDepartament("43Fdd3sD", []);

accounting.addBudget(3456);
accounting.addReports("Errors number one");
console.debug({ accounting });

//@ts-nocheck
// accountingCopy.describe();

console.debug({ iTDepart });