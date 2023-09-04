import { UserCredentialsDataAccess } from "../../data/UserCredentialsDataAccess";
import { Account } from "../../model/AuthModel";
import { DataBase } from "../../data/DataBase";

const insertMock = jest.fn();
const getByMock = jest.fn();

jest.mock("../../data/DataBase", () => {
  return {
    DataBase: jest.fn().mockImplementation(() => {
      return {
        insert: insertMock,
        getBy: getByMock,
      };
    }),
  };
});

const someId: string = "123456789";

const someAccount: Account = {
  id: someId,
  password: "somePassword",
  userName: "someUserName",
};

describe("UserCredentialsDataAccess test suite", () => {
  let sut: UserCredentialsDataAccess;

  beforeEach(() => {
    sut = new UserCredentialsDataAccess();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should add user and return the id", async () => {
    insertMock.mockResolvedValueOnce(someId);

    const actualId: string = await sut.addUser(someAccount);
    expect(actualId).toBe(someId);
    expect(insertMock).toHaveBeenCalledWith(someAccount);
  });

  it("should get an User By Id", async () => {
    getByMock.mockResolvedValueOnce(someAccount);

    const actualUser: Account = await sut.getUserById(someId);
    expect(actualUser).toEqual(someAccount);
    expect(getByMock).toHaveBeenCalledWith("id", someId);
  });

  it("should get an User By Name", async () => {
    getByMock.mockResolvedValueOnce(someAccount);

    const actualUser: Account = await sut.getUserByUserName(someAccount.userName);
    expect(actualUser).toEqual(someAccount);
    expect(getByMock).toHaveBeenCalledWith("userName", someAccount.userName);
  });

});
