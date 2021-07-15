const tablaDelCinco = () => {
    let producto = 0;
    for(let i = 1; i <= 10; i++) {
        producto = 5 * i;
        console.log(`5 x ${i} = ${producto}`);
    }
}

tablaDelCinco();