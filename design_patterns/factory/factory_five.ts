/**
 * Factory Pattern in Typescript
 *
 * Factory Pattern is one of the Creational Design Pattern. We must use when we need to create an object without exposing the creation logic to the client and refer to newly created objects using a common interface. So we have a superclass with multiple sub-classes and based on input, we need to return one of the sub-class.
 *
 */
//------------ Interfaces ---------------//
interface PersonInterface {
  name: string;
  identifier(): string;
}

//------------ clasess Implementation---------------//
class NaturalPerson implements PersonInterface {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public identifier(): string {
    return `Natural Person: ${this.name}`;
  }
}

class LegalPerson implements PersonInterface {
  constructor(public name: string) {
    this.name = name;
  }

  public identifier(): string {
    return `Legal Person: ${this.name}`;
  }
}

//------------ clasess Factory---------------//

interface PersonalClasses {
  NP: (name: string) => NaturalPerson;
  LP: (name: string) => LegalPerson;
}
class PersonalFactory {
  public static readonly personClassName: PersonalClasses = {
    NP: (name: string) => new NaturalPerson(name),
    LP: (name: string) => new LegalPerson(name),
  };

  public static createPersonMethod(type: string, name: string): NaturalPerson | LegalPerson {
    if (!this.personClassName[type as keyof PersonalClasses]) {
      throw new Error("Error...");
    }
    return this.personClassName[type as keyof PersonalClasses](name);
  }
}

class Main {
  public mainMethod() {
    const npResult: NaturalPerson = PersonalFactory.createPersonMethod("NP", "Juan") as NaturalPerson;
    const ldResult: NaturalPerson = PersonalFactory.createPersonMethod("LP","Maria") as LegalPerson;
    return {
      npResult,
      ldResult,
    }
  }
}

console.debug(new Main().mainMethod());
console.debug(new Main().mainMethod().ldResult.identifier());
console.debug(new Main().mainMethod().ldResult.name);
