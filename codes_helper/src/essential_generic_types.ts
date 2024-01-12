/**
 * !Essential Generic Types in the Standard Library
 */

// First, a generic type is a type that is defined in terms of one or more type parameters.
// Type parameters are placeholders for actual types that are specified when the generic type is used.
// They are defined using angle brackets (<>) after the name of the type.

/**
 * !1. Array<T>
 */
// The Array<T> type is a generic type that represents an array of elements of type T. It provides a number of methods for working with arrays, such as map, filter, reduce, and sort.

const numberOfItems: Array<number> = [3, 6, 1, 8, 4, 9, 12];
console.debug({ numberOfItems });
const averageOfNumbers: number = numberOfItems.reduce(
  (prev, curr, index, arr) => prev + curr,
  0
);
console.debug(averageOfNumbers / numberOfItems.length);

/**
 * !2. Map<K, V>
 */
// The Map<K, V> type is a generic type that represents a collection of key-value pairs. It provides a way to store and retrieve values based on a key.

interface MapData {
  name: string;
  population: number;
}
const dataOne = {
  name: "New York",
  population: 8_000_000,
};
const dataTwo = {
  name: "Los Angeles",
  population: 4_000_000,
};
const dataThree = {
  name: "Chicago",
  population: 3_000_000,
};

const newMapData: Map<string, MapData> = new Map<string, MapData>();
newMapData.set(dataOne.name, dataTwo);
newMapData.set(dataTwo.name, dataTwo);
newMapData.set(dataThree.name, dataThree);
console.debug(newMapData.get("Chicago"));
console.debug(newMapData.values());

/**
 * !3. Set<T>
 */
// The Set<T> type is a generic type that represents a collection of unique values of type T. It provides a way to add and remove values and to check if a value is in the set.

const setValuesData = new Set<number>();
setValuesData.add(1);
setValuesData.add(4);
setValuesData.add(6);
setValuesData.add(1); //NOSONAR
setValuesData.add(7);
setValuesData.add(11);
setValuesData.add(10);
setValuesData.add(1); //NOSONAR
setValuesData.add(4); //NOSONAR
console.debug(setValuesData);

/**
 * !4. Pick<T, K>
 */
// The Pick<T, K> type creates a new type by picking only the specified properties from the original type. Note that Pick<T,K> is a shorthand of {[k in K]: T<k>}

interface UserDataFull {
  id: string;
  username: string;
  followers: number;
  isBlocked: boolean;
}

type TypeUserWithPick = Pick<UserDataFull, "id" | "isBlocked">;
const newUser: TypeUserWithPick = {
  id: "23dff32",
  isBlocked: true,
};
console.debug({ newUser });

/**
 * !5. Omit<T, K>
 */
// The Omit<T, K> type creates a new type by omitting the specified properties from the original type.

type TypeUserWithOmit = Omit<UserDataFull, "isBlocked">;
const newUserII: TypeUserWithOmit = {
  id: "23dff32",
  username: "John Doe",
  followers: 100,
};
console.debug({ newUserII });

/**
 * !6. Partial<T>
 */
// The Partial<T> type creates a new type by making all properties of T optional.
type UserWithPartial = Partial<UserDataFull>;
const newUserIII: UserWithPartial = {
  id: "23dff32",
  username: "John Doe",
};
console.debug({ newUserIII });

/**
 * !7. ReturnType<T>
 */
// The ReturnType<T> type is a generic type that takes a function type T and returns the return type of that function type.

function addTwoNumbers(a: number, b: number): number {
  return a + b;
}

type AddTwoNumbersType = ReturnType<typeof addTwoNumbers>;

/**
 * !7. Exclude<T, U>
 */
// The Exclude<T, U> type creates a new type that excludes any types from T that are assignable to any type in U.

type AOne = "a" | "b" | "c";
type BOne = "a" | "c" | "d";

type DifferenceOne = Exclude<AOne, BOne>;

/**
 * !8. Record<K, T>
 */
// The Record<K, T> type creates a new type that represents an object with keys of type K and values of type T.

type UserRecord = {
  id: number;
  name: string;
  age: number;
};

type UserRecordMap = Record<string, UserRecord>;

const userOne: UserRecordMap = {
  "1": {
    id: 1,
    name: "John",
    age: 30,
  },
  "2": {
    id: 2,
    name: "Jane",
    age: 25,
  },
}
console.debug({ userOne });

/**
 * !9. Const Assertions
 */
// they allow us to signal TypeScript that no literal values should be widened. 

//For example:
const ids = [1, 2, 3] as const; // gives us the type readonly [1, 2, 3] , which is a tuple.
console.debug(ids);

// Another example:
const screens = {
  Home: 'HOME_SCREEN',
  Profile: 'PROFILE_SCREEN',
} as const; // gives us the type readonly { readonly Home: "HOME_SCREEN"; readonly Profile: "PROFILE_SCREEN"; } , which is a literal object.
console.debug(screens);

type Position = 'Programmer' | 'Manager' | 'Engineer';
type Employee = {
  name: string;
  position: Position;
  salary: number;
}
function paySalary(employ: Employee) {
  console.debug( `The pay for: ${employ.name} is ${employ.position}`);
}
const employeeOne = {
  name: 'John Doe',
  position: 'Programmer',
  salary: 4000
} as const; // the position of 'Programmer' will be for sure a programmer and never changed

paySalary(employeeOne);

/**
 * !10. 
 */
// 


