class Video2 {
    titulo: string;

    constructor(titulo : string){
        this.titulo = titulo;
    }
    play(){
        console.debug("playing");;
    }
    stop(){
        console.debug("stopped");;
    }
}

class YoutubeVideo extends Video2{
    constructor(titulo : string){
        super(titulo);
        console.debug("Iniciando Youtube");
    }
    play(){
        super.play();
        console.debug("Playing a YouTube Video");
    }
}

let miVideo2 : YoutubeVideo = new YoutubeVideo("TS, clases y objetos");

miVideo2.play();