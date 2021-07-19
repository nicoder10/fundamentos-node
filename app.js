const tabla = require('./modules/crearArchivo');
const colors = require('colors');
const yargs = require('yargs');


let argv = yargs.argv;
let base = argv.base;

tabla.crearArchivo(base)
    .then(message => console.log(message))
    .catch(error => console.log(error));