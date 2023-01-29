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
        console.log(`Name Department: ${this.nameDepartment}. Id: ${this.idDepartment}`);;
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
        console.log(`Employees: ${this.employees}`);
    }
    
    deleteEmployee(): void {
        this.employees--;
        console.log(`Employees: ${this.employees}`);
    }
}

const rrhhDepart = new HumanDepartment();
console.log(rrhhDepart);
rrhhDepart.readDepartment();
rrhhDepart.createEmployee();
rrhhDepart.createEmployee();
rrhhDepart.createEmployee();
console.log(rrhhDepart.readEmployees());
rrhhDepart.deleteEmployee()
console.log(rrhhDepart.readEmployees());
rrhhDepart.deleteEmployee()
console.log(rrhhDepart.readEmployees());