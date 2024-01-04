/**
 *
 * Working with generic
 *
 */

// creating a generic function
// merging two objects with a generic functions

function merge<T, U>(objOne: T, objTwo: U) {
  return { ...objOne, ...objTwo };
}

const mergeResult = merge({ name: "Juan" }, { age: 37 });
console.debug({ mergeResult });
console.debug(mergeResult.age);
console.debug(mergeResult.name);

// Type contrains
//we’ll create an interface that implement a constraint to avoid other types of elements

function mergeWithContrains<T extends object, U extends object>(
  objOne: T,
  objTwo: U
) {
  return { ...objOne, ...objTwo };
}

const mergeResultWithContrains = mergeWithContrains(
  { name: "Juan" },
  { age: 37 }
);
console.debug({ mergeResultWithContrains });
console.debug(mergeResultWithContrains.age);
console.debug(mergeResultWithContrains.name);

// creating a generic function
// generic function with interface and constrains

interface Lengthy {
  length: number;
}
function countAndDescribe<T extends Lengthy>(element: T) {
  let descriptionText: string = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = `Got more than one element. ${element.length} elements`;
  }
  return [element, descriptionText];
}

console.debug(countAndDescribe("texto numero 1"));
console.debug(countAndDescribe(["elemento 1"]));

// the keyof contrains

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value: ${obj[key]}`;
}

console.debug(extractAndConvert({ name: "Juan" }, "name"));

// using object literal a move it to an interface
interface GeneritTypeIdentifier {
  <T>(value: T): T;
}

const result: GeneritTypeIdentifier = (value) => {
  return value;
};

console.debug(result(3));
console.debug(result("hola"));

//Using Class Types in Generics
// When creating factories in TypeScript using generics, it is necessary to refer to class types by their constructor functions.

class Activeted {
  active: boolean = false;
}

class Desactivated {
  active: boolean = true;
}

function createInstanceStatus<T>(instance: { new (): T }): T {
  return new instance();
}

console.debug(createInstanceStatus(Activeted));

// Working with generic classes

// Simple Generic Classes
class DataStoregeGeneric<T extends string | number | boolean> {
  private data: T[] = [];

  addItems(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (!this.data.includes(item)) return;
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStoregeGeneric();
textStorage.addItems(3);
textStorage.addItems(4);
textStorage.addItems("5");
textStorage.addItems("Texto");
textStorage.removeItem(4);
console.debug(textStorage.getItems());

const numberStorage = new DataStoregeGeneric<number>();
numberStorage.addItems(3);
numberStorage.addItems(4);
numberStorage.removeItem(4);
console.debug(numberStorage.getItems());

// Make a dictionary with Generic Type.
console.debug("---------------------------------------------------------");
interface DataNewInterface {
  id: number;
  name: string;
}

const dataNew: DataNewInterface[] = [
  { id: 1, name: "Jailyn" },
  { id: 2, name: "Samara" },
  { id: 3, name: "Glenda" },
];

function makeDictionary<T>(
  arrIn: T[],
  callbackIn: (arg: T) => number
): {
  [x: string]: T;
} {
  return arrIn.reduce((acc: { [key: string]: T }, current: T) => {
    const dictKey: number = callbackIn(current);
    acc[dictKey] = current;
    return acc;
  }, {});
}

console.debug(makeDictionary(dataNew, (el: DataNewInterface) => el.id));
console.debug("---------------------------------------------------------");

// Itersected with type and generics.
console.debug("---------------------------------------------------------");

type Intersected = {
  a: number;
} & {
  b: number;
} & {
  c: number;
};

type PrettifyInterseted<T> = {
  [K in keyof T]: T[K];
};

type Result = PrettifyInterseted<Intersected>;

//---------------------------------------------------------------------------------------------------
//    -------------------------------- Generic Utility types --------------------------------
//---------------------------------------------------------------------------------------------------
// -------------------------------- ReturnType<Type> --------------------------------
// Constructs a type consisting of the return type of function Type. For overloaded functions, this will be the return type of the last signature. The ReturnType utility type is very useful in situations where the output of a specific function needs to be taken in by another function. In that scenario, you might create a new, custom type, that the output of a function constrains itself to.
console.debug(
  "-------------------------ReturnType<Type>--------------------------------"
);
// returning type of a function
declare function functOne(): {
  a: number;
  b: string;
};

type T1 = ReturnType<typeof functOne>;

type T2 = ReturnType<() => string>;

type T3 = ReturnType<() => () => string>;

type T4 = ReturnType<(value: string) => void>;

type T5 = ReturnType<<T>() => T>;

type T6 = ReturnType<<T extends U, U extends number[]>() => T>;

// The ReturnType<T> type is a generic type that takes a function type T and returns the return type of that function type.

function addNumbers(a: number, b: number): number {
  return a + b;
}

type T7 = ReturnType<typeof addNumbers>;

// If we have a function called getUserInfo that makes a request to an API and returns a promise that resolves to a user object, to extract the return type of this function to have more information about the returned user object, we can use ReturnType.

async function getUserInfo(): Promise<{
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}> {
  const response: Response = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  const data = await response.json();
   console.debug("Data to Show-------111111");
  console.debug({ ...data });
  return data;
}

type UserReturnType = ReturnType<typeof getUserInfo>;
console.debug(
  "-----------------------Awaited<Type>----------------------------------"
);
// -------------------------------- Awaited<Type> --------------------------------
// This type is meant to model operations like await in async functions, or the .then() method on Promises - specifically, the way that they recursively unwrap Promises.

interface PlaceHolderToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function fetchUserData(): Promise<PlaceHolderToDo> {
  const json: Response = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  return json.json();
}

type UserData = Awaited<ReturnType<typeof fetchUserData>>;

async function displayUserData(): Promise<void> {
  const userData: UserData = await fetchUserData();
  const { id, userId, title, completed } = userData;
  console.debug(
    `User ${title} has idUser ${id} and id ${userId} and is completed: ${completed}`
  );
}

displayUserData();

//To unwrap the promise from the return type, you need to use the Awaited type. This type works similarly to the await keyword.

const getDataUser = async (idUser: number) => {
  const response: Response = await fetch(
    `https://reqres.in/api/users/${idUser}`
  );
  const data = await response.json();
  console.debug("Data to Show-------222222");
  console.debug(data);
  return data;
};

