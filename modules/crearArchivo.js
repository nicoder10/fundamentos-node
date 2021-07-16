const fs = require('fs');

const crearArchivo = () => {
    return new Promise((resolve, reject) => {
        let producto = 0;
        let texto = '';
        for(let i = 1; i <= 10; i++) {
            producto = 5 * i;
            texto += `5 x ${i} = ${producto}\n`;
        }
        fs.writeFile('tabla-5.txt', texto, (err) => {
            if(err) reject('No se pudo crear archivo!');
            else resolve('Creado!');
        })
    })
}

module.exports = {
    crearArchivo: crearArchivo()
}
    