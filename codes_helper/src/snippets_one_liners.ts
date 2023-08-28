/**
 * Simple Snippets (one-liners) we can use with JS or TS
 */

// 1. Generate a random number between two values:
const maxNumber: number = 100;
const minNumber: number = 1;
const randomNumberResult: number =
  Math.random() * (maxNumber - minNumber) + minNumber;
console.debug(
  "🚀 ~ file: snippets_one_liners.ts:9 ~ randomNumberResult:",
  randomNumberResult
);

// 2. Check if a number is an integer
const isIntegerNumber: (num: number) => boolean = (num: number) =>
  num % 1 === 0;
console.debug(
  "🚀 ~ file: snippets_one_liners.ts:13 ~ isIntegerNumber:",
  isIntegerNumber(4)
);

// 3. Check if a value is null or undefined
const isNullOrUndefined: (obj: any) => boolean = (obj: any) => obj == null;
console.debug(
  "🚀 ~ file: snippets_one_liners.ts:17 ~ isNullOrUndefined:",
  isNullOrUndefined(null)
);

// 4. Check if a value is a truthy value
const isTruthyValue: (obj: any) => boolean = (obj: any) => !!obj;
console.debug(
  "🚀 ~ file: snippets_one_liners.ts:33 ~ isTruthyValue:",
  isTruthyValue(0)
);

// 5. Check if a value is a falsy value
const isFalsyValue: (obj: any) => boolean = (obj: any) => !obj;
console.debug(
  "🚀 ~ file: snippets_one_liners.ts:37 ~ isFalsyValue:",
  isFalsyValue(1)
);

// 6. Check if a value is a valid credit card number
const isCreditCardNumber: (valueIn: string) => boolean = (valueIn: string) => {
  const visaRegEx = /^(?:4\d{12}(?:\d{3})?)$/;
  const mastercardRegEx = /^(?:5[1-5]\d{14})$/;
  const amexRegEx = /^(?:3[47]\d{13})$/;
  const discoverRegEx = /^(?:6(?:011|5\d\d)\d{12})$/;

  const creditCards = [visaRegEx, mastercardRegEx, amexRegEx, discoverRegEx];

  for (const iterator of creditCards) {
    if (iterator.test(valueIn)) return true;
  }
  return false;
};
console.debug(
  "🚀 ~ file: snippets_one_liners.ts:59 ~ isCreditCardNumber:",
  isCreditCardNumber("4444565456555545")
);

// 7. Waiting for a specific amount of time in milliseconds
const waitTime: (ms: number) => Promise<void> = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));
console.debug("Init time");
waitTime(2000);
console.debug("End time");

// 8. Check if a date is a weekday.
const isWeekDay = (fullDate: Date): boolean => fullDate.getDay() % 6 !== 0;
console.debug(isWeekDay(new Date(2023, 10, 23)));
console.debug(isWeekDay(new Date(2023, 11, 23)));

// 9. Reversing a string.
const reverseStringTwo: (str: string) => string = (str: string): string =>
  str.split("").reverse().join("");
console.debug(reverseStringTwo("Juan"));

// 10. Check if a number is even.
const isEvenNumber: (numIn: number) => boolean = (numIn: number): boolean =>
  numIn % 2 === 0;
console.debug(isEvenNumber(6));

// 11. Capitalizing a string.
const capString: (str: string) => string = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);
console.debug(capString("lorem ipsum total"));

// 12.Check if an array is empty.
const isEmptyArray: (arrayIn: unknown[]) => boolean = (
  arrayIn: unknown[]
): boolean => Array.isArray(arrayIn) && !arrayIn.length;
console.debug(isEmptyArray([]));
console.debug(isEmptyArray([""]));
console.debug(isEmptyArray([2, 4, "g"]));

// 13. Check if an object/array is empty.
const isEmptyObject = (obj: any): boolean =>
  obj && Object.keys(obj).length === 0;
console.debug(isEmptyObject({}));
console.debug(isEmptyObject({ foo: "bar" }));

// 14.Generating a random integer based on two arguments.
const randomNumberInteger = (minNum: number, maxNum: number): number =>
  Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
console.debug(randomNumberInteger(1, 10));
console.debug(randomNumberInteger(30, 100));

// 15.Generating a random boolean.
const randomBoolean = (): boolean => Math.random() >= 0.5;
console.debug(randomBoolean());
console.debug(randomBoolean());
console.debug(randomBoolean());

// 16. Toggling a boolean. Turning a false to true and a true to false.
const toggleBoolean = (val: boolean): boolean => !val;
console.debug(toggleBoolean(true));
console.debug(toggleBoolean(false));

// 17. Convert an array to a single object based on a specific key
const toSingleObjectValue = <
  T extends Record<PropertyKey, unknown>,
  K extends keyof T
>(
  arrayIn: T[],
  key: K
): Record<string, T> =>
  Object.fromEntries(arrayIn.map((item) => [item[key], item]));

const arrayToConver = [
  { name: "Juan", year: "2023" },
  { name: "Maria", year: "2021" },
];

console.debug(toSingleObjectValue(arrayToConver, "name"));

// 18. Convert decimal to binary
const decimalToBinaryConversion: (num: number) => number = (
  num: number
): number =>
  num === 0 ? 0 : (num % 2) + 10 * decimalToBinaryConversion(~~(num / 2));
console.debug(decimalToBinaryConversion(0));
console.debug(decimalToBinaryConversion(2));
console.debug(decimalToBinaryConversion(15));
console.debug(decimalToBinaryConversion(20));
console.debug(decimalToBinaryConversion(30));

// 19. Generate fake IP
const randomIpGenerator: () => string = (): string =>
  [...new Array(4)]
    .map((_, index) => Math.floor(Math.random() * 255) + Number(Boolean(index)))
    .join(".");
console.debug(randomIpGenerator());
console.debug(randomIpGenerator());

// 20. Check if the code is running in Node.js
const isNodeCodeRunning = (): boolean =>
  typeof process !== "undefined" &&
  Object.prototype.toString.call(process) === "[object process]";
console.debug(isNodeCodeRunning());

// 21. Check whether a value is a plain object
const isPlainObjectResult: (val: unknown) => val is Record<string, any> = (
  val: unknown
): val is Record<string, any> =>
  Object.prototype.toString.call(val) === "[object Object]" &&
  [Object.prototype, null].includes(Object.getPrototypeOf(val));
console.debug(isPlainObjectResult(2));
console.debug(isPlainObjectResult("2"));
console.debug(isPlainObjectResult([]));
console.debug(isPlainObjectResult(["34", 565]));
console.debug(isPlainObjectResult({}));
console.debug(isPlainObjectResult({ foo: "bar" }));

// 22. Format seconds as hh:mm:ss
const formatSecondsResult = (sec: number): string =>
  new Date(sec * 1000).toISOString().slice(11, 19);
console.debug(formatSecondsResult(1000));
console.debug(formatSecondsResult(100));
console.debug(formatSecondsResult(3600));

// 23. Get all subsets of the array
const getSubsetsResult: <T>(arrayIn: T[]) => T[][] = <T>(arrayIn: T[]): T[][] =>
  arrayIn.reduce(
    (acc, cur) => acc.concat(acc.map((k) => k.concat(cur))),
    [[] as T[]]
  );
console.debug(getSubsetsResult([1, 2, 3]));