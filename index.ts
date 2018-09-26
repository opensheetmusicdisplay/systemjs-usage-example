import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";

let osmd: OpenSheetMusicDisplay;
setup();

function setup() {
	let container: HTMLElement = <HTMLElement>document.createElement("div");
    document.body.appendChild(container);

    osmd = new OpenSheetMusicDisplay(container, {autoResize: false});
    loadMusicXML("node_modules/opensheetmusicdisplay/test/data/MuzioClementi_SonatinaOpus36No1_part1.xml");
};

function loadMusicXML(url: string) {
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function () {
	   switch (xhttp.readyState) {
	      case 0 : // UNINITIALIZED
	      case 1 : // LOADING
	      case 2 : // LOADED
	      case 3 : // INTERACTIVE
	      break;
	      case 4 : // COMPLETED
	      	osmd.load(xhttp.responseXML);
	      	osmd.render();
	      	break;
	      default:
	      	throw("Error loading MusicXML.");
	   }
	}
   xhttp.open("GET", url, true);
   xhttp.send();
 }