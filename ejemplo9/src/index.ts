/*
    ===== Código de TypeScript =====
*/

// genericos

function tipoDeFuncion<ABC>(argumento: ABC) {
    return argumento;
}

let soyString = tipoDeFuncion("Hola Mundo");
let soyNumero = tipoDeFuncion(134);
let soyArreglo = tipoDeFuncion([1,"34", true]);

let explicito = tipoDeFuncion<number>(200);