/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    anio: number;
    autor: string;
}

const reproductor : Reproductor = {
    volumen: 100,
    segundo: 45,
    cancion: 'XYZ',
    detalles: {
        anio: 2018,
        autor: "ABCDE"
    }
}

const {volumen: vol, segundo, cancion, detalles: {autor}} = reproductor; // desestructurando
//const {autor} = detalles;

console.log(`El volumen actual es: ${vol}`);
console.log(`El segundo actual es: ${segundo}`);
console.log(`La cancion actual es: ${cancion}`);
console.log(`El autor es: ${autor}`);

const aviones : string[] = ['A320', 'B737', 'A340' , 'B757'];

const [, , a3, a4] = aviones;

console.log(a3, a4);