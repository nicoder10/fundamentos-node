const tabla = require('./modules/crearArchivo');

let argv = process.argv;
let valor = argv[2].split('=')[1];

let base = valor;

tabla.crearArchivo(base)
    .then(message => console.log(message))
    .catch(error => console.log(error));