// Crear interfaces

interface Coche {
  encender: boolean;
  velocidadMaxima: number;
  acelear():void;
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto: Coche ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

console.debug({ conducirBatimovil });

const batimovil: Coche = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.debug("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilizar el siguiente objeto
// utilizando propiedades opcionales

interface Villano {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const guason: Villano = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guasonEntry: Villano ):void => {
  if( guasonEntry.reir ){
    console.debug("JAJAJAJA");
  }
}

reir(guason);
// Cree una interfaz para la siguiente funcion

type Gotica = ( ciudadanos:string[] ) =>number;

const ciudadGotica: Gotica = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

console.debug({ ciudadGotica });
// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface Propiedades {
  edad: number;
  estadoCivil: string;
  nombre: string;
  sexo: string;
  imprimirBio(): void;
}

class Persona implements Propiedades {
  public nombre: string;
  public edad: number;
  public sexo: string;
  public estadoCivil: string;
  public imprimirBio: () => void;
}