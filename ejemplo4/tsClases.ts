class User2 {
  private _nombre: string;
  private _apellido: string;

  constructor(nombre: string, apellido: string) {
    this._nombre = nombre;
    this._apellido = apellido;
  }

  get fullName(): string {
    return `${this._nombre} ${this._apellido}`;
  }

  set fullName(nuevo: string) {
    const words = nuevo.split(" ");
    this._nombre = words[0];
    this._apellido = words[1];
  }
}

const usuario: User2 = new User2("", "");

usuario.fullName = "Juan Duran";
console.debug(usuario.fullName);
