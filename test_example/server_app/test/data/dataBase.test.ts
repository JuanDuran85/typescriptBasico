import { DataBase } from "../../data/DataBase";
import * as IdGenerator from "../../data/IdGenerator";

type someTypeWithId = {
  id: string;
  name: string;
  color: string;
};

describe("DataBase unit test suit", () => {
  let sut: DataBase<someTypeWithId>;
  const fakeId: string = "fghe6453FHJDH45";

  beforeEach(() => {
    sut = new DataBase<someTypeWithId>();
    jest.spyOn(IdGenerator, "generateRandomId").mockReturnValue(fakeId);
  });

  it("should return id after insert method", async () => {
    const actual = await sut.insert({
      id: "",
    } as any);

    expect(actual).toEqual(fakeId);
  });
});
