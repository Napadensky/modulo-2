require('colors');

module.exports = require('yargs')
  .option('b', {
    alias: 'base',
    number: true,
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar',
    default: 10,
  }).option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla en consola',
  })
  .check((argv) => {
    if (!Number(argv.b)) throw '-> La base tiene que ser un numero'.red;
    if (argv.b > 20 || argv.b < 1) throw '-> Debes colocar un valor de base entre 1 y 20'.red;
    return true;
  });
