export function numberOfItems(
  s: string,
  startIndices: number[],
  endIndices: number[]
): number {
  validationStringIn(s, startIndices, endIndices);

  let countMultiple = 0;
  let countPipe = 0;

  // "* | * * | *" start[1], end[5]
  //  0 1 2 3 4 5 -> count of "*" between | is 2

  const subString = s.slice(startIndices[0] - 1, endIndices[0]);

  if (subString.indexOf('|') === -1) return 0;

  const newArrayOfSubString = Array.from(subString);
  const resultReduce = newArrayOfSubString.reduce((acc: number, curr: any) => {
    if (curr === '|') {
      acc++;
    }
    return acc; 
  },0)


  for (const iterator of subString) {
    if (iterator === "|") {
      countPipe++;
    }

    if (iterator === "*" && countPipe >= 1) {
      countMultiple++;
    }
    
    if (countPipe === 2) {
      countPipe = 0;
    }

    if (countPipe === 1 && iterator === "*" && countMultiple !== 0) {
      countPipe = 0;
      countMultiple = 0;
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
