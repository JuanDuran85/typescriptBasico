/*
    ===== Código de TypeScript =====
*/

// los decoradores se usan para cambiar las clases en el momento que son definidas. un decorador no es mas que una funcion.

// genericos

function tipoDeFuncion<ABC>(argumento: ABC) {
    return argumento;
}

let soyString = tipoDeFuncion("Hola Mundo");
let soyNumero = tipoDeFuncion(134);
let soyArreglo = tipoDeFuncion([1,"34", true]);

let explicito = tipoDeFuncion<number>(200);