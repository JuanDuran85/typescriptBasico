export function plusMinus(arr: number[]): void {
  if (!Array.isArray(arr)) throw new Error("Error - Not an Array");

  if (arr.length < -100 || arr.length > 100) {
    throw new Error("Error - Out of range");
  }
  let positive: number = 0;
  let negative: number = 0;
  let zeros: number = 0;

  const lengthArray: number = arr.length;

  for (const element of arr) {
    if (element < -100 || element > 100) {
      throw new Error("Error - Out of range");
    }

    if (element < 0) {
      negative++;
      continue;
    }

    if (element > 0) {
      positive++;
      continue;
    }

    if (element === 0) {
      zeros++;
    }
  }

  console.log(positive / lengthArray);
  console.log(negative / lengthArray);
  console.log(zeros / lengthArray);
}
