// decoradores de clases

function Decorador(cls : Function) {
    console.debug("decorador en ejecucion");
    cls.prototype.className = cls.name;
}

@Decorador
class Speaker { }

let speaker : Speaker = new Speaker();

console.debug((speaker as any).className);