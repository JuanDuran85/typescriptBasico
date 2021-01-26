interface Variables {
    nombre: string;
    apellido: string
}

let datos = {} as Variables;
datos.nombre = "Juan";
datos.apellido = "Duran";

type NumberOrString = number | string;
let age : NumberOrString;

class User5 {
    name: string;
}

class Admin {
   permiso: number; 
}

type UserAdmin = User5 & Admin;
let user: UserAdmin;

type FuncString = () => string;
function ejecutor (f: FuncString) {};

ejecutor(()=>"casa");

let tupla : [string,number];

tupla[0]="string obligatorio";
tupla[1]=3;