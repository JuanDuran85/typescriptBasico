import axios, { AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";
import "reflect-metadata";
import "es6-shim";

class UserClassTransformet {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public age: number
  ) {}

  getName() {
    return `${this.firstName} ${this.lastName}`;
  }

  isAdult() {
    return this.age > 36 && this.age < 60;
  }
}

async function resultGetApi() {
  const result: AxiosResponse<UserClassTransformet[], any> = await axios.get(
    "http://localhost:3000/users"
  );

  const instanceUserFull = plainToInstance(UserClassTransformet, result.data);
  console.log(instanceUserFull);
  console.log(instanceUserFull[0].getName());

  result.data.forEach((values: UserClassTransformet) => {
    console.log(values.getName()); // ERROR: values.getName is not a function
  });
}

resultGetApi();
