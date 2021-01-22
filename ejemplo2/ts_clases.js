var Video = /** @class */ (function () {
    function Video(titulo) {
        this.titulo = titulo;
    }
    Video.prototype.getTitulo = function () {
        return this.titulo;
    };
    Video.prototype.setTitulo = function (tituloNuevo) {
        this.titulo = tituloNuevo;
    };
    Video.prototype.printTitulo = function () {
        console.log(this.titulo);
    };
    return Video;
}());
var miVideo = new Video("TS, clases y objetos");
miVideo.printTitulo();
console.log(miVideo.getTitulo());
miVideo.setTitulo("Nuevo titulo con TS");
miVideo.printTitulo();
