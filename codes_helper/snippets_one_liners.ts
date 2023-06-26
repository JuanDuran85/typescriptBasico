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

// 4. Check if a value is a truthy value
const isTruthyValue: (obj: any) => boolean = (obj: any) => !!obj;
console.log(
  "🚀 ~ file: snippets_one_liners.ts:33 ~ isTruthyValue:",
  isTruthyValue(0)
);

// 5. Check if a value is a falsy value
const isFalsyValue: (obj: any) => boolean = (obj: any) => !obj;
console.log(
  "🚀 ~ file: snippets_one_liners.ts:37 ~ isFalsyValue:",
  isFalsyValue(1)
);

// 6. Check if a value is a valid credit card number
const isCreditCardNumber: (valueIn: string) => boolean = (valueIn: string) => {
  const visaRegEx = /^(?:4\d{12}(?:\d{3})?)$/;
  const mastercardRegEx = /^(?:5[1-5]\d{14})$/;
  const amexRegEx = /^(?:3[47]\d{13})$/;
  const discoverRegEx = /^(?:6(?:011|5\d\d)\d{12})$/;

  const creditCards = [visaRegEx, mastercardRegEx, amexRegEx, discoverRegEx]

  for (const iterator of creditCards) {
    if (iterator.test(valueIn)) return true;
  }
  return false;
};
console.log("🚀 ~ file: snippets_one_liners.ts:59 ~ isCreditCardNumber:", isCreditCardNumber('4444565456555545'));
