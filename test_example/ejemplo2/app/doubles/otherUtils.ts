export type StringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  lengthTotal: number;
  extraInfo: Object | undefined;
};

export function calculateComplexity(stringToAnalyze: StringInfo) {
  return (
    Object.keys(stringToAnalyze.extraInfo).length * stringToAnalyze.lengthTotal
  );
}

//------------------------------------------------------------------------------------------
export type LoggerServiceCallBack = (arg: string) => void;

export function toUpperCaseWithCallBack(
  arg: string,
  callback: LoggerServiceCallBack
) {
  if (!arg) {
    return callback("invalid argument!!!");
  }

  callback(`Called function with: ${arg}`);
  return arg.toUpperCase();
}
