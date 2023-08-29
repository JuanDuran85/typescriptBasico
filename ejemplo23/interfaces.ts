//------------------------------------------------------------------------------------------------------------
/**
 * Interfaces
 */

// create interface for anonymous function

interface OnlyAddFuntion {
    (a: number, b: number): number;
  }

  const onlyAdd: OnlyAddFuntion = (n1: number, n2: number) => n1 + n2;

  console.debug(onlyAdd(3,4));

  //--------------------------------------------------------------------------------
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

  console.debug(formatCurrency(1854.56,"EUR"));
  console.debug(formatCurrency(1854.56,"CLP"));
  console.debug(formatCurrency(1854.56,"CAD",'en'));
  console.debug(formatCurrency(1854.56,"CAD",'en-CA'));
  console.debug(formatCurrency(1854.56,"EUR","fr"));


//--------------------------------------------------------------------------------
// create a function that returns a specific property

interface getSwitchParameter {
  (option: string): string;
}

const getParameterByKey: getSwitchParameter = (option: string) => {
  const helperFunction: {[key: string]: string} = {
    a:"input was A",
    b:"input was B",
    c:"input was C",
    d:"input was D",
    e:"input was E",
    f:"input was F",
  };

  return helperFunction[option] || "Cannot find the input."
}

console.debug(getParameterByKey("c"));
console.debug(getParameterByKey("q"));
console.debug(getParameterByKey("f"));
console.debug(getParameterByKey("r"));
console.debug(getParameterByKey("e"));

//--------------------------------------------------------------------------------
// Diferent ways to type complex objects by index.
//--------------------------------------------------------------------------------

interface DataStructureType {
  [index: string]: {
    name: string;
    activated: boolean;
    alias: string;
  }
}

const fastHardToTypeDataStructure: DataStructureType = {
  uuid_1: {
    name: "TypeScript",
    activated: true,
    alias: "TS"
  },
  uuid_2: {
    name: "Python",
    activated: true,
    alias: "Py"
  },
  uuid_3: {
    name: "Fortran",
    activated: true,
    alias: "For"
  },
}

const result: DataStructureType = {
  xyz: {
    name: "xyz",
    activated: true,
    alias: "xyz"
  }
};

console.debug(result);
console.debug("Aqui");
