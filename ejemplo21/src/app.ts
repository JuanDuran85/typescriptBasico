// functions as types

function add(n1: number, n2: number){
    return n1 + n2;
}

function printResult(num: number){
    console.debug(`Result: ${num}`);
}

// we can use a function as types to describe a function

const combineValuesFunction: (a: number, b: number) => number = add;
//combineValuesFunction = printResult;
console.debug(combineValuesFunction(2,5));

// we can use a function as types to implements types in callback functions

function addAndHandleCallback(n1: number, n2: number, callFunc: (num: number)=>void){
    const result = add(n1,n2);
    callFunc(result);
}

addAndHandleCallback(3,5,(result: number)=> console.debug(result));

/**
 *
 * using never on function
 */
// Some functions never return a value. The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.

function generateErrorMessage(message: string, code: number): never {
    throw {message, code}
}

generateErrorMessage("Error de prueba not found",404)

//-----------------------------------------------------------------------------

const buttonInPage = document.querySelector('button')!;

function clickHandler(message: string){
    console.debug(`Click ${message}`);
}

buttonInPage.addEventListener('click', clickHandler.bind(null,'messaje'))

//-----------------------------------------------------------------------------
/* The `reduce` function is used to iterate over an array and accumulate a single
    value based on the elements of the array. It takes a callback function as an
    argument, which is executed for each element in the array. The callback function
    takes two parameters: the accumulated value (also known as the result) and the
    current element of the array. The callback function returns the updated
    accumulated value, which is then passed as the first parameter in the next
    iteration. Finally, the `reduce` function returns the final accumulated value. */
const addListNumbers = (...numbers: number[]): number => {
    return numbers.reduce((result:  number,value: number)=> {
        return result + value;
    },0)
}

console.debug(`Result: ${addListNumbers(1,3,4,5,6,2)}`);












