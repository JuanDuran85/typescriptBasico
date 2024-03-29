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

type Personas = {
  name: string;
  lastname: string
  age?: number;
  getNombre?: () => string;
}

let personas: Personas = {
  name: "Juan",
  lastname: "Perez",
  age: 20,
}

personas = {
  name: "Maria",
  lastname: "Perez",
  age: 20,
  getNombre(){
    return this.name;
  }
}


/* ------------------------------------------------------------------------------------------ */

// Objetos

type Vehiculo = {
  carroceria: string;
  modelo: string;
  antibalas: boolean;
  pasajeros: number;
  disparar?: () => void;
}

const batimovil: Vehiculo = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

const bumblebee: Vehiculo = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.debug("Disparando");
  }
};


// Villanos debe de ser un arreglo de objetos personalizados

type Villanos = {
  nombre: string;
  edad: number | undefined;
  mutante: boolean;
}

const villanos: Villanos[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis

type Charles = {
  poder: string;
  estatura: number;
}

const charles: Charles = {
  poder:"psiquico",
  estatura: 1.78
};


type Apocalipsis = {
  lider: boolean;
  miembros: string[];
}

const apocalipsis: Apocalipsis = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: Charles | Apocalipsis;

mystique = charles;
mystique = apocalipsis;

let mutable: number | string[];

mutable = ["Adios","Hola"];
mutable = 123;
