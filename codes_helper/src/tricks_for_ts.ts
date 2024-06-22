/**
 * Very Useful Tricks for TypeScript Exclude Utility Type
 */

//---------------------------------------------------------------------------------------

/**
 *
 * Exclude is a built-in utility type in TypeScript. It is used to exclude types that you
 * do not want to include from a union type and generate a new type. This utility type is
 * very useful in development, it can help us write type-safe code and achieve better
 * code reuse.
 *
 * https://www.typescriptlang.org/docs/handbook/utility-types.html#exclude
 */

// Exclude from T those types that are assignable to U.
type MyExclude<T, U> = T extends U ? never : T;
type T0 = MyExclude<"a" | "b" | "c", "a" | "b">; // T0 = "c"
type T1 = MyExclude<"a" | "b" | "c", "a" | "b" | "d">; // T1 = "c"

//* 1. Exclude specified basic data types

type MyTypes = string | number | boolean;
type StringOrNumber = Exclude<MyTypes, boolean>;

let uidOne: StringOrNumber = 1;
uidOne = "uidTwo";
// uidOne = true; //! Type 'boolean' is not assignable to type 'StringOrNumber'.
console.debug(uidOne);

//* 2. Exclude subtypes of string or number types

type Status = "success" | "Not Found" | 200 | 404;
type StringStatus = Exclude<Status, number>; // type StringStatus = "success" | "error"
type NumberStatus = Exclude<Status, string>; // type NumberStatus = 200 | 404

let statusOut: StringStatus = "success";
statusOut = "Not Found";
// statusOut = 400; //! Type 'number' is not assignable to type 'StringStatus'. Type '400' is not assignable to type 'StringStatus'
console.debug(statusOut);

//* 3. Exclude members common to two union types

type TaskStatus = "Todo" | "InProgress" | "Done" | "Archived";
type ModuleHandledStatus = "Todo" | "Done" | "OnHold";

type TaskOnlyStatus = Exclude<TaskStatus, ModuleHandledStatus>; // type TaskOnlyStatus = "InProgress" | "Archived"

let taskStatus: TaskOnlyStatus = "InProgress";
taskStatus = "Archived";
// taskStatus = "OnHold"; //! Type '"OnHold"' is not assignable to type 'TaskOnlyStatus'.
console.debug(taskStatus);

//* 4. Exclude subtypes with specific propertie
// In this example, we want to exclude subtypes containing the legs property from the animal union type with multiple types.

type AnimalType =
  | { type: "dog"; legs: number }
  | { type: "cat"; legs: number }
  | { type: "fish"; fins: number };
type AnimalsWithFins = Exclude<AnimalType, { legs: number }>;

const fish: AnimalsWithFins = {
  type: "fish",
  fins: 5,
};
console.debug(fish);
/* const dog: AnimalsWithFins = {
    type: "dog",
    legs: 4
} */ //! Type '{ type: "dog"; legs: number; }' is not assignable to type 'AnimalWithFins'.

//* 5. Exclude subtypes of different types of the same property

// Another way to create a union type AnimalsWithFins, should be using the Exclude type via the Exclude<Animal, { type: 'dog' | 'cat'}>.

type AnimalsWithFinsTwo = Exclude<AnimalType, { type: "dog" | "cat" }>;
const fishTwo: AnimalsWithFins = {
  type: "fish",
  fins: 6,
};
console.debug(fishTwo);

//* 6. Exclude certain members of an enumeration type

enum StatusEnum {
  New,
  InProgress,
  Done,
  Cancelled,
}

type ActiveStatusFromEnum = Exclude<
  StatusEnum,
  StatusEnum.Done | StatusEnum.Cancelled
>;
// type ActiveStatusFromEnum = StatusEnum.New | StatusEnum.InProgress

//* 7. Exclude string literal types with the specified prefix

type LogEventType =
  | "userLogin"
  | "userLogout"
  | "systemException"
  | "systemCrash"
  | "performanceLoadTime"
  | "performanceApiResponmse";

  type SystemAndPerformanceEvents = Exclude<LogEventType, `user${string}`>;
  // the type SystemAndPerformanceEvents should be: "systemException" | "systemCrash" | "performanceLoadTime" | "performanceApiResponmse"

  //* 8. Exclude different forms of string literal types

  type LogEventTypeTwo =
    | "userLogin"
    | "userLogout"
    | "UserLogin"
    | "UserLogout"
    | "systemException"
    | "systemCrash"
    | "performanceLoadTime"
    | "performanceApiResponmse";

type SystemAndPerformanceEventsTwo = Exclude<LogEventType, `${"user" | "User"}${string}`>;
// the type SystemAndPerformanceEvents should be: "systemException" | "systemCrash" | "performanceLoadTime" | "performanceApiResponmse"


//* 9. Extracting Array Member Types
// Extract every array member as a union type

const namesToExtract = [
  'John',
  'Jane',
  'Jack',
] as const;
//  before
type NamesTypeBefore = 'John' | 'Jane' | 'Jack';
// after - better way
type NamesTypeAfter = (typeof namesToExtract)[number];
/* 
First we get the type of the names array through (typeof names)
Then we index into the array using [number], which gives us all the values in the array as a type. 
*/


//* 10. 
