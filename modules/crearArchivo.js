const fs = require('fs');

const crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        let producto = 0;
        let texto = '';
        for(let i = 1; i <= 10; i++) {
            producto = base * i;
            texto += `${base} x ${i} = ${producto}\n`;
        }
        console.log(texto);
        fs.writeFile(`tabla-${base}.txt`, texto, (err) => {
            if(err) reject('No se pudo crear archivo!');
            else resolve('Creado!');
        })
    })
}

module.exports = {
    crearArchivo
}
    