class User {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get fullName() {
        return `${this._nombre} ${this._apellido}`;
    }
    set fullName(nuevo) {
        let words = nuevo.split(' ');
        this._nombre = words[0];
        this._apellido = words[1];
    }
}
let usuario = new User("", "");
usuario.fullName = "Juan Duran";
console.log(usuario.fullName);
