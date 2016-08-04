(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                   './',
    'opensheetmusicdisplay': './node_modules/opensheetmusicdisplay',
    'vexflow':               './node_modules/vexflow',
    'typescript-collections':'./node_modules/typescript-collections',
    'es6-promise':           './node_modules/es6-promise',
    'jszip':                 './node_modules/jszip'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                   { main: 'index.js',  defaultExtension: 'js' },
    'opensheetmusicdisplay': { main: 'dist/src/OSMD/OSMD.js',  defaultExtension: 'js' },
    'vexflow':               { main: 'releases/vexflow-debug.js',  defaultExtension: 'js' },
    'es6-promise':           { main: 'dist/es6-promise.js',  defaultExtension: 'js' },
    'jszip':                 { main: 'dist/jszip.js',  defaultExtension: 'js' }
  };

  var config = {
    map: map,
    packages: packages
  };

  System.config(config);

})(this);