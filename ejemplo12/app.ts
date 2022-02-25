// Funciones Básicas
function sumarNumeros(a: number, b: number): number {
  return a + b;
}

const contar: Function = (heroes: string[]): number => {
  return heroes.length;
};
const superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//Parametros por defecto
const llamarBatman: Function = (llamar: boolean = true): void => {
  if (llamar) {
    console.log("Batiseñal activada");
  }
};

llamarBatman();

// Rest?
const unirheroes: Function = ( ...personas: string[] ): string => {
  return personas.join(", ");
};

// Tipo funcion
const noHaceNada = (
  numero: number,
  texto: string,
  booleano: boolean,
  arreglo: string[]
): void => {
  console.log("No hace nada");
};

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco: (n: number, t:string, b:boolean, a:string[]) => void;
noHaceNadaTampoco = noHaceNada;
