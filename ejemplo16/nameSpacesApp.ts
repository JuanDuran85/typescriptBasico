/* Los namespace se usan principalmente para la creacion de liberias o frameworks */

namespace Validations {
    export const validateText = (text: string): boolean => text.trim().length > 1;

    export const validateDate = (date: Date): boolean => isNaN(date.valueOf());
}

console.debug(Validations.validateText("Juan"));
console.debug(Validations.validateDate(new Date("2022-02-21")));

// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------

namespace DisplayDataNameSpace {
    export function printToConsole(data: any): void {
        console.debug(data);
    }
}

DisplayDataNameSpace.printToConsole("Hello World");




// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------


