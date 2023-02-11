/**
 *
 * Working with types
 *
 */

// Intersection types
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
  active: boolean;
};

type EmployeeInformation = Admin & Employee;

const employeeOne: EmployeeInformation = {
  name: "Employee One",
  privileges: ["Admin-User"],
  startDate: new Date(),
  active: true,
};

// When you use an intersection, only the types between repeating or most common are passed to the variable.
type Combinable = number | string;
type Numerics = boolean | number;
type Universal = Combinable & Numerics;

const uiversalValue: Universal = 4;

function addNumbers(x1: Combinable, x2: Combinable): string | number {
  // type guards using typeof
  if (typeof x1 === "string" || typeof x2 === "string")
    return x1.toString() + x2.toString();
  return x1 + x2;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(employeeIn: UnknownEmployee): void {
  console.log(`Nombre: ${employeeIn.name}`);
  if ("privileges" in employeeIn)
    console.log(`Privileges to ${employeeIn.name}: ${employeeIn.privileges}`);

 if ("startDate" in employeeIn)
    console.log(`Start Date for ${employeeIn.name}: ${employeeIn.startDate}`);
}

printEmployeeInformation({name: 'Juan', startDate: new Date(), active: true});
printEmployeeInformation(employeeOne);
