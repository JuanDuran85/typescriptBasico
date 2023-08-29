/**
 *
 * The builder pattern decomposes a complex object into relatively simple parts, then creates them
 * separately according to different needs, and finally builds the complex object.
 *
 */

/*
In this case, we need to create a new class using the builder pattern. For that, we can use the next class:
class User {
  constructor(
    public username: string,
    public sex: string,
    public age: number,
    public photo: string,
    public email: string
  ) {}
}

*/

class User {
  constructor(
    public username: string,
    public sex: string,
    public age: number,
    public photo: string,
    public email: string
  ) {}
}
class UserBuilderPattern {
  public username!: string;
  public sex!: string;
  public age!: number;
  public photo!: string;
  public email!: string;

  public setUserName(name: string): this {
    this.username = name;
    return this;
  }

  public setSex(sex: string): this {
    this.sex = sex;
    return this;
  }

  public setAge(age: number): this {
    this.age = age;
    return this;
  }

  public setPhoto(photo: string): this {
    this.photo = photo;
    return this;
  }

  public setEmail(email: string): this {
    this.email = email;
    return this;
  }

  public build(): User {
    return new User(this.username, this.sex, this.age, this.photo, this.email);
  }
}

const newUserBuilder: User = new UserBuilderPattern()
  .setUserName("Juan")
  .setAge(37)
  .setSex("Masculino")
  .setEmail("email@email.com")
  .setPhoto("dir/photos")
  .build();
console.debug(newUserBuilder);
console.debug({...newUserBuilder});
