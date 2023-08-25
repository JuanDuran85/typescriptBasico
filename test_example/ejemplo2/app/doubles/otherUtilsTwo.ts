export type User = {
  name: string;
  age: number;
};

export class WhatEverDataBase {
  private elements: Array<User>;

  constructor(elements: Array<User>) {
    this.elements = elements;
  }

  /**
   * addUser
   */
  public addUser(user: User): void {
    this.elements.push(user);
  }

  /**
   * getuserByName
   */
  public getuserByName(name: string): User {
    return this.elements.find((e) => e.name === name);
  }
}
