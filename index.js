"use strict";
var opensheetmusicdisplay_1 = require("opensheetmusicdisplay");
var osmd = new opensheetmusicdisplay_1.MusicSheetAPI();
setupCanvas();
function setupCanvas() {
    var canvas = document.createElement("canvas");
    canvas.width = 800;
    canvas.height = 600;
    document.body.appendChild(canvas);
    osmd.setCanvas(canvas);
    osmd.setWidth(800);
    loadMusicXML("node_modules/opensheetmusicdisplay/test/data/MuzioClementi_SonatinaOpus36No1_part1.xml");
}
;
function loadMusicXML(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        switch (xhttp.readyState) {
            case 0: // UNINITIALIZED
            case 1: // LOADING
            case 2: // LOADED
            case 3:
                break;
            case 4:
                osmd.load(xhttp.responseXML);
                break;
            default:
                throw ("Error loading MusicXML.");
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
//# sourceMappingURL=index.js.map