import { DataBase } from "../../data/DataBase";
import * as IdGenerator from "../../data/IdGenerator";

type SomeTypeWithId = {
  id: string;
  name: string;
  color: string;
};

describe("DataBase unit test suit", () => {
  let sut: DataBase<SomeTypeWithId>;
  const fakeId: string = "fghe6453FHJDH45";
  const someObjectFullOne: SomeTypeWithId = {
    id: "",
    name: "someName",
    color: "green",
  };
  const someObjectFullTwo: SomeTypeWithId = {
    id: "",
    name: "Name Two",
    color: "green",
  };

  beforeEach(() => {
    sut = new DataBase<SomeTypeWithId>();
    jest.spyOn(IdGenerator, "generateRandomId").mockReturnValue(fakeId);
  });

  it("should return id after insert method", async () => {
    const actual: string = await sut.insert({
      id: "",
    } as any);

    expect(actual).toEqual(fakeId);
  });

  it("should get one element after insert method using getBy method", async () => {
    const id: string = await sut.insert(someObjectFullOne);
    const actual: SomeTypeWithId = await sut.getBy("id", id);
    expect(actual).toEqual(someObjectFullOne);
  });

  it("should get all the element with the same property after insert method using findAllBy method", async () => {
    await sut.insert(someObjectFullOne);
    await sut.insert(someObjectFullTwo);

    const expected: SomeTypeWithId[] = [someObjectFullOne, someObjectFullTwo];

    const actual: SomeTypeWithId[] = await sut.findAllBy("color", "green");

    expect(actual).toEqual(expected);
  });

  it("should update an element by a specific property using update method", async () => {
    const id = await sut.insert(someObjectFullTwo);

    await sut.update(id, "color", "black");
    const colorExpected: string = "black";
    const expected: SomeTypeWithId = {
      ...someObjectFullTwo,
      color: colorExpected,
    };
    const actual: SomeTypeWithId = await sut.getBy("id", id);
    const colorActual: string = actual.color;
    expect(actual).toEqual(expected);
    expect(colorActual).toEqual(colorExpected);
  });

  it("should delete and element by a specific id using delete method", async () => {
    const idOne = await sut.insert(someObjectFullOne);

    await sut.delete(idOne);

    const actualOne: SomeTypeWithId = await sut.getBy("id", idOne);

    expect(actualOne).toBeUndefined();
  });

  it("should get all the elements with after insert using getAllElements method", async () => {
    await sut.insert(someObjectFullOne);
    await sut.insert(someObjectFullTwo);

    const expected: SomeTypeWithId[] = [someObjectFullOne, someObjectFullTwo];

    const actual: SomeTypeWithId[] = await sut.getAllElements();

    expect(actual).toEqual(expected);
  });
});
