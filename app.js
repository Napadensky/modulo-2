// requiriendo modulo
const createTable = require('./createTable');

// crear variable para acumular tabla de 5
let message = '';

// for para iterar y crear tabla
for (let index = 0; index < 10; index++) {
  message = `${message}5 X ${index + 1} = ${5 * (index + 1)} \n`
}

createTable(message);