/**
 * Dump implementation
 */

export class StringToUpperCaseDump {
  public callingDumpToUperCaseFunction(args: string){
    //if(!args) throw new Error('Invalid string - no args provided');
    return dumpToUperCase(args);
  }
}

export function dumpToUperCase(args: string) {
  return args.toUpperCase();
}

export type stringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  lengthTotal: number;
  extraInfo: Object | undefined;
};

export function dumpGetStringInfo(args: string): stringInfo {
  return {
    lowerCase: args.toLowerCase(),
    upperCase: args.toUpperCase(),
    characters: Array.from(args),
    lengthTotal: args.length,
    extraInfo: {},
  };
}
