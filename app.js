// requiriendo modulo
const createTable = require('./createTable');
const colors = require('colors');
const yargs = require('yargs').options('b',{
  alias: 'base',
  type: 'number',
  demandOption: true
}).argv

let message = ''; // crear variable para acumular tabla
const {b} = yargs // obtener base POR YARGS
if (!Number(b)) throw new Error('base no es un numero') // validar que sea un nuemero

// for para iterar y crear tabla
for (let index = 0; index < 10; index++) {
  message += `${b} X ${index + 1} = ${b * (index + 1)} \n`
}
console.log('\n====================='.bgBlue);
console.log(`Esta es la tabla del ${b}`.rainbow);
console.log('====================='.bgBlue);
console.log(message.rainbow); // imprimir tabla por consola

createTable(message, b)
  .then((succes) => console.log(succes.green))
  .catch((error) => console.log(error.red))
