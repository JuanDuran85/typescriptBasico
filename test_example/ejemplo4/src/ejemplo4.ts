export function numberOfItems(
  s: string,
  startIndices: number[],
  endIndices: number[]
): number {
  validationStringIn(s, startIndices, endIndices);

  let countMultiple = 0;
  let counPipe = 0;

  // "* | * * | *" start[1], end[5]
  //  0 1 2 3 4 5 ->

  const subString = s.slice(startIndices[0] - 1, endIndices[0]);

  for (const iterator of subString) {
    if (iterator === "|") {
      counPipe++;
    }
    if (iterator === "*" && counPipe >= 1) {
      countMultiple++;
    }
    if (counPipe === 2) {
      counPipe = 0;
    }

    if (counPipe === 1 && iterator === "*" && countMultiple !== 0) {
      counPipe = 0;
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
