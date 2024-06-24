/**
 * Abstract Classes

    * Abstract classes are base classes from which other classes may be derived. They may not be instantiated directly. Unlike an interface, an abstract class may contain implementation details for its members. The abstract keyword is used to define abstract classes as well as abstract methods within an abstract class.

 *
 *
 *
 *
*/


abstract class Department {
    protected employees: number = 0;

    constructor(public nameDepartment: string, protected idDepartment: string){}

    readDepartment(){
        console.debug(`Name Department: ${this.nameDepartment}. Id: ${this.idDepartment}`);;
    }

    abstract readEmployees(): number;

    abstract createEmployee():void;

    abstract deleteEmployee():void;
}

class HumanDepartment extends Department {
    constructor(){
        super("Human Department", "RRHH2022");
    }

    readEmployees(): number {
        return this.employees;
    }

    createEmployee(): void {
        this.employees++;
        console.debug(`Employees: ${this.employees}`);
    }

    deleteEmployee(): void {
        this.employees--;
        console.debug(`Employees: ${this.employees}`);
    }
}

const rrhhDepart = new HumanDepartment();
console.debug(rrhhDepart);
rrhhDepart.readDepartment();
rrhhDepart.createEmployee();
rrhhDepart.createEmployee();
rrhhDepart.createEmployee();
console.debug(rrhhDepart.readEmployees());
rrhhDepart.deleteEmployee()
console.debug(rrhhDepart.readEmployees());
rrhhDepart.deleteEmployee()
console.debug(rrhhDepart.readEmployees());