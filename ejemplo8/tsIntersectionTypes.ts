interface Variables {
    nombre: string;
    apellido: string
}

const datos = {} as Variables;
datos.nombre = "Juan";
datos.apellido = "Duran";

type NumberOrString2 = number | string;
const age2 : NumberOrString2 = Number(5);
console.debug(age2);

class User5 {
    name: string;
}

class Admin2 {
   permiso: number;
}

type UserAdmin2 = User5 & Admin2;

type FuncString2 = () => string;
function ejecutor (f: FuncString2) {
    console.debug(f());
}

ejecutor(()=>"casa");

const tupla: [string,number] = ["casa",5];

console.debug(tupla);

tupla[0]="string obligatorio";
tupla[1]=3;

console.debug(tupla);