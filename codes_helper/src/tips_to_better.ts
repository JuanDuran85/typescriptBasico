/**
 * Tips That Make You a Better Typescript Programmer
 */

//------------------------------------------------------------------------

// ! 1. Use discriminated union instead of optional fields

/*
When defining a set of polymorphic types like Shape, it’s easy to start with this type:
type Shape = {
    kind: 'circle' | 'rect';
    radius?: number;
    width?: number;
    height?: number;
}

The non-null assertions "?" (when accessing radius, width, and height fields) are needed because there’s no established relationship between kind and other fields. Instead, discriminated union is a much better solution. So, you can use different types with all the specific fields you need, one by one and Type narrowing has eliminated the need for coercion..

*/

type Circle = { kind: "circle"; radius: number };
type Rect = { kind: "rect"; width: number; height: number };
type Shape = Circle | Rect;

const getAreaFinal: (shape: Shape) => number = (shape: Shape): number => {
  return shape.kind === "circle"
    ? Math.PI * shape.radius ** 2
    : shape.width * shape.height;
};

const circle: Circle = {
  kind: "circle",
  radius: 10,
};

const rect: Rect = {
  kind: "rect",
  height: 5,
  width: 10,
};

console.debug(getAreaFinal(circle));
console.debug(getAreaFinal(rect));

//------------------------------------------------------------------------

// ! 2. Use type predicate to avoid type assertion "as"

/*
If you use typescript in the right way, you should rarely find yourself using explicit type assertion (like value as SomeType).
------------------------------------------------------------------------
function isCircle(shape: Shape) {
    return shape.kind === 'circle';
}

function isRect(shape: Shape) {
    return shape.kind === 'rect';
}

const myShapes: Shape[] = getShapes();

- error because typescript doesn't know the filtering narrows typing
const circles: Circle[] = myShapes.filter(isCircle);

- you may be inclined to add an assertion:
const circles = myShapes.filter(isCircle) as Circle[];
------------------------------------------------------------------------

But avoid doing it, for that reason, a more elegant solution is to change isCircle and isRect to return type predicate instead, so they help Typescript further narrow down types after the filter call
*/

function isCircle(shape: Shape): shape is Circle {
  return shape.kind === "circle";
}

function isRect(shape: Shape): shape is Rect {
  return shape.kind === "rect";
}

function getShapes(): Shape[] {
  return [circle, rect];
}

const myShape: Shape[] = getShapes();
console.debug(myShape);

const circles: Circle[] = myShape.filter(isCircle);
console.debug(circles);

const rects: Rect[] = myShape.filter(isRect);
console.debug(rects);

//------------------------------------------------------------------------

// ! 3. Utilize Union Types and Type Guards
/**
 Union types allow you to define a variable that can have multiple types. This is useful when dealing with situations where a variable may have different possible values. Type guards like typeof and instanceof, help you narrow down the type in a conditional block.
 */

type ShapeType = "circle" | "squere" | "triangle";
const circleFunction: (size: number) => number = (size: number): number =>
  Math.PI * size ** 2;
const squareFunction: (size: number) => number = (size: number): number =>
  size ** 2;
const triangleFunction: (size: number) => number = (size: number): number =>
  (Math.sqrt(3) / 4) * size ** 2;

const shapeFunctions = {
  circle: circleFunction,
  squere: squareFunction,
  triangle: triangleFunction,
};

const getArea: (shape: ShapeType, size: number) => number = (
  shape: ShapeType,
  size: number
): number => {
  return shapeFunctions[shape](size);
};

console.debug(getArea("circle", 10));
console.debug(getArea("squere", 10));
console.debug(getArea("triangle", 10));

// ! 4. Use Intersection Types for Flexible Type Composition
/**
Intersection types allow you to combine multiple types into a single type, creating a new type that has all the properties and methods of each type. This provides flexibility when typing and can be particularly useful when dealing with complex object structures
 */

type Greetings = {
  greetSomeone: (name: string) => void;
};

type Farewell = {
  sayGoodbye: (name: string) => void;
};

type GreetingsAndFarewell = Greetings & Farewell;

class PersonToKnow implements GreetingsAndFarewell {
  greetSomeone: (name: string) => void = (name: string) => {
    console.debug(`Hello ${name}`);
  };

  sayGoodbye: (name: string) => void = (name: string) => {
    console.debug(`Goodbye ${name}`);
  };
}

const personToSayGoodbye: GreetingsAndFarewell = new PersonToKnow();
personToSayGoodbye.sayGoodbye("John");

//------------------------------------------------------------------------

// ! 5. Conditional Types for Flexible Typing
/**
 * Conditional types enable the creation of complex types that depend on other types. This can lead to more flexible and reusable type definitions.
 * 
 * The `FlattenType` conditional type is used to flatten an array type. It checks if the type `T`
is an array (`T extends Array<infer U>`), and if so, it returns the element type of the array
(`U`). If `T` is not an array, it returns `T` itself. This allows for more flexible typing when
working with arrays and their element types. 
 */

type FlattenType<T> = T extends Array<infer U> ? U : T;
type FlattenTypeNumbers = FlattenType<object[]>;

