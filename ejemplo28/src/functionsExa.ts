import { randomBytes } from "crypto";

export type Employee = {
  name: string;
  startDate: Date;
  active: boolean;
  salary: number;
  email: string;
  id: string;
};

export function generateRandomId() {
  return randomBytes(8).toString("hex");
}

export function generateEmployee(
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


export const sendWelcomeMessage = (employeeIn: Employee) => {
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

