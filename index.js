System.register(["opensheetmusicdisplay"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var opensheetmusicdisplay_1;
    var osmd;
    function setup() {
        var container = document.createElement("div");
        document.body.appendChild(container);
        osmd = new opensheetmusicdisplay_1.OSMD(container, false);
        loadMusicXML("node_modules/opensheetmusicdisplay/test/data/MuzioClementi_SonatinaOpus36No1_part1.xml");
    }
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
                    osmd.render();
                    break;
                default:
                    throw ("Error loading MusicXML.");
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }
    return {
        setters:[
            function (opensheetmusicdisplay_1_1) {
                opensheetmusicdisplay_1 = opensheetmusicdisplay_1_1;
            }],
        execute: function() {
            setup();
            ;
        }
    }
});
//# sourceMappingURL=index.js.map