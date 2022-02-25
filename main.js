"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function suma(num1, num2) {
    return num1 + num2;
}
console.log(suma(3, 5));
let sumando = (num1, num2) => num1 + num2;
console.log(sumando(6, 6));
function opcional(obligatorio, nombre) {
    console.log(obligatorio, nombre);
}
opcional(35);
opcional(35, "Juan");
function otraVD(defecto = "Juan") {
    console.log(defecto);
}
otraVD();
otraVD("Yece");
function otra(nombre) {
    console.log(nombre);
}
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    console.log(parejaHeroes, villano);
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    console.log(aliados);
    let Poderes;
    (function (Poderes) {
        Poderes[Poderes["acuaman"] = 0] = "acuaman";
        Poderes[Poderes["batman"] = 1] = "batman";
        Poderes[Poderes["flash"] = 5] = "flash";
        Poderes[Poderes["superman"] = 100] = "superman";
    })(Poderes || (Poderes = {}));
    console.log(Poderes);
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
    console.log(poder.charAt(0));
    console.log();
})();
function sumarNumeros(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
const unirheroes = (...personas) => {
    return personas.join(", ");
};
const noHaceNada = (numero, texto, booleano, arreglo) => {
    console.log("No hace nada");
};
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
let objetoNuevo = {
    nombre: "Juan",
    edad: 23,
    arregloString: ["uno", "dos", "tres"],
};
objetoNuevo = {
    nombre: "Maria",
    edad: 33,
    arregloString: ["uno", "dos", "tres"],
    getNombre() {
        return this.nombre;
    }
};
let personas = {
    name: "Juan",
    lastname: "Perez",
    age: 20,
};
personas = {
    name: "Maria",
    lastname: "Perez",
    age: 20,
    getNombre() {
        return this.name;
    }
};
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    }
};
const villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
const charles = {
    poder: "psiquico",
    estatura: 1.78
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
let mystique;
mystique = charles;
mystique = apocalipsis;
let mutable;
mutable = ["Adios", "Hola"];
mutable = 123;
class Video {
    constructor(titulo) {
        this.titulo = titulo;
    }
    getTitulo() {
        return this.titulo;
    }
    setTitulo(tituloNuevo) {
        this.titulo = tituloNuevo;
    }
    printTitulo() {
        console.log(this.titulo);
    }
}
let miVideo = new Video("TS, clases y objetos");
miVideo.printTitulo();
console.log(miVideo.getTitulo());
miVideo.setTitulo("Nuevo titulo con TS");
miVideo.printTitulo();
class Video2 {
    constructor(titulo) {
        this.titulo = titulo;
    }
    play() {
        console.log("playing");
        ;
    }
    stop() {
        console.log("stopped");
        ;
    }
}
class YoutubeVideo extends Video2 {
    constructor(titulo) {
        super(titulo);
        console.log("Iniciando Youtube");
    }
    play() {
        super.play();
        console.log("Playing a YouTube Video");
    }
}
let miVideo2 = new YoutubeVideo("TS, clases y objetos");
miVideo2.play();
class User2 {
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
let usuario = new User2("", "");
usuario.fullName = "Juan Duran";
console.log(usuario.fullName);
class Solicitudes {
    getAyuda() {
        console.log(`${Solicitudes.url}/help`);
    }
    static getCompila() {
        console.log(`${Solicitudes.url}/playground`);
    }
}
Solicitudes.url = "https://www.typescriptlang.org";
let nuevaS = new Solicitudes();
nuevaS.getAyuda();
Solicitudes.getCompila();
function isNumber2(obj) {
    return typeof obj === "number";
}
function isString2(obj) {
    return typeof obj === "string";
}
function printEdad(age) {
    if (isNumber2(age)) {
        console.info(`${age} es un numero`);
    }
    else {
        console.info(`${age} es un texto`);
    }
}
printEdad(20);
let datos = {};
datos.nombre = "Juan";
datos.apellido = "Duran";
let age2;
class User5 {
}
class Admin2 {
}
let user2;
function ejecutor(f) {
    console.log(f());
}
ejecutor(() => "casa");
let tupla = ["casa", 5];
console.log(tupla);
tupla[0] = "string obligatorio";
tupla[1] = 3;
console.log(tupla);
let nombre = "Juan";
let numero = 5;
let varias = "5555";
console.log(nombre, numero, varias);
let habilidades = ["a", "b", "c", 100, true];
habilidades.push(20);
console.log(habilidades);
const personaje = {
    nombre: "batman",
    poder: 89,
    habilidades: ["a", "b"],
};
personaje.nacion = "Ciudad Gotica";
console.table(personaje);
function sumar(a, b) {
    return a + b;
}
let sumarFlecha = (a, b) => a + b;
let resultado = sumar(4, 6);
console.log(resultado);
console.log(sumarFlecha(3, 7));
function multiplicar(numA, numB, numC = 5) {
    return numA * numC;
}
;
console.log(multiplicar(3));
function curar(personaje, curarX) {
    personaje.hp += curarX;
    console.log(personaje);
}
;
const nuevoPersonaje = {
    nombre: "Juan",
    hp: 50,
    mostrarHP() {
        console.log(`Los HP son: ${this.hp}`);
    }
};
curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarHP();
;
const superHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return `${this.nombre} vide en ${this.direccion.pais}, ciudad: ${this.direccion.ciudad}`;
    }
};
const direccion = superHeroe.mostrarDireccion();
console.log(direccion);
const reproductor = {
    volumen: 100,
    segundo: 45,
    cancion: 'XYZ',
    detalles: {
        anio: 2018,
        autor: "ABCDE"
    }
};
const { volumen: vol, segundo, cancion, detalles: { autor } } = reproductor;
console.log(`El volumen actual es: ${vol}`);
console.log(`El segundo actual es: ${segundo}`);
console.log(`La cancion actual es: ${cancion}`);
console.log(`El autor es: ${autor}`);
const aviones = ['A320', 'B737', 'A340', 'B757'];
const [, , a3, a4] = aviones;
console.log(a3, a4);
define("ejemplo9/src/ejemplos/06-desestrectura-funcion", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.calculoImpuestoVentas = void 0;
    const telefono = {
        description: 'Telefono 1',
        precio: 340
    };
    const tableta = {
        description: 'tableta 1',
        precio: 600,
    };
    function calculoImpuestoVentas(productos) {
        let total = 0;
        productos.forEach(({ precio }) => {
            total += precio;
        });
        let impuestoTotal = total * 0.16;
        return [total, impuestoTotal];
    }
    exports.calculoImpuestoVentas = calculoImpuestoVentas;
    const articulos = [tableta, telefono];
    const [total, impuesto] = calculoImpuestoVentas(articulos);
    console.log(`El total de la venta es: ${total}`);
    console.log(`El total del impuesto es: ${impuesto}`);
});
define("ejemplo9/src/ejemplos/07-import-export", ["require", "exports", "ejemplo9/src/ejemplos/06-desestrectura-funcion"], function (require, exports, _06_desestrectura_funcion_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const carroCompra = [
        {
            description: 'Computador 1',
            precio: 700
        },
        {
            description: 'Computador 2',
            precio: 1000
        },
    ];
    const [total, impuesto] = (0, _06_desestrectura_funcion_1.calculoImpuestoVentas)(carroCompra);
    console.log(`El subtotal del carro de compra es: ${total}`);
    console.log(`El total de impuesto es: ${impuesto}`);
    console.log(`El total de la compra es: ${total + impuesto}`);
});
class Heroe {
    imprimirAlterEgo() {
        return `El nombre es: ${this.alterEgo}`;
    }
}
const ironMan = new Heroe();
console.log(ironMan);
class SuperHerue2 {
    constructor(superNombre, nombreReal, edad) {
        this.superNombre = superNombre;
        this.nombreReal = nombreReal;
        this.edad = edad;
    }
}
const ironMan2 = new SuperHerue2('Iron Man', 'Tony', 45);
console.log(ironMan2);
class PersonaReal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
class Empleado extends PersonaReal {
    constructor(id, nivel, nombreReal) {
        super(nombreReal, 35);
        this.id = id;
        this.nivel = nivel;
        this.nombreReal = nombreReal;
    }
}
const e1 = new Empleado('ED4e4FG', 3, 'Juan');
console.log(e1);
function tipoDeFuncion(argumento) {
    return argumento;
}
let soyString = tipoDeFuncion("Hola Mundo");
let soyNumero = tipoDeFuncion(134);
let soyArreglo = tipoDeFuncion([1, "34", true]);
let explicito = tipoDeFuncion(200);
function printAll(valor) {
    console.log(valor);
}
printAll(["uno", "dos"]);
printAll([20, 55, 354]);
printAll([false]);
class MiSuperClase {
    constructor() {
        this.miPropiedad = 'ABC';
    }
    imprimirPropiedad() {
        console.log(this.miPropiedad);
    }
}
const pasajero1 = {
    nombre: "Juan"
};
const pasajero2 = {
    nombre: "Yecenia",
    hijos: ["Ali", "Coromoto"]
};
function imprimeHijos(pasajero) {
    var _a;
    const numeroHijos = ((_a = pasajero.hijos) === null || _a === void 0 ? void 0 : _a.length) || 0;
    console.log(numeroHijos);
}
imprimeHijos(pasajero1);
function isNumber(valor) {
    return typeof valor === "number";
}
function isString(valor) {
    return typeof valor === "string";
}
function printAge(age2) {
    if (isNumber(age2)) {
        console.log("es un numero");
    }
    else {
        console.log("Es una cadena");
    }
}
printAge('20');
let options = {};
options.url = "https://www.alirafael.com";
let age;
class User {
    constructor() {
        this.name = "Juan";
    }
}
class Admin {
    constructor() {
        this.permissions = 0;
    }
}
let user;
function executor(valor) {
    console.log(valor);
    return valor("hola 2");
}
let retorno = executor(() => "hola");
console.log(retorno);
var Tallas;
(function (Tallas) {
    Tallas[Tallas["Chica"] = 1] = "Chica";
    Tallas[Tallas["Mediana"] = 2] = "Mediana";
    Tallas[Tallas["Grande"] = 3] = "Grande";
})(Tallas || (Tallas = {}));
var PaymenState;
(function (PaymenState) {
    PaymenState[PaymenState["Creado"] = 0] = "Creado";
    PaymenState[PaymenState["Pagado"] = 1] = "Pagado";
    PaymenState[PaymenState["EnDeuda"] = 2] = "EnDeuda";
})(PaymenState || (PaymenState = {}));
console.log(PaymenState.EnDeuda);
class Pedido {
    constructor() {
        this.tallas = 0;
    }
}
let pedido = new Pedido();
pedido.tallas = Tallas.Grande;
function Decorador(cls) {
    console.log("decorador en ejecucion");
    cls.prototype.className = cls.name;
}
let Speaker = class Speaker {
};
Speaker = __decorate([
    Decorador
], Speaker);
let speaker = new Speaker();
console.log(speaker.className);
//# sourceMappingURL=main.js.map