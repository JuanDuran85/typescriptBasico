/*
    ===== Código de TypeScript =====
*/

// un decorador es una funcion que expande su clase añadiendo funcionalidades especiales.

class MiSuperClase {
    public miPropiedad: string = 'ABC';

    imprimirPropiedad(){
        console.debug(this.miPropiedad);
    }
}

// encadenamiento opcional

interface Pasajero {
    nombre: string;
    hijos?: string[]; // ? propiedad opcional
}

const pasajero1 : Pasajero = {
    nombre: "Juan"
}

const pasajero2 : Pasajero = {
    nombre: "Yecenia",
    hijos: ["Ali", "Coromoto"]
}

function imprimeHijos(pasajero: Pasajero) : void {
    const numeroHijos = pasajero.hijos?.length || 0;
    console.debug(numeroHijos);
}

imprimeHijos(pasajero1);