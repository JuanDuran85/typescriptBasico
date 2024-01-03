/**
 * !1. Nullish Coalescing Operator (??): 
**/
// The nullish coalescing operator provides a default value when a variable is null or undefined.

const lastName: string | null = null;
const age: number | undefined = undefined;

const defaultValueLastName = lastName ?? "Unknown Name";
const defaultValueAge = age ?? 23;
console.debug({ defaultValueLastName });
console.debug({ defaultValueAge });

/** 
 * !2. Generics:
**/
// Generics enable you to create reusable components that can work with a variety of types.

const reverseUtilityArray: <T>(item: T[]) => T[] = <T>(item: T[]): T[] =>
  item.reverse();
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
const strings: string[] = ["a", "b", "c", "d", "e", "d"];

const reverseNumber: number[] = reverseUtilityArray(numbers);
console.debug(reverseNumber);
const reverseString: string[] = reverseUtilityArray(strings);
console.debug(reverseString);


/** 
 *  !3. keyof Operator:
**/
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
console.debug(nameProduct);
//const notProperty = getProductProperty(productOne, "year"); Argument of type '"year"' is not assignable to parameter of type 'keyof Product'.


/**
 * !4. Intersection Types
 */
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
    console.debug("Logging into console...");
  }
}

class FileLogger implements LogShow, SerialOut {
  log() {
    console.debug("Logging to file ...");
  }

  serialize() {
    return "Serialized log data method";
  }
}

const loggerOne: ConsoleLogger = new ConsoleLogger();
console.debug(loggerOne);
loggerOne.log();

const loggerTwo: LoggerFinal = new FileLogger();
console.debug(loggerTwo);
loggerTwo.log();
console.debug(loggerTwo.serialize());

/**
 * !5. Mapped Types
 */
// Mapped types allow you to create new types by transforming the properties of an existing type.

interface UserFinal {
  id: number;
  name: string;
  email: string;
  year: number;
}

type PartialUser = {
  [K in keyof UserFinal]?: UserFinal[K];
};

const partialUserFinal: PartialUser = {
  name: "Foo",
  year: 2020,
};
console.debug({ partialUserFinal });

/**
 * !6. Decorators
 **/
// Decorators allow you to modify or extend the behavior of classes, methods, properties, and other declarations.

function upperCaseUtility(target: any, propertyName: string) {
  console.debug("Property Class Decorator...");
  console.debug(target);
  console.debug(propertyName);
}

class Letters {
  @upperCaseUtility
  letter: string;
}

const finalLetter = new Letters();
finalLetter.letter = "abcdefg";
console.debug({ finalLetter });

// 7. Using keyof and Mapped Types to Dynamically Build Types
/* The keyof operator takes an object type and produces a string or numeric literal union of its keys. Combined with mapped types, you can generate new types from existing ones, while preserving the original structure. */
type Point = {
  x: number;
  y: number;
};

type NullablePoint = {
  [K in keyof Point]: Point[K] | null;
};

const otherPointValues: NullablePoint = {
  x: 45,
  y: null,
};

console.debug(otherPointValues);

// 8. keyof
// The keyof is slightly similar to Object.keys, except that keyof takes the keys of the interface.

const dataExample = {
  x: 45,
  another: "Foo",
};

function getDataExample<T extends object, K extends keyof T>(
  dataIn: T,
  name: K
): T[K] | null {
  return dataIn[name] || null;
}

console.debug(getDataExample(dataExample, "x"));

// 9. Required & Partial & Pick (manual construction)
// If you know the keyof, you can use it to do some extensions to the properties, such as implementing Partial and Pick manually.

type PartialManually<T> = {
  [P in keyof T]?: T[P];
}

// Using the -? sintax to make the properties required
type RequiredManually<T> = {
  [P in keyof T]-?: T[P];
}

type PickManually<T, K extends keyof T> = {
  [P in K]: T[P];
}