type NewTypeUser = Awaited<ReturnType<typeof getDataUser>>;
console.debug("---------------------------------------------------------");
// -------------------------------- Partial<Type> --------------------------------
// Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.

interface UsersInfo {
  id: string;
  name: string;
  lastName: string;
  age: number;
}

const infoUsurio: UsersInfo = {
  id: "",
  name: "",
  lastName: "",
  age: 0,
};

console.debug(infoUsurio);
// type Partial<T> = { [P in keyof T]?: T[P]; }
// Make all properties in T optional
const usuarios = (infoIn: UsersInfo, infoToUpdate: Partial<UsersInfo>) => {
  return { ...infoIn, ...infoToUpdate };
};

console.debug(
  usuarios(infoUsurio, { name: "Juan", lastName: "Duran", age: 37 })
);

// -------------------------------- Required<Type> --------------------------------
// Constructs a type consisting of all properties of Type set to required. The opposite of Partial.

interface UserInfo2 {
  id: string;
  name: string;
  lastName?: string;
  age?: number;
}

const user1: UserInfo2 = {
  id: "3f55",
  name: "Juan",
};

// If you don't use all the property's object, the error should be: Type '{ id: string; name: string; }' is missing the following properties from type 'Required<UserInfo2>': lastName.
// type Required<T> = { [P in keyof T]-?: T[P]; }
// Make all properties in T required
const user2: Required<UserInfo2> = {
  id: "3ffghy6",
  name: "Juan",
  lastName: "Duran",
  age: 37,
};

// -------------------------------- Readonly<Type> --------------------------------
// Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.
interface Books {
  id: string;
  title: string;
  pages: number;
}

// type Readonly<T> = { readonly [P in keyof T]: T[P]; }
// Make all properties in T readonly
const book1: Readonly<Books> = {
  id: "233drft",
  title: "Book 1",
  pages: 51,
};

// if you try to assign a new value to a property, you will get an error: Cannot assign to 'pages' because it is a read-only property.
//book1.pages = 56;
console.debug(book1);

// -------------------------------- ReadonlyArray<Type> --------------------------------
// Create a readonly version of your array.

const arrayValues: number[] = [3, 6, 2, 7, 1];
const copyArrayReadOnly: ReadonlyArray<number> = arrayValues;
// Now, all mutating methods are removed and will throw a compile-time error.
// copyArrayReadOnly.push(4);
// copyArrayReadOnly[2] = 4;
console.debug(copyArrayReadOnly);

