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
