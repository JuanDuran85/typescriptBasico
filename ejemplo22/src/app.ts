class Departament {

    private employees: string[] = [];
    // when you use protected for a property, that property is available in the other class
    protected budget: number[] = [];

    // You can use a short definition on the constructor
    constructor(public name: string, private readonly idUser: string){}

    describe(this: Departament){
        console.log(`Department: ${this.name}`);
        console.log(`Id User: ${this.idUser}`);
    }

    addEmployees(employee: string){
        this.employees.push(employee);
    }

    showEmployeeInformation(){
        console.log(`Employees: ${this.employees}`);
    }
}

class ItDepartament extends Departament{
    constructor(id: string, public admins: string[]){
        super(id, 'IT')
    }
}

class AccountingDepartament extends Departament{
    constructor(id: string, private reports: string[]){
        super(id, 'Accounting');
    }

    addReports(reportText: string){
        this.reports.push(reportText);;
    }

    getReports(){
        console.log(this.reports);
    }

    addBudget(newBudget: number) {
        if (newBudget < 1000) {
            console.error("Error: new budget")
        }
        this.budget.push(newBudget);
    }
}

const iTDepart = new ItDepartament("1a3S234d62",['Juan']);
iTDepart.describe();
iTDepart.addEmployees("Empleado 1");
iTDepart.addEmployees("Empleado 2");
iTDepart.addEmployees("Empleado 3");
iTDepart.showEmployeeInformation()

const iTDepartCopy = {
    name: "DUMMY",
    describe: iTDepart.describe
}

const accounting = new AccountingDepartament("43Fdd3sD",[]);

accounting.addBudget(3456);
accounting.addReports("Errors number one");
console.log({ accounting});

// accountingCopy.describe();

console.log({iTDepart});


