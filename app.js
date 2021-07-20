const createTable = require('./utils/createFile');
const getTables = require('./utils/getTables');
const yargs = require('./config/yargs')
require('colors');

const { b, l } = yargs
let message = ''

message = getTables(b)
console.log('\n')
console.log('======================'.bgBlue);
console.log(`Esta es la tabla del ${b}`.rainbow);
console.log('======================'.bgBlue);
if (l) console.log(message.rainbow);

createTable(message, b)
  .then((succes) => console.log(succes.green))
  .catch((error) => console.log(error.red))
