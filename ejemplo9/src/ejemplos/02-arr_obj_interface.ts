/*
    ===== Código de TypeScript =====
*/

const habilidades : (boolean | string | number)[] = ["a","b","c", 100, true];

habilidades.push(20);

console.debug(habilidades);

interface Personaje {
    nombre: string;
    poder: number;
    habilidades: string[];
    nacion?: string;
}

const personaje : Personaje = {
    nombre: "batman",
    poder: 89,
    habilidades: ["a", "b"],
};

personaje.nacion = "Ciudad Gotica";

console.table(personaje);