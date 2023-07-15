// 1. Nullish Coalescing Operator (??):
// The nullish coalescing operator provides a default value when a variable is null or undefined.

const lastName: string | null = null;
const age: number | undefined = undefined;

const defaultValueLastName = lastName ?? "Unknown Name";
const defaultValueAge = age ?? 23;
console.debug({ defaultValueLastName });
console.debug({ defaultValueAge });

// 2. Generics:
// Generics enable you to create reusable components that can work with a variety of types.

const reverseUtilityArray: <T>(item: T[]) => T[] = <T>(item: T[]): T[] =>
  item.reverse();
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
const strings: string[] = ["a", "b", "c", "d", "e", "d"];

const reverseNumber: number[] = reverseUtilityArray(numbers);
console.debug(reverseNumber);
const reverseString: string[] = reverseUtilityArray(strings);
console.debug(reverseString);

// 3. keyof Operator:
// The keyof operator returns a union of all known property names of a given type.

interface Product {
  id: number;
  sku: string;
  total: number;
  name: string;
}

const getProductProperty: (
  product: Product,
  property: keyof Product
) => string | number = (product: Product, property: keyof Product) =>
  product[property];

const productOne: Product = {
  id: 1743,
  sku: "dj45921jmd",
  total: 61,
  name: "Book",
};

const nameProduct = getProductProperty(productOne, "name");
console.log(nameProduct);
//const notProperty = getProductProperty(productOne, "year"); Argument of type '"year"' is not assignable to parameter of type 'keyof Product'.

// 4. Intersection Types:
// Intersection types allow you to combine multiple types into a single type, creating a new type that has all the properties and methods of the intersected types.

interface LogShow {
    log: () => void;
}

interface SerialOut {
    serialize: () => string;
}

// intersection
type LoggerFinal = LogShow & SerialOut;

class ConsoleLogger implements LogShow {
    log() {
        console.log('Logging into console...');
    };
}

class FileLogger implements LogShow, SerialOut {
    log() {
        console.log("Logging to file ...");
    }

    serialize() {
        return "Serialized log data method";
    }
}

const loggerOne: ConsoleLogger = new ConsoleLogger();
console.log(loggerOne);
loggerOne.log();

const loggerTwo: LoggerFinal = new FileLogger();
console.log(loggerTwo);
loggerTwo.log();
console.log(loggerTwo.serialize());
