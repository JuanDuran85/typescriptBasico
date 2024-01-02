class Solicitudes {
    static url: string = "https://www.typescriptlang.org";
    getAyuda() {
        console.debug(`${Solicitudes.url}/help`);
    }

    static getCompila() {
        console.debug(`${Solicitudes.url}/playground`);
    }
}

const nuevaS : Solicitudes = new Solicitudes();
nuevaS.getAyuda();
Solicitudes.getCompila();