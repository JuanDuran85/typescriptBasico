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


//------------------------------------------------------------------------------------------

export type ClassOut = {
  values: string[];
  times: number;
}

export class OtherUtilsBasic {

  private callBackArgs: string[] = [];
  private timesCallBack: number = 0;

  public toLowerCaseMethod(arg: string): string{
    return arg.toLowerCase();
  }

  public loggerString(arg: string): ClassOut {
    console.log(arg);
    this.callBackArgs.push(arg);
    this.timesCallBack++;
    return {
      values: this.callBackArgs,
      times: this.timesCallBack
    }
  }
}
