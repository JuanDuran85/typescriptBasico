export function numberOfItems(
  s: string,
  startIndices: number[],
  endIndices: number[]
): number | number[] {
  validationStringIn(s, startIndices, endIndices);
  
  let subString: string = s.slice(startIndices[0] - 1, endIndices[0]);

  if (subString.indexOf("|") === -1) {
    return 0;
  }

  while (subString.startsWith("*")) {
    subString = subString.slice(1);
  }
  while (subString.endsWith("*")) {
    subString = subString.slice(0, subString.length - 1);
  }

  const regularExpressionTest: RegExp = /(?<=\|)\*+(?=\|)/g;
  const pipeRegularExpExist: RegExpMatchArray = subString.match(
    regularExpressionTest
  );
  let countMultiple: number = 0;

  if (!pipeRegularExpExist) {
    return 0;
  }

  for (const strictFound of pipeRegularExpExist) {
    countMultiple += strictFound.length;
  }

  return countMultiple;
}

function validationStringIn(
  s: string,
  startIndices: number[],
  endIndices: number[]
) {
  if (s.length === 0 || !/^[*|]*$/.test(s)) {
    throw new Error("Error...");
  }

  if (
    startIndices.length !== endIndices.length ||
    startIndices.length === 0 ||
    endIndices.length === 0
  ) {
    throw new Error("Error...");
  }

  if (
    !Number.isInteger(startIndices[0]) ||
    !Number.isInteger(endIndices[0]) ||
    startIndices[0] < 1 ||
    endIndices[0] <= startIndices[0] ||
    endIndices[0] > s.length
  ) {
    throw new Error("Error...");
  }
}
