/*
    ===== Código de TypeScript =====
*/

// un decorador es una funcion que expande su clase añadiendo funcionalidades especiales. 

class MiSuperClase {
    public miPropiedad: string = 'ABC';
    
    imprimirPropiedad(){
        console.log(this.miPropiedad);
    }
}