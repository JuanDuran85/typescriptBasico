export function maximumBookCopies(arr: number[]): number[] {
  const n = arr.length;

  if (n < 1 || n > 10e6) {
    throw new Error("Error - Out of range");
  }
  const inventory: number[] = [];
  const goshArr: string[] = [];

  arr.forEach((value, index) => {
    if (value > 0 && index === 0) {
      inventory.push(1);
      goshArr.push(`ID-${value}`);
    }

    if (
      value > 0 &&
      index > 0 &&
      goshArr.includes(`ID-${value}`)
    ) {
      const result = goshArr.filter((a) => a.includes(`ID-${value}`));
      inventory.push(result.length + 1);
      goshArr.push(`ID-${value}`);
    }

    if (
      value > 0 &&
      index > 0 &&
      !goshArr.includes(`ID-${value}`)
    ) {
      inventory.push(1);
      goshArr.push(`ID-${value}`);
    }

    if (
      value < 0 &&
      index > 0 &&
      goshArr.includes(`ID-${value*-1}`)
    ) {
      const result = goshArr.filter((a) => a.includes(`ID-${value * -1}`));
      inventory.push(result.length - 1);
      goshArr.splice(goshArr.indexOf(`ID-${value * -1}`), 1);
    }
  });

  console.debug(inventory);
  return inventory;
}