// -------------------------------- Record<Keys, Type> --------------------------------
// Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.
interface StoreProperties {
  sku: string;
  name: string;
  cuantity: number;
  active: boolean;
}

type ClothesKeys = "tshirt" | "socks" | "jeans";
// type Record<K extends string | number | symbol, T> = { [P in K]: T; }
// Construct a type with a set of properties K of type T
const clothes: Record<ClothesKeys, StoreProperties> = {
  tshirt: {
    sku: "tshirt456",
    name: "Playera",
    cuantity: 14,
    active: true,
  },
  socks: {
    sku: "socks1573",
    name: "Socks Prime",
    cuantity: 451,
    active: true,
  },
  jeans: {
    sku: "jeans5369",
    name: "Cowboy Traditional",
    cuantity: 78,
    active: true,
  },
};

// Use Record to make an object indexable, instead of typing it out manually
// For example, avoid this casa:

interface UserForAvoid {
  name: string;
}

const usersForAvoid: {
  [key: string]: UserForAvoid;
} = {};
console.debug(usersForAvoid);

// Instead the pass iterface, you can use the Record Type, for example:
interface UserToUse {
  name: string;
}

const userToUse: Record<string, UserToUse> = {
  x: { name: "44" },
};
console.debug(userToUse);
// -------------------------------- Pick<Type, Keys> --------------------------------
// Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.
interface Store2 {
  name: string;
  cuantity: number;
  active: boolean;
}

// you can create a new type by using only the properties you want to pick.
// type Pick<T, K extends keyof T> = { [P in K]: T[P]; }
// From T, pick a set of properties whose keys are in the union K
type StorePreview = Pick<Store2, "cuantity" & "name">;

const storeOne: StorePreview = {
  cuantity: 4,
  name: "jean",
};

// create a new type using Pick: We can use Pick to create a new type containiinng only some properties. For example, if you have a UserXY interface with four properties that are all required:

interface UserXY {
  id: string;
  username: string;
  followers: number;
  isBlocked: boolean;
}

type UpdateUser = (user: Pick<UserXY, "id" | "isBlocked">) => void;

// you can use Pick to construct a variable with some properties of the interface. For example:
const updateUser: UpdateUser = (user: Pick<UserXY, "id" | "isBlocked">) => {
  console.debug(`Values in to update: ${user.id}`);
};

updateUser({
  id: "23dff32",
  isBlocked: true,
});

// -------------------------------- Omit<Type, Keys> --------------------------------
// Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals).

interface Bird {
  type: string;
  flyingSpeed: number;
  colors: string[];
  origin: string;
}

// type Omit<T, K extends string | number | symbol> = { [P in Exclude<keyof T, K>]: T[P]; }
// Construct a type with the properties of T except for those in type K.
type BirdPreview = Omit<Bird, "colors">;
const birdPreviewShow: BirdPreview = {
  type: "bird",
  flyingSpeed: 45,
  origin: "Africa",
};

type BirdCaracteristic = Omit<Bird, "type" | "flyingSpeed">;
const birdCaracter: BirdCaracteristic = {
  colors: ["Red", "Blue"],
  origin: "Africa",
};

// -------------------------------- Type Guard --------------------------------
// You can use type guard to check if the type is correct.

type PersonGeneral = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const isPersonValid = (data: any): data is PersonGeneral => {
  if (typeof data?.title !== "string") return false;
  if (typeof data?.id !== "number") return false;
  if (typeof data?.userId !== "number") return false;
  if (typeof data?.completed !== "boolean") return false;
  return true;
};

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response: any) => response.json())
  .then((jsonResponse: unknown) => {
    console.debug({ jsonResponse });
    if (isPersonValid(jsonResponse)) {
      console.info({ jsonResponse });
    }
    throw new Error("Unexected response format");
  })
  .catch(console.error);

//  -----------------------------------------------------------------------------------
// Declaring Generic Parameters on Interfaces, when two interfaces take some generic parameters, T and U
interface IStatus<U> {
  code: U;
}

interface Code {
  message: string;
  code: number;
}

interface IEvents<T> {
  list: T[];
  emit(event: T): void;
  getAll(): T[];
}

// Implementing Generic Interfaces: implementing the interface IEvents.
class States<T> implements IEvents<T> {
  public list: T[];

  constructor() {
    this.list = [];
  }

  emit(event: T): void {
    this.list.push(event);
  }

