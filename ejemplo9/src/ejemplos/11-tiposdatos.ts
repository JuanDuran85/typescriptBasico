//guardianes de tipo o type Guards

function isNumber(valor : number | string): valor is number {
    return typeof valor === "number";
}

function isString(valor : number | string): valor is string {
    return typeof valor === "string";
}


function printAge(age: number | string) {
    if (isNumber(age)) {
        console.log("es un numero");
    } else {
        console.log("Es una cadena");
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
    name: string;
}

class Admin {
    permissions : number;
}

type UserAdmin = User & Admin;
let user: UserAdmin;

type FuncString = (title : string) => string;

function executor(valor : FuncString) : string{
    console.log(valor);
    return valor("hola 2");
}

let retorno : string = executor(()=>"hola");
console.log(retorno);

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

console.log(PaymenState.EnDeuda);

class Pedido {
    tallas: number;
}

let pedido : Pedido = new Pedido();
pedido.tallas = Tallas.Grande;