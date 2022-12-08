// functions as types

function add(n1: number, n2: number){
    return n1 + n2;
}

function printResult(num: number){
    console.log(`Result: ${num}`);
}

// we can use a function as types to describe a function

let combineValuesFunction: (a: number, b: number) => number;
combineValuesFunction = add;
//combineValuesFunction = printResult;
console.log(combineValuesFunction(2,5));

// we can use a function as types to implements types in callback functions

function addAndHandleCallback(n1: number, n2: number, callFunc: (num: number)=>void){
    const result = add(n1,n2);
    callFunc(result);
}

addAndHandleCallback(3,5,(result: number)=> console.log(result));

/**
 * 
 * using never on function
 */
// Some functions never return a value. The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.

function generateErrorMessage(message: string, code: number): never {
    throw {message, code}
}

generateErrorMessage("Error de prueba not found",404)