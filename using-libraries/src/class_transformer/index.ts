import axios, { AxiosResponse } from "axios";
import { plainToInstance, Type } from "class-transformer";
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

export abstract class Photo {
  id: number;
  filename: string;
}

export class Landscape extends Photo {
  panorama: boolean;
}

export class Portrait extends Photo {
  person: UserClassTransformet;
}

export class UnderWater extends Photo {
  depth: number;
}

export class Album {
  id: number;
  name: string;

  @Type(() => Photo, {
    discriminator: {
      property: "__type",
      subTypes: [
        { value: Landscape, name: "landscape" },
        { value: Portrait, name: "portrait" },
        { value: UnderWater, name: "underwater" },
      ],
    },
  })
  topPhoto: Landscape | Portrait | UnderWater;
}

async function resultGetApi() {
  const result: AxiosResponse<UserClassTransformet[], any> = await axios.get(
    "http://localhost:3000/users"
  );

  const instanceUserFull = plainToInstance(UserClassTransformet, result.data);
  console.debug(instanceUserFull);
  console.debug(instanceUserFull[0].getName());
}

async function resultGetApiTwo() {
  const result: AxiosResponse<Album[], any> = await axios.get(
    "http://localhost:3000/users"
  );

  const instanceUserFull = plainToInstance(Album, result.data);
  console.debug(instanceUserFull);
}

//resultGetApi();
resultGetApiTwo();
