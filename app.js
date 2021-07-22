const tabla = require('./modules/crearArchivo');
const argv = require('./config/yargs');

const { base } = argv.argv;
const list = argv.argv.l;

tabla.crearArchivo(base, list)
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
