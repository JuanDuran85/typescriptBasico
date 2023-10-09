export function numberOfItems(
  s: string,
  startIndices: number[],
  endIndices: number[]
): number[] {
  if (s.length < 1 || s.split("").length < 1) {
    throw new Error("Error...");
  }

  Array.from(s).forEach((item) => {
    if (item !== "*" && item !== "|") {
      throw new Error("Error...");
    }
  });

  if (!Array.isArray(startIndices) || !Array.isArray(endIndices)) {
    throw new Error("Error...");
  }

  return [];
}
