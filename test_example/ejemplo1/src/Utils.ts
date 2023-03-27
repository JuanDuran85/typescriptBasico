/**
 * Dump implementation
 */

export function dumpToUperCase(args: string) {
  return args.toUpperCase();
}


export type stringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  length: number;
  extraInfo: Object | undefined;
}

export function dumpGetStringInfo(args: string): stringInfo {
  return {
    lowerCase: args.toLowerCase(),
    upperCase: args.toUpperCase(),
    characters: Array.from(args),
    length: args.length,
    extraInfo: {}
  }
}