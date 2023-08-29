//guardianes de tipo o type Guards

function isNumber(valor : number | string): valor is number {
    return typeof valor === "number";
}

function isString(valor : number | string): valor is string {
    return typeof valor === "string";
}


function printAge(age2: number | string) {
    if (isNumber(age2)) {
        console.debug("es un numero");
    } else {
        console.debug("Es una cadena");
    }
}

printAge('20');

// Type Assertions

interface AJAXSettings {
    url : string;
}

let options = {} as AJAXSettings; // sin modificar el objeto
options.url = "https://www.alirafael.com";

// Type Aliases y Intersection Type

type NumberOrString = number | string;

let age : NumberOrString;

class User {
    name: string = "Juan";
}

class Admin {
    permissions : number = 0;
}

type UserAdmin = User & Admin;
let user: UserAdmin;

type FuncString = (title : string) => string;

function executor(valor : FuncString) : string{
    console.debug(valor);
    return valor("hola 2");
}

let retorno : string = executor(()=>"hola");
console.debug(retorno);

// enums

enum Tallas {
    Chica   = 1,
    Mediana = 2,
    Grande  = 3
}

enum PaymenState {
    Creado,
    Pagado,
    EnDeuda
}

console.debug(PaymenState.EnDeuda);

class Pedido {
    tallas: number = 0;
}

let pedido : Pedido = new Pedido();
pedido.tallas = Tallas.Grande;