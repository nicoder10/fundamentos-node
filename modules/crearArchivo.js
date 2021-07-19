const fs = require('fs');

const crearArchivo = (base, list) => {
    return new Promise((resolve, reject) => {
        let producto = 0;
        let texto = '';
        for(let i = 1; i <= 10; i++) {
            producto = base * i;
            texto += `${base} x ${i} = ${producto}\n`;
        }
        if(list) {
            console.log(`<----- TABLA DEL ${base} ----->\n`.bold)
            console.log(texto.rainbow)
        }
        fs.writeFile(`tabla-${base}.txt`, texto, (err) => {
            if(err) reject('No se pudo crear archivo!'.red);
            else resolve('Creado!'.green);
        })
    })
}

module.exports = {
    crearArchivo
}
    