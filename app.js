const tablaDelCinco = require('./modules/crearArchivo');

tablaDelCinco.crearArchivo
    .then(message => console.log(message))
    .catch(error => console.log(error));