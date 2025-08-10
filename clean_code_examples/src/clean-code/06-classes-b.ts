(() => {
  // -------------------------------------------------------------------------
  //  without Single Responsibility Principle (SRP)
  // -------------------------------------------------------------------------

  type Gender = "M" | "F";

  interface PersonProperties {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  interface UserProperties {
    email: string;
    role: string;
    personProperties: PersonProperties;
  }

  interface UserSettingProperties {
    workingDirectory: string;
    lastFolderOpen: string;
    userProperties: UserProperties;
  }

  class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;

    constructor({ name, gender, birthdate }: PersonProperties) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  const newPerson: Person = new Person({
    name: "John",
    gender: "M",
    birthdate: new Date("1985-10-24"),
  });
  console.log({ newPerson });

  class User extends Person {
    public lastAccess: Date;
    public email: string;
    public role: string;
    public personProperties: PersonProperties;

    constructor({ email, role, personProperties }: UserProperties) {
      super(personProperties);
      this.email = email;
      this.role = role;
      this.personProperties = personProperties;
      this.lastAccess = new Date();
    }

    public checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastFolderOpen: string;
    public userProperties: UserProperties;
    constructor({
      workingDirectory,
      lastFolderOpen,
      userProperties,
    }: UserSettingProperties) {
      super(userProperties);
      this.workingDirectory = workingDirectory;
      this.lastFolderOpen = lastFolderOpen;
      this.userProperties = userProperties;
    }
  }

  const personProperties: PersonProperties = {
    birthdate: new Date("1995-01-23"),
    gender: "M",
    name: "John",
  };

  const userProperties: UserProperties = {
    email: "john@email",
    role: "Admin",
    personProperties,
  };

  const userSettings: UserSettings = new UserSettings({
    workingDirectory: "/usr/home",
    lastFolderOpen: "/dev",
    userProperties,
  });

  console.log({ userSettings });
  console.log(`Credentials: ${userSettings.checkCredentials()}`);

  // -------------------------------------------------------------------------
  // -------------------------------------------------------------------------
})();
