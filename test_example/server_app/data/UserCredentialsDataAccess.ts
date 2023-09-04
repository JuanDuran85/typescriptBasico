import { Account } from "../model/AuthModel";
import { DataBase } from "./DataBase";

export class UserCredentialsDataAccess {
  private userCredentialsDataBase = new DataBase<Account>();

  public async addUser(user: Account): Promise<string> {
    const accountId: string = await this.userCredentialsDataBase.insert(user);
    return accountId;
  }

  public async getUserById(id: string): Promise<Account> {
    const user = await this.userCredentialsDataBase.getBy("id", id);
    return user;
  }

  public async getUserByUserName(userName: string): Promise<Account> {
    const user: Account = await this.userCredentialsDataBase.getBy(
      "userName",
      userName
    );
    return user;
  }
}