  getAll(): T[] {
    return this.list;
  }
}

// Now, Let's create some instances of our State class. In this case, the State class will handle a generic status by using IStatus<T>. In this way, the interface IEvent<T> will also handle a IStatus<T>. Here our State class is typed as IStatus<number>.

const statusOne: States<IStatus<number>> = new States<IStatus<number>>();
statusOne.emit({
  code: 200,
});
statusOne.emit({
  code: 500,
});
console.debug(statusOne.getAll());
statusOne
  .getAll()
  .forEach((value: IStatus<number>) => console.debug(value.code));

const statusTwo: States<Code> = new States<Code>();
statusTwo.emit({
  message: "Ok",
  code: 200,
});
statusTwo.emit({
  message: "Page not found",
  code: 404,
});
console.debug(statusTwo.getAll());
statusTwo.getAll().forEach((value: Code) => console.debug(value));

//-----------------------------------------------------------------------------------------------
// Generic Interfaces
//-----------------------------------------------------------------------------------------------

// Declaring a generic interface

interface ResultProcessError<T> {
  wasSuccessful: boolean;
  error: T;
}

const resultFinal: ResultProcessError<string> = {
  wasSuccessful: false,
  error: "Not found",
};
const error: string = resultFinal.error;
console.debug({ resultFinal, error });

// Generic interface with multiple type parameters

interface ResultProcessMain<T, U> {
  getDataProcess(input: T): U;
}

const resultProcessMain: ResultProcessMain<number, string> = {
  getDataProcess(input: number) {
    return `El resultado es: ${input + 4}`;
  },
};
const resultNumeric: string = resultProcessMain.getDataProcess(4);
console.debug(resultProcessMain.getDataProcess(5));
console.debug(resultNumeric);

//Implementing a generic interface
interface ResultProcess<T> {
  susccessfull: boolean | null;
  error: T;
  clone(): ResultProcess<T>;
}

interface CodeError {
  message: string;
  code: number;
}

// Implement it with generic class
class ResultMain<T> implements ResultProcess<T> {
  public susccessfull: boolean | null;
  public error: T;

  public constructor(susccessIn: boolean | null, errorIn: T) {
    this.susccessfull = susccessIn;
    this.error = errorIn;
  }

  public clone(): ResultProcess<T> {
    return new ResultMain<T>(this.susccessfull, this.error);
  }
}

const errorCode: CodeError = {
  message: "Ok",
  code: 200,
};

const resutMainWithGeneric: ResultMain<CodeError> = new ResultMain(
  true,
  errorCode
);
console.debug(resutMainWithGeneric);
console.debug(resutMainWithGeneric.error);
console.debug(resutMainWithGeneric.susccessfull);
const cloneResultMain = resutMainWithGeneric.clone();
console.debug(cloneResultMain);

// Type parameters as constraints

function assignValues<T extends U, U>(target: T, source: U): T {
  return {
    ...target,
    ...source,
  };
}
const numOne = { a: 3, b: 1, c: 6 };
console.debug(assignValues(numOne, { a: -4, c: -6 }));

//-----------------------------------------------------------------------------------------------
// Workinng with Generic
//-----------------------------------------------------------------------------------------------

interface SumResult<T extends number> {
  sumaProcess(valuesIn: T[]): number;
}

type SSumResult = <T extends number>(valuesIn: T[]) => number;

const sumaProcess: SSumResult = <T extends number>(valuesIn: T[]): number => {
  let sum: number = 0;
  for (const numberValue of valuesIn) {
    sum += numberValue;
  }

  return sum;
};

console.debug(sumaProcess([3, 5, 1, 9, 1]));

//-----------------------------------------------------------------------------------------------
// Workinng with Functions and Classes with annd without Generic
//-----------------------------------------------------------------------------------------------

const arrayWithNumber: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];

//Functions without using generics
function removeRandomArrayItemWithOutGeneric(
  arrayIn: Array<number>
): Array<number> {
  const randomIndexToFind: number = Math.floor(Math.random() * arrayIn.length);
  return arrayIn.splice(randomIndexToFind, 1);
}

console.debug(removeRandomArrayItemWithOutGeneric(arrayWithNumber));

// Functions using generics

function removeRandomArrayItemWithGeneric<T>(arrayIn: Array<T>): Array<T> {
  const randomIndexToFind: number = Math.floor(Math.random() * arrayIn.length);
  return arrayIn.splice(randomIndexToFind, 1);
}

