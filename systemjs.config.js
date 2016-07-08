(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                   './',
    'opensheetmusicdisplay': './node_modules/opensheetmusicdisplay',
    'vexflow':               './node_modules/vexflow',
    'typescript-collections':'./node_modules/typescript-collections'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                   { main: 'index.js',  defaultExtension: 'js' },
    'opensheetmusicdisplay': { main: 'dist/src/MusicSheetApi.js',  defaultExtension: 'js' },
    'vexflow':               { main: 'releases/vexflow-debug.js',  defaultExtension: 'js' }
  };

  var config = {
    map: map,
    packages: packages
  };

  System.config(config);

})(this);