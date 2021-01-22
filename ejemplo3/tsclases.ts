class Video2 {
    titulo: string;

    constructor(titulo : string){
        this.titulo = titulo;
    }
    play(){
        console.log("playing");;
    }
    stop(){
        console.log("stopped");;
    }
}

class YoutubeVideo extends Video2{
    constructor(titulo : string){
        super(titulo);
        console.log("Iniciando Youtube");
    }
    play(){
        super.play();
        console.log("Playing a YouTube Video");
    }   
}

let miVideo2 : YoutubeVideo = new YoutubeVideo("TS, clases y objetos");

miVideo2.play();