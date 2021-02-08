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

interface PersonajeLOR {
    nombre: string;
    hp: number;
    mostrarHP: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number) : void {
    personaje.hp += curarX; 
    console.log(personaje);
};

const nuevoPersonaje: PersonajeLOR = {
    nombre: "Juan",
    hp: 50,
    mostrarHP(){
        console.log(`Los HP son: ${this.hp}`);
    }
};

curar(nuevoPersonaje,20);
nuevoPersonaje.mostrarHP();