// ! 6. Partially Applied Types with Type Currying
/**
 * TypeScript's support for higher-order types allows you to create partially applied types. This technique, known as type currying, enables powerful composition patterns.
 * 
 * The `Curried` type is a higher-order type that represents a curried function. It takes two type
parameters `T` and `U`, where `T` represents the return type of the curried function and `U`
represents the argument type. The `Curried` type is a function type that takes an argument of
type `U` and returns a value of type `T & U`, which is the intersection of `T` and `U`. This
allows for partial application of the function, where you can provide some arguments and get a
new function that expects the remaining arguments. 
*/

type Curried<T, U> = (arg: U) => T & U;

function mergeWithCurriying<T, U>(functionIn: Curried<T, U>): T & U {
  return functionIn({} as U);
}

type UserDetails = {
  name: string;
  age: number;
};
type UserSettings = {
  language: string;
  theme: string;
};

const result: UserDetails & UserSettings = mergeWithCurriying<
  UserDetails,
  UserSettings
>(() => ({
  name: "John",
  age: 30,
  language: "en",
  theme: "light",
}));
console.debug({ result });

// ! 7.  Type Guards for Compile-Time Type Checking

/**
 * Type guards are useful when you need to perform compile-time type checking. They allow TypeScript to narrow down the type of a value within a specific block of code.
 */

function isStringCheck(valueIn: any): valueIn is string {
  return typeof valueIn === "string";
}

function concatValues(a: unknown, b: unknown): string | undefined {
  if (isStringCheck(a) && isStringCheck(b)) {
    return a.concat(b);
  }
}

const resultStringConcat = concatValues("Hello", "World");
console.debug(resultStringConcat);

// ! 8. Advanced Type Inference with ReturnType
/**
 * The ReturnType utility type can infer the return type of a function, making it easier to work with higher-order functions and their types
 */

type MyFunctionOne = (x: number, y: number) => { result: number };
type MyFunctionOneReturnType = ReturnType<MyFunctionOne>;

// ! 9. Type-Level Programming with Recursive Types

/**
 * TypeScript supports recursive types, allowing you to create complex type-level computations and transformations. In this case, TupleToUnionType converts a tuple type to a union type, which can be useful when working with complex data structures.
 */

type TupleToUnionType<T extends any[]> = T[number];
type MyTuple = [string, number, boolean];
type MyUnion = TupleToUnionType<MyTuple>;

// ! 10. Readonly for Immutable Types

/**
 * TypeScript provides a built-in Readonly utility type that makes all properties of an object read-only. This is helpful when you want to enforce immutability in your codebase.
 */

type UserInmutable = {
  name: string;
  age: number;
  email: string;
  country: string;
};

type ReadOnlyUser = Readonly<UserInmutable>;
const user: ReadOnlyUser = {
  name: "John",
  age: 30,
  email: "johndoe@me.com",
  country: "USA",
};
console.debug({ user });
//Cannot assign to 'email' because it is a read-only property
//user.email = "XHJF8@example.com";

// ! 11. Unique Symbols for Safer Constants

/**
 * TypeScript’s unique symbol type can create unique, non-string values that are perfect for safer constant definitions and avoiding name collisions.
 */

const MyFirstConstantSymbol = Symbol("MyFirstConstantExample");
console.debug(MyFirstConstantSymbol);
type MyTypeUniqueSymbol = {
  [MyFirstConstantSymbol]: string;
};

const objType: MyTypeUniqueSymbol = {
  [MyFirstConstantSymbol]: "MyFirstConstantExampleNewValue",
};
console.debug({ objType });
console.debug(objType[MyFirstConstantSymbol]);

// ! 11. Use namespaces and modules to organize code structure

/**
 * In TypeScript, namespaces and modules can be used to organize the code structure and avoid naming conflicts and duplicate definitions. When using namespaces and modules, you need to pay attention to the correctness and readability of naming and definition to avoid naming conflicts or irregular naming.
 */

namespace MyNameSpaceData {
  export interface DataUserInterface {
    getName(): string;
    getAge(): number;
    getEmail(): string;
    getCountry(): string;
    setName(name: string): void;
    setAge(age: number): void;
    setEmail(email: string): void;
    setCountry(country: string): void;
    build(): void;
  }

  export class ClassUser implements DataUserInterface {
    constructor(
      private name: string,
      private age: number,
      private email: string,
      private country: string
    ) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.country = country;
    }

    getName(): string {
      return this.name;
    }

    getAge(): number {
      return this.age;
    }

    getEmail(): string {
      return this.email;
    }

    getCountry(): string {
      return this.country;
    }

    setName(name: string): void {
      this.name = name;
    }

    setAge(age: number): void {
      this.age = age;
    }

    setEmail(email: string): void {
      this.email = email;
    }

    setCountry(country: string): void {
      this.country = country;
    }

    build(): void {
      console.debug({
        name: this.name,
        age: this.age,
        email: this.email,
        country: this.country,
      });
    }
  }
}

const newUserToCreate: MyNameSpaceData.ClassUser =
  new MyNameSpaceData.ClassUser("John", 30, "johndoe@me.com", "USA");

console.debug(newUserToCreate);
newUserToCreate.build();
console.debug(newUserToCreate.getAge());
console.debug(newUserToCreate.getCountry());
newUserToCreate.setEmail("XHJF8@example.com");
console.debug(newUserToCreate.getEmail());