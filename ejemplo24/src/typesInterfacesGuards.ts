/**
 * 
 * Working with types
 * 
 */

// Intersection types
type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
    active: boolean;
}

type EmployeeInformation = Admin & Employee;

const employeeOne: EmployeeInformation = {
    name: 'Employee One',
    privileges: ["Admin"],
    startDate: new Date(),
    active: true
}

// When you use an intersection, only the types between repeating or most common are passed to the variable.
type Combinable = number | string;
type Numerics = boolean | number;
type Universal = Combinable & Numerics;

const uiversalValue: Universal = 4;

