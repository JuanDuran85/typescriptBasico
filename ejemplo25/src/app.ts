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
console.log({ mergeResult });
console.log(mergeResult.age);
console.log(mergeResult.name);

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
console.log({ mergeResultWithContrains });
console.log(mergeResultWithContrains.age);
console.log(mergeResultWithContrains.name);

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

console.log(countAndDescribe("texto numero 1"));
console.log(countAndDescribe(["elemento 1"]));

// the keyof conntrains

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value: ${obj[key]}`;
}

console.log(extractAndConvert({ name: "Juan" }, "name"));

// Working with generic classes

// Simple Generic Classes
class DataStoregeGeneric<T extends string | number | boolean> {
  private data: T[] = [];

  addItems(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) return;
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
console.log(textStorage.getItems());

const numberStorage = new DataStoregeGeneric<number>();
numberStorage.addItems(3);
numberStorage.addItems(4);
numberStorage.removeItem(4);
console.log(numberStorage.getItems());

// Generic Utility types

// Awaited<Type>: This type is meant to model operations like await in async functions, or the .then() method on Promises - specifically, the way that they recursively unwrap Promises.

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
  console.log(
    `User ${title} has idUser ${id} and id ${userId} and is completed: ${completed}`
  );
}

displayUserData();

// Partial<Type>
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

console.log(infoUsurio);

const usuarios = (infoIn: UsersInfo, infoToUpdate: Partial<UsersInfo>) => {
  return { ...infoIn, ...infoToUpdate };
};

console.log(usuarios(infoUsurio, { name: "Juan", lastName: "Duran", age: 37 }));

// Required<Type>
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

// If you dont use all the property's  object, the error should be: Type '{ id: string; name: string; }' is missing the following properties from type 'Required<UserInfo2>': lastName, agets(2739)
const user2: Required<UserInfo2> = {
  id: "3ffghy6",
  name: "Juan",
  lastName: "Duran",
  age: 37,
};

// Readonly<Type>
// Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.
interface Books {
  id: string;
  title: string;
  pages: number;
}

const book1: Readonly<Books> = {
  id: '233drft',
  title: 'Book 1',
  pages: 51,
}

// if you try to assign a new value to a property, you will get an error: Cannot assign to 'pages' because it is a read-only property.
//book1.pages = 56;
console.log(book1);

// Record<Keys, Type>
// Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.
interface StoreProperties {
  sku: string;
  name: string;
  cuantity: number;
  active: boolean;
}

type ClothesKeys =  "tshirt" | "socks" | "jeans";
//type Record<K extends string | number | symbol, T> = { [P in K]: T; }
//Construct a type with a set of properties K of type T
const clothes: Record<ClothesKeys, StoreProperties> = {
  tshirt: {
    sku: "tshirt456",
    name: "Playera",
    cuantity: 14,
    active: true
  },
  socks: {
    sku: "socks1573",
    name: "Socks Prime",
    cuantity: 451,
    active: true
  },
  jeans: {
    sku: "jeans5369",
    name: "Cowboy Traditional",
    cuantity: 78,
    active: true
  }
}

// Pick<Type, Keys>
// Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.
interface Store2 {
  name: string;
  cuantity: number;
  active: boolean;
}

// you can create a new type by using only the properties you want to pick.
// type Pick<T, K extends keyof T> = { [P in K]: T[P]; }
// From T, pick a set of properties whose keys are in the union K
type StorePreview = Pick<Store2, "cuantity" & "name">

const storeOne: StorePreview = {
  cuantity: 4,
  name: 'jean',
} 