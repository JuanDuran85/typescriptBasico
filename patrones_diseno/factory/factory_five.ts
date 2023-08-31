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
        return `Natural Person: ${this.name}`
    }
}

class LegalPerson implements PersonInterface {
    constructor(public name: string) {
        this.name = name;
    }

    public identifier(): string {
        return `legal Person: ${this.name}`;
    }
}

//------------ clasess Factory---------------//

class PersonalFactory {

    private static personClassName = {
        NaturalPerson,
        LegalPerson
    }

    public static createPersonMethod(type: string): PersonInterface{
        return this.getClassToUse(type);
    }

    private static getClassToUse(typeIn: string){
        return this.personClassName[typeIn] || "Bad Request";
    }
}
