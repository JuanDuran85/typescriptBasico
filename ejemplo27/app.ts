/**
 * Paradigma Funcional
 *
 * Funciones de primer orden: Es toda funcion que pueda ser tratada como una variable, en donde, la variable puede guardar una funcion, ejecutarla o enviada como parametro a otras funciones.
 *
 * Funciones de orden superior: son todas aquellas funciones que pueden recibir en parametros funciones
 *
 */

//------------------------------------------------------------------------------
// Funciones de primer orden
function addFunction(a: number, b: number): number {
  return a + b;
}

const rest = addFunction(1, 2);
console.log(rest);

// guardando la funcion en una variable
const addVariable = addFunction;
const result = addVariable(3, 5);
console.log(result);

//------------------------------------------------------------------------------
// Funciones de orden superior

function operationFunction(funIn: Function, a: number, b: number): number {
  console.log("Working");
  console.log(`Result: ${funIn(a, b)}`);
  return funIn(a, b);
}

const resultOp = operationFunction(addFunction, 6, 6);
console.log(resultOp);

console.log(`Working with arrow function: ${operationFunction((x: number,y: number)=>x*y,4,4)}`);

//-------------------------------------------------------------------------------
