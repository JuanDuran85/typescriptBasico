/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
  return a + b;
}

const sumarFlecha = (a: number, b: number): number => a + b;

const resultado: number = sumar(4, 6);
console.debug(resultado);
console.debug(sumarFlecha(3, 7));

function multiplicar(numA: number, numB?: number, numC: number = 5) {
  return numA * numC;
}

console.debug(multiplicar(3));

interface PersonajeLOR {
  nombre: string;
  hp: number;
  mostrarHP: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void {
  personaje.hp += curarX;
  console.debug(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
  nombre: "Juan",
  hp: 50,
  mostrarHP() {
    console.debug(`Los HP son: ${this.hp}`);
  },
};

curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarHP();
