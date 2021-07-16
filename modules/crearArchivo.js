const fs = require('fs');

const crearArchivo = () => {
    let producto = 0;
    let texto = '';
    for(let i = 1; i <= 10; i++) {
        producto = 5 * i;
        texto += `5 x ${i} = ${producto}\n`;
    }
    fs.writeFile('tabla-5.txt', texto, (err) => {
        if(err) console.log('No se pudo crear archivo!');
        else console.log('Creado!');
    })
}

module.exports = {
    crearArchivo: crearArchivo()
}
    