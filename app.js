// requiriendo modulo
const createTable = require('./createTable');
const colors = require('colors');
const yargs = require('yargs')

yargs.demand('base')

let message = ''; // crear variable para acumular tabla
const {base} = yargs.argv // obtener base POR YARGS
if (!Number(base)) throw new Error('base no es un numero') // validar que sea un nuemero

// for para iterar y crear tabla
for (let index = 0; index < 10; index++) {
  message += `${base} X ${index + 1} = ${base * (index + 1)} \n`
}
console.log('\n====================='.bgBlue);
console.log(`Esta es la tabla del ${base}`.rainbow);
console.log('====================='.bgBlue);
console.log(message.rainbow); // imprimir tabla por consola

createTable(message, base)
  .then((succes) => console.log(succes.green))
  .catch((error) => console.log(error.red))