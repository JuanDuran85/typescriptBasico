interface Variables {
    nombre: string;
    apellido: string
}

let datos = {} as Variables;
datos.nombre = "Juan";
datos.apellido = "Duran";

type NumberOrString2 = number | string;
let age2 : NumberOrString2;

class User5 {
    name: string;
}

class Admin2 {
   permiso: number; 
}

type UserAdmin2 = User5 & Admin2;
let user2: UserAdmin2;

type FuncString2 = () => string;
function ejecutor (f: FuncString2) {
    console.log(f());
}

ejecutor(()=>"casa");

let tupla: [string,number] = ["casa",5];

console.log(tupla);

tupla[0]="string obligatorio";
tupla[1]=3;

console.log(tupla);