const { boolean, number } = require('yargs');
const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    description: 'Base to use for multiplication'
                })
                .option('l', {
                    alias: 'list',
                    type: 'boolean',
                    default: 'false',
                    demandOption: false,
                    description: 'If true shows table with result'
                })
                .check((argv, options) => {
                    let base = argv.base;
                    if(isNaN(base)) throw Error ('El valor ingresado debe ser un numero');
                    else if(!(base >= 1 && base <= 20)) throw Error ('Debes colocar un valor de base entre 1 y 20');
                    else return true;
                }).argv;

module.exports = {
    argv
};