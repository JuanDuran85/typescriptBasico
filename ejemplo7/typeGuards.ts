//utilizando guardian con predicado de tipo
function isNumber(obj:number | string) : obj is number{
    return typeof obj === "number";
}

function isString(obj:number | string) : obj is string {
    return typeof obj === "string";
}

function printEdad(age:number | string) {
    if (isNumber(age)) {
        console.info(`${age} es un numero`);
    } else {
        console.info(`${age} es un texto`);
    }
}

printEdad(20);