// requiriendo modulo
const createTable = require('./createTable');

let message = ''; // crear variable para acumular tabla
const [_,base] = process.argv[2].split('=') // obtener base
if(!Number(base)) throw new Error('base no es un numero') // validar que sea un nuemero

// for para iterar y crear tabla
for (let index = 0; index < 10; index++) {
  message += `${base} X ${index + 1} = ${base * (index + 1)} \n`
}
console.log(message); // imprimir tabla por consola

createTable(message,base)
  .then((succes) => console.log(succes))
  .catch((error) => console.log(error))