console.debug(removeRandomArrayItemWithGeneric(arrayWithNumber));

// Class without using generics

class RemoverOnArray {
  public items: Array<number>;

  constructor(itemIn: Array<number>) {
    this.items = itemIn;
  }

  public addValue(item: number): number {
    return this.items.push(item);
  }

  public removeValue(arrayIn: Array<number>): Array<number> {
    const randomIndexToFind: number = Math.floor(
      Math.random() * arrayIn.length
    );
    return arrayIn.splice(randomIndexToFind, 1);
  }
}
const arrayWithNumber2: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];
console.debug(new RemoverOnArray(arrayWithNumber2).addValue(-4));
console.debug(
  new RemoverOnArray(arrayWithNumber2).removeValue(arrayWithNumber2)
);

// Class with generics
class RemoverOnArrayWithGenerics<T> {
  public items: Array<T> = [];

  constructor(itemIn: Array<T>) {
    this.items = itemIn;
  }

  public addValueWithGeneric(item: T): string {
    this.items.push(item);
    return `Add value: ${item}`;
  }

  public removeValueWithGeneric(arrayIn: Array<T>): Array<T> {
    const randomIndexWithGeneric: number = Math.floor(
      Math.random() * arrayIn.length
    );
    return arrayIn.splice(randomIndexWithGeneric, 1);
  }
}

const arrayWithNumber3: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];
const arrayWithNumber4: Array<string> = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
];
console.debug(
  new RemoverOnArrayWithGenerics(arrayWithNumber3).addValueWithGeneric(-4)
);
console.debug(
  new RemoverOnArrayWithGenerics(arrayWithNumber3).removeValueWithGeneric(
    arrayWithNumber3
  )
);
console.debug(
  new RemoverOnArrayWithGenerics(arrayWithNumber4).addValueWithGeneric("-4")
);
console.debug(
  new RemoverOnArrayWithGenerics(arrayWithNumber4).removeValueWithGeneric(
    arrayWithNumber4
  )
);

// Using generics inside TypeScript interfaces

const actualLoggedIn = <T extends object>(obj: T) => {
  const userIsOnline: boolean = true;
  return { ...obj, onLine: userIsOnline };
};

const userOne = actualLoggedIn({ name: "Juan", email: "juan@email.com" });
userOne.onLine = false;
console.debug(userOne);

interface UserLog<T> {
  name: string;
  email: string;
  onLine: boolean;
  skill: T;
}

const userNewOne: UserLog<string[]> = {
  name: "Juan",
  email: "juan@email.com",
  onLine: true,
  skill: ["a", "b"],
};

interface Greet<T> {
  fullName: string;
  messenge: string;
  skills: T;
}

type MessageGreet = (objIn: Greet<string>) => Greet<string>;

const messageGreet: MessageGreet = (objIn: Greet<string>): Greet<string> => {
  return {
    ...objIn,
    messenge: `Hi ${objIn.fullName}`,
    skills: "Dev",
  };
};

console.debug(
  messageGreet({
    fullName: "Juan",
    messenge: "",
    skills: "",
  })
);

// Passing default generic values to generics: pass in a default generic type to our generic.

function genericWithDefault<T = number>(arrayIn: T[]): T[] {
  return arrayIn.splice(Math.floor(Math.random() * arrayIn.length), 1);
}

console.debug(genericWithDefault([1, 6, 2, 1, 7]));

// Passing multiple generic values
function genericWithMultipleDefault<T = number, Y = number>(
  arrayIn: T[],
  multiply: Y
): [T[], Y] {
  return [
    arrayIn.splice(Math.floor(Math.random() * arrayIn.length), 1),
    multiply,
  ];
}
console.debug(genericWithMultipleDefault([1, 6, 2, 1, 7], 4));

// Adding constraints to generics: We can, however, add constraints to the generic to limit it to a specific type.

function getFromObjectAProperty<T, U extends keyof T>(objIn: T, keyIn: U) {
  return objIn[keyIn];
}

interface ObjectExample {
  name: string;
  status: boolean;
  createAt: Date;
  amount: number;
}

const newObjectExample: ObjectExample = {
  name: "example",
  status: true,
  createAt: new Date(),
  amount: 100,
};

console.debug(getFromObjectAProperty(newObjectExample, "name"));
console.debug(getFromObjectAProperty(newObjectExample, "createAt"));
