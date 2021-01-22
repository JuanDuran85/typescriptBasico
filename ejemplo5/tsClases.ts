class Solicitudes {
    static url: string = "https://www.typescriptlang.org";
    getAyuda() {
        console.log(`${Solicitudes.url}/help`);
    }

    static getCompila() {
        console.log(`${Solicitudes.url}/playground`);
    }
}

let nuevaS : Solicitudes = new Solicitudes();
nuevaS.getAyuda();
Solicitudes.getCompila();