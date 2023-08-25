import { User, WhatEverDataBase } from "../../app/doubles/otherUtilsTwo";

describe("WhatEverDataBase unit test", () => {
  it("should insert an user", () => {
    const userTestInstance: User[] = new Array<User>();
    const sut: WhatEverDataBase = new WhatEverDataBase(userTestInstance);
    const userOne: User = {
      name: "Jonh",
      age: 30,
    };

    sut.addUser(userOne);

    const actualName: User = sut.getUserByName(userOne.name);
    expect(actualName).toStrictEqual(userOne);
    expect(actualName.name).toEqual(userOne.name);
  });

  it("should insert an user using spyOn", () => {
    const userTestInstance: User[] = new Array<User>();
    const sut: WhatEverDataBase = new WhatEverDataBase(userTestInstance);

    const addUserMethodSpy: jest.SpyInstance<void, [user: User], any> =
      jest.spyOn(sut, "addUser");
    const getUserByNameSpy: jest.SpyInstance<User, [name: string], any> =
      jest.spyOn(sut, "getUserByName");

    const userOne: User = {
      name: "John",
      age: 30,
    };

    sut.addUser(userOne);
    sut.getUserByName("John");

    expect(addUserMethodSpy).toHaveBeenCalledWith(userOne);
    expect(getUserByNameSpy).toHaveBeenCalledWith("John");
  });

  it("should insert an user and call the right methods ones", () => {
    const arrayMock = {
      push: jest.fn(),
      find: jest.fn(),
    };

    const sut = new WhatEverDataBase(arrayMock as any);
    const userOne: User = {
      name: "John",
      age: 30,
    };

    sut.addUser(userOne);
    sut.getUserByName('John');

    expect(arrayMock.find).toHaveBeenCalledTimes(1);
    expect(arrayMock.push).toHaveBeenCalledTimes(1);
  });
});
