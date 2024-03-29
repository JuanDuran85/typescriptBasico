function suma(num1:number, num2:number) : number {
    return num1+num2;
}

console.debug(suma(3,5));

let sumando = (num1: number,num2: number) : number => num1 + num2;

console.debug(sumando(6,6));

// se puede pasar o no un argumento, los argumentos opciones simpre van al final delos parametros de la funcion

function opcional(obligatorio: number, nombre?: string) {
    console.debug(obligatorio, nombre);
}

opcional(35);
opcional(35,"Juan");


// valores por defecto
function otraVD(defecto="Juan") {
    console.debug(defecto)
}

otraVD();
otraVD("Yece");

// retorno null o undefined con void en la funcion

function otra(nombre:string) : void {
    console.debug(nombre);
}

//