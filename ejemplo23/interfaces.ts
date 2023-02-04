//------------------------------------------------------------------------------------------------------------
/**
 * Interfaces
 */

// create interface for anonymous function

interface OnlyAddFuntion {
    (a: number, b: number): number;
  }
  
  const onlyAdd: OnlyAddFuntion = (n1: number, n2: number) => n1 + n2;
  
  console.log(onlyAdd(3,4));
  
  //-----------------------------------
  // formatting a price using the Intl API
  interface FormatCurrencyFunction {
    (value: number, currencyCode: string, locale?: string): string;
  }
  
  const formatCurrency: FormatCurrencyFunction = (value: number, currencyCode: string, locale?: string) => {
    const formatter: Intl.NumberFormat = Intl.NumberFormat(locale, { 
      style: "currency",
      currency: currencyCode
    });
  
    return formatter.format(value / 100);
  }
  
  console.log(formatCurrency(1854.56,"EUR"));
  console.log(formatCurrency(1854.56,"CLP"));
  console.log(formatCurrency(1854.56,"CAD",'en'));
  console.log(formatCurrency(1854.56,"CAD",'en-CA'));
  console.log(formatCurrency(1854.56,"EUR","fr"));