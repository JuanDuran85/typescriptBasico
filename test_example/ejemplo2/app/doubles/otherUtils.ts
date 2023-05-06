export type StringInfo = {
    lowerCase: string;
    upperCase: string;
    characters: string[];
    lengthTotal: number;
    extraInfo: Object | undefined;
  };

export function calculateComplexity(stringToAnalyze: StringInfo) {
    return Object.keys(stringToAnalyze.extraInfo).length * stringToAnalyze.lengthTotal;
}