class Departament {

    private employees: string[] = [];

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

const accounting = new Departament("Nombre",'34532121ADF');
accounting.describe();
accounting.addEmployees("Empleado 1");
accounting.addEmployees("Empleado 2");
accounting.addEmployees("Empleado 3");
accounting.showEmployeeInformation()

const accountingCopy = {
    name: "DUMMY",
    describe: accounting.describe
}

// accountingCopy.describe();


