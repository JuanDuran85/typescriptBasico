(() => {
  // -------------------------------------------------------------------------
  //  with Single Responsibility Principle (SRP)
  //  prioritize composition over inheritance
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
  }

  interface SettingsProperties {
    workingDirectory: string;
    lastFolderOpen: string;
  }

  interface UserSettingsProperties {
    personProperties: PersonProperties;
    userProperties: UserProperties;
    settingsProperties: SettingsProperties;
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

  class User {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor({ email, role }: UserProperties) {
      this.email = email;
      this.lastAccess = new Date();
      this.role = role;
    }

    public checkCredentials() {
      return true;
    }
  }

  const newUser: User = new User({
    email: "john@email",
    role: "Admin",
  });

  console.log({ newUser });

  class SettingsProperties {
    public workingDirectory: string;
    public lastFolderOpen: string;
    constructor({ workingDirectory, lastFolderOpen }: SettingsProperties) {
      this.workingDirectory = workingDirectory;
      this.lastFolderOpen = lastFolderOpen;
    }
  }

  // composition class
  class UserSettings {
    public person: Person;
    public user: User;
    public setting: SettingsProperties;

    constructor({
      personProperties,
      settingsProperties,
      userProperties,
    }: UserSettingsProperties) {
      this.person = new Person(personProperties);
      this.user = new User(userProperties);
      this.setting = settingsProperties;
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
  };

  const settingsProperties: SettingsProperties = {
    workingDirectory: "/usr/home",
    lastFolderOpen: "/dev",
  };

  const userSettings: UserSettings = new UserSettings({
    personProperties,
    settingsProperties,
    userProperties,
  });

  console.log({ userSettings });

  // -------------------------------------------------------------------------
  // -------------------------------------------------------------------------
})();
