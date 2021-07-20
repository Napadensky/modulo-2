const fs = require('fs');
const path = require('path');

const createFile = (message, base) => {
  const ruta = path.join(__dirname, `tabla-${base}.txt`)
  return new Promise((resolve, reject) => {
    fs.writeFile(
      ruta.replace('utils', 'results'),
      message,
      (err) => err ? reject(err) : resolve('-> Todo salio bien fin de la tabla'));
  });
}

module.exports = createFile;