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

printEmployeeInformation({ name: "Juan", startDate: new Date(), active: true });
printEmployeeInformation(employeeOne);

//--------------------------------------------------------------------------------------

class Car {
  drive() {
    console.log("Driving a car...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo... ${amount}`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

const useVehicle = (vehicle: Vehicle): void => {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(100);
  }
};

useVehicle(v1);
useVehicle(v2);

//--------------------------------------------------------------------------------------------
// Discriminated union with interface and types

interface Bird {
  type: "bird";
  flyingSpeed: number;
}
interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

interface GetSwitchParameter {
  (animal: Animal): string;
}

const moveAnimal: GetSwitchParameter = (animal: Animal) => {
  let speed: number = 0;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }

  return `Moving at speed: ${speed}`;
};

console.log(
  moveAnimal({
    type: "bird",
    flyingSpeed: 45,
  })
);

//--------------------------------------------------------------------------------------------
// Type casting

// first way
const userInputElement = <HTMLInputElement>(
  document.getElementById("user__input")!
);
userInputElement.value = "alternativa uno para casting";

// second way
const userInputElementTwo = document.getElementById(
  "user__input__two"
)! as HTMLInputElement;
userInputElementTwo.value = "alternativa dos para casting";

// third way
const userInputElementThree = document.getElementById("user__input__two");
if (userInputElementThree) {
  (userInputElementThree as HTMLInputElement).value =
    "alternativa tres para casting";
}

//--------------------------------------------------------------------------------------------
// Index Properties

interface ErrorContainerType {
  [prop: string]: string;
}

const errorIn: ErrorContainerType = {
  email: "email in",
  username: "username in",
};

//--------------------------------------------------------------------------------------------
// Function Overloads

type CombinableIn = string | number;

function overloadCalculator(a: number, b: number): number;
function overloadCalculator(a: string, b: string): string;
function overloadCalculator(a: CombinableIn, b: CombinableIn) {
  if (typeof a === "string" || typeof b === "string")
    return a.toString() + b.toString();
  return a + b;
}

const resultOverload = overloadCalculator("one","two");
console.log(resultOverload.split(' - '));

//--------------------------------------------------------------------------------------------
// Optional Chaining
// you can use '?' for objects to avoid undefined errors
const fetchUserDataOne = {
  id: 0,
  name: 'Noah',
  job: {
    title: 'Dev',
    description: 'actuating'
  }
}

console.log(fetchUserDataOne?.job?.description);

//--------------------------------------------------------------------------------------------
// Nullish coalescing
// you can use '??' to avoid enties string o default values

const inputOne = undefined;
const storeData = inputOne ?? 'Default values';
console.log(storeData);
