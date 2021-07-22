const createTable = require('./utils/createFile');
const getTables = require('./utils/getTables');
const yargs = require('./config/yargs');
require('colors');

const { base, listar } = yargs;
const message = getTables(base);

console.log(listar);
if (listar) {
  console.log('\n');
  console.log('========================'.bgBlue);
  console.log(`Esta es la tabla del: ${base}`.rainbow);
  console.log('========================'.bgBlue);
  console.log(message.replace(/X/g, 'X'.blue).replace(/=/g, '='.blue));
}

createTable(message, base)
  .then((succes) => console.log(succes.green))
  .catch((error) => console.log(error.red));
