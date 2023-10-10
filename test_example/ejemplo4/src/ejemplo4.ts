export function numberOfItems(
  s: string,
  startIndices: number[],
  endIndices: number[]
): number {
  validationStringIn(s, startIndices, endIndices);
  // "* | * * | *" start[1], end[5]
  //  0 1 2 3 4 5 -> count of "*" between | is 2
  
  const subString = s.slice(startIndices[0] - 1, endIndices[0]);
  
  if (subString.indexOf('|') === -1) return 0;
  
  const regularExpresionTest: RegExp = /\*[^|]*\|/g;
  const pipeRegularExpExist: RegExpMatchArray = subString.match(regularExpresionTest);
  let countMultiple: number = 0;

  if (pipeRegularExpExist) {
    for (const findedReg of pipeRegularExpExist) {
      const resultX = findedReg.match(/\*/g);
      console.debug(countMultiple);
      countMultiple += (findedReg.match(/\*/g) || []).length;
      console.debug(countMultiple);

    }
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
