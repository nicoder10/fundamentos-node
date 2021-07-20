const tabla = require('./modules/crearArchivo');
const colors = require('colors');
const argv = require('./config/yargs.js');

let base = argv.argv.base;
let list = argv.argv.l;

tabla.crearArchivo(base, list)
    .then(message => console.log(message))
    .catch(error => console.log(error));

