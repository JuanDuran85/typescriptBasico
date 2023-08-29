class Video {
    titulo: string;

    constructor(titulo : string){
        this.titulo = titulo;
    }

    getTitulo() : string {
        return this.titulo;
    }

    setTitulo(tituloNuevo : string) {
        this.titulo = tituloNuevo;
    }

    printTitulo(){
        console.debug(this.titulo);
    }
}

let miVideo : Video = new Video("TS, clases y objetos");
miVideo.printTitulo();
console.debug(miVideo.getTitulo());
miVideo.setTitulo("Nuevo titulo con TS");
miVideo.printTitulo();