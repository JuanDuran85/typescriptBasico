/*
    ===== Código de TypeScript =====
*/

class Heroe {
    // los niveles de acceso permiten el alcance o visibilidad de los mismos
    private alterEgo: string; // solo visible dentro de la clase
    public edad: number; // fuera de la clase se puede ver
    static nombreReal: string; // se puede acceder a la propiedad sin crear una instancia de la clase

    imprimirAlterEgo(){
        return `El nombre es: ${this.alterEgo}`
    }
}

const ironMan = new Heroe();
console.log(ironMan);