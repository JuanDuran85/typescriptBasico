// decoradores de clases

function Decorador(cls : Function) {
    console.log("decorador en ejecucion");
    cls.prototype.className = cls.name;
}

@Decorador
class Speaker { }

let speaker : Speaker = new Speaker();

console.log((speaker as any).className);