/*
    ===== Código de TypeScript =====
*/

class Heroe {
  // los niveles de acceso permiten el alcance o visibilidad de los mismos
  private alterEgo: string; // solo visible dentro de la clase
  public edad: number; // fuera de la clase se puede ver
  static nombreReal: string; // se puede acceder a la propiedad sin crear una instancia de la clase

  imprimirAlterEgo() {
    return `El nombre es: ${this.alterEgo}`;
  }
}

const ironMan = new Heroe();
console.log(ironMan);

class SuperHerue2 {
  constructor(
    public superNombre: string,
    public nombreReal: string,
    public edad: number
  ) {}
}

const ironMan2 = new SuperHerue2("Iron Man", "Tony", 45);
console.log(ironMan2);

//--------------------------------------------------------------------------

class PersonaReal {
  constructor(public nombre: string, public edad: number) {}
}

class Empleado extends PersonaReal {
  constructor(
    public id: string,
    public nivel: number,
    public nombreReal: string
  ) {
    super(nombreReal, 35);
  }
}

const e1 = new Empleado("ED4e4FG", 3, "Juan");
console.log(e1);

//--------------------------------------------------------------------------------------
// clases abstractas
interface CriteriosNuevos {
  a: string;
  b: string;
  c: string;
  d: string;
}

type newObjectType = { [key: string]: string };

abstract class AgregandoFiltrosMongo {
  public static iniciandoCriterios(modeloMongo: any) {
    return AgregadoLookupCriterios;
  }
}

abstract class AgregadoLookupCriterios implements AgregandoFiltrosMongo {
  public static agregandoCriteriosLook(criteriosLook?: CriteriosNuevos) {
    return AgregandoCriteriosMatch;
  }
}

abstract class AgregandoCriteriosMatch implements AgregadoLookupCriterios {
  public static agregandoCriteriosMatch(matchCriterials?: object) {
    return EjecutandoCriteriosFinal;
  }
}

abstract class EjecutandoCriteriosFinal implements AgregandoCriteriosMatch {
  public static ejecutando(): string {
    return "value all";
  }
}

console.log(AgregandoFiltrosMongo.arguments());

const result = AgregandoFiltrosMongo.iniciandoCriterios("value").agregandoCriteriosLook({ a: "x", b: "y", c: "w", d: "z" }).agregandoCriteriosMatch().ejecutando();
console.log(result);

//-------------------------------------------------------------------------------------------------
// another option
// ----------------------------------------------------------------------
