import { Employee, generateEmployee, sendWelcomeMessage } from "./src/functionsExa";

const John: Employee = generateEmployee("John", 1000);
const Jane: Employee = generateEmployee("Jane", 2000);
const allNewEmployee: Employee[] = [John, Jane];
console.debug({
  allNewEmployee,
});

allNewEmployee.forEach((value: Employee) => {
  sendWelcomeMessage(value);
});
