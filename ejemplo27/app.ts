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
console.debug(rest);

const result = addFunction(3, 5);
console.debug(result);

//------------------------------------------------------------------------------
// Funciones de orden superior

function operationFunction(funIn: Function, a: number, b: number): number {
  console.debug("Working");
  console.debug(`Result: ${funIn(a, b)}`);
  return funIn(a, b);
}

const resultOp = operationFunction(addFunction, 6, 6);
console.debug(resultOp);

console.debug(
  `Working with arrow function: ${operationFunction(
    (x: number, y: number) => x * y,
    4,
    4
  )}`
);

//-------------------------------------------------------------------------------

const numberAcumulation: number[] = [4, 6, 3, 2, 7, 1];
const total: number = numberAcumulation.reduce(
  (acc: number, numbers: number) => {
    acc += numbers;
    console.debug(numbers);
    console.debug(acc);
    return acc;
  },
  0
);
console.debug(total);
