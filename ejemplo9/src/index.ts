/*
    ===== Código de TypeScript =====
*/

function sumar(a:number, b:number) : number {
    return a+b;
}

let sumarFlecha = (a:number, b:number) : number => a+b;

let resultado : number = sumar(4,6);
console.log(resultado);
console.log(sumarFlecha(3,7));

function multiplicar(numA:number, numB?: number, numC: number = 5) {
    return numA*numC;
};

console.log(multiplicar(3));