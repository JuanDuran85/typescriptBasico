/* Tipado de objetos */

let objetoNuevo: { nombre: string; edad: number; arregloString: string[], getNombre?: () => string } = {
  nombre: "Juan",
  edad: 23,
  arregloString: ["uno", "dos", "tres"],
};


objetoNuevo = { 
    nombre: "Maria",
    edad: 33,
    arregloString: ["uno", "dos", "tres"],
    getNombre(){
        return this.nombre;
    }
}