import { randomBytes } from "crypto";

type Employee = {
  name: string;
  startDate: Date;
  active: boolean;
  salary: number;
  email: string;
  id: string;
};

function generateRandomId() {
  return randomBytes(8).toString("hex");
}

function generateEmployee(
  employeeName: string,
  employeeSalary: number
): Employee {
  return {
    name: employeeName,
    startDate: new Date(),
    active: true,
    salary: employeeSalary,
    email: `${employeeName}@companyABC.com`,
    id: generateRandomId(),
  };
}

const John = generateEmployee("John", 1000);
const Jane = generateEmployee("Jane", 2000);
const allNewEmployee = [John, Jane];
console.debug({
  allNewEmployee,
});

const sendWelcomeMessage = (employeeIn: Employee) => {
  const { active, id, name, salary, startDate, email } = employeeIn;
  if (active) {
    console.debug(`To: ${name} - ID: ${id} - Email: ${email}`);
    console.info(
      `Hello ${name}. Welcome to our company. Your initial salary well be: ${salary}. And your inscrition date is: ${startDate}`
    );
  } else {
    console.error("Error: Employee is not active");
  }
};

allNewEmployee.forEach((value: Employee) => {
  sendWelcomeMessage(value);
});
