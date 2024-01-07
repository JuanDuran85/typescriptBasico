/* Clases con TypeScript */

class Avengers {
  static avgAge: number = 35;
  static showTeam() {
    return `El nombre de la clase: ${this.name}`;
  }

  constructor(
    private nombreCompleto: string,
    private team: string,
    public realName?: string
  ) {}

  protected getNombreCompleto() {
      return `${this.nombreCompleto} es de la equipo ${this.team}`;
  }
}

class XMan extends Avengers {
  constructor(nombreCompleto: string, team: string, public mutante: boolean) {
    super(nombreCompleto, team);
    this.mutante = mutante;
  }

  public getMutante(){
      return `${this.mutante} and ${this.getNombreCompleto()}`;
  }
}

const antman = new Avengers("Antman", "Cap");
console.debug(antman);
console.debug(Avengers.avgAge);
console.debug(Avengers.showTeam());
const mutanteXMan = new XMan("Antman", "Cap", true);
console.debug(mutanteXMan.getMutante());


/* ---------------------------------------------------------------------- */
/* Singleton es un patrón de diseño creacional que nos permite asegurarnos de que una clase tenga una única instancia */
/* ---------------------------------------------------------------------- */

class Apocalipsis {
    static instance: Apocalipsis;
    private constructor(public name: string ){
        this.name = name;
    }
    static getInstance(): Apocalipsis{
        if (!Apocalipsis.instance){
            Apocalipsis.instance = new Apocalipsis('Apocalipsis now');
        }
        return Apocalipsis.instance;
    }

    changeName(newName: string): void{
        this.name = newName;
    }
}

const apoca1 = Apocalipsis.getInstance();
const apoca2 = Apocalipsis.getInstance();
const apoca3 = Apocalipsis.getInstance();

apoca1.changeName('New Apocalipsis now');

console.debug(apoca1, apoca2, apoca3);

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------


