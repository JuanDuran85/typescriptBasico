/**
 * Simple Snippets (one-liners) we can use with JS or TS
 */

// 1. Generate a random number between two values:
const maxNumber: number = 100;
const minNumber: number = 1;
const randomNumberResult: number =
  Math.random() * (maxNumber - minNumber) + minNumber;
console.log(
  "🚀 ~ file: snippets_one_liners.ts:9 ~ randomNumberResult:",
  randomNumberResult
);

// 2. Check if a number is an integer
const isIntegerNumber: (num: number) => boolean = (num: number) =>
  num % 1 === 0;
console.log(
  "🚀 ~ file: snippets_one_liners.ts:13 ~ isIntegerNumber:",
  isIntegerNumber(4)
);

// 3. Check if a value is null or undefined
const isNullOrUndefined: (obj: any) => boolean = (obj: any) =>
  obj === null || obj === undefined;
console.log(
  "🚀 ~ file: snippets_one_liners.ts:17 ~ isNullOrUndefined:",
  isNullOrUndefined(null)
);
