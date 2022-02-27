/* Los namespace se usan principalmente para la creacion de liberias o frameworks */

namespace Validations {
    export const validateText = (text: string): boolean => (text.trim().length > 1) ? true : false;

    export const validateDate = (date: Date): boolean => (isNaN(date.valueOf())) ? true : false;
}

console.log(Validations.validateText("Juan"));
console.log(Validations.validateDate(new Date("2022-02-21")));