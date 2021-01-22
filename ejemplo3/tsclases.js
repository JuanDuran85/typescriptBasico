var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Video2 = /** @class */ (function () {
    function Video2(titulo) {
        this.titulo = titulo;
    }
    Video2.prototype.play = function () {
        console.log("playing");
        ;
    };
    Video2.prototype.stop = function () {
        console.log("stopped");
        ;
    };
    return Video2;
}());
var YoutubeVideo = /** @class */ (function (_super) {
    __extends(YoutubeVideo, _super);
    function YoutubeVideo(titulo) {
        var _this = _super.call(this, titulo) || this;
        console.log("Iniciando Youtube");
        return _this;
    }
    YoutubeVideo.prototype.play = function () {
        _super.prototype.play.call(this);
        console.log("Playing a YouTube Video");
    };
    return YoutubeVideo;
}(Video2));
var miVideo2 = new YoutubeVideo("TS, clases y objetos");
miVideo2.play();
