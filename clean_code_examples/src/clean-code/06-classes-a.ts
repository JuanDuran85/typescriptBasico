(() => {
  // -------------------------------------------------------------------------
  //  without Single Responsibility Principle (SRP)
  // -------------------------------------------------------------------------

  type Gender = "M" | "F";
  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  const newPerson: Person = new Person("John", "M", new Date("1985-10-24"));
  console.log({ newPerson });

  class User extends Person {
    public lastAccess: Date;

    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    public checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastFolderOpen: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, role, name, gender, birthdate);
    }
  }

  const userSettings: UserSettings = new UserSettings(
    "/usr/home",
    "/dev",
    "john@email",
    "Admin",
    "John",
    "M",
    new Date("1995-01-23")
  );
  console.log({ userSettings });
  console.log(`Credentials: ${userSettings.checkCredentials()}`);

  // -------------------------------------------------------------------------
  // -------------------------------------------------------------------------
})();
