import { User, WhatEverDataBase } from "../../app/doubles/otherUtilsTwo";

describe('WhatEverDataBase unit test', () => {
    it('should insert user', () => {
        const userTestInstance: User[] = new Array<User>();
        const sut: WhatEverDataBase = new WhatEverDataBase(userTestInstance);
        const userOne: User = {
            name: "Jonh",
            age: 30,
        }

        sut.addUser(userOne);

        const actualName: User = sut.getuserByName(userOne.name);
        expect(actualName).toStrictEqual(userOne);
        expect(actualName.name).toEqual(userOne.name);
    });
});