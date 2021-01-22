class User {
    private _nombre: string;
    private _apellido: string;

    get fullName():string {
        return `${this._nombre} ${this._apellido}`; 
    }

    set fullName(nuevo: string) {
        let words = nuevo.split(' ');
        this._nombre = words[0];
        this._apellido = words[1];
    }
}

let usuario : User = new User();

usuario.fullName = "Juan Duran";
console.log(usuario.fullName);