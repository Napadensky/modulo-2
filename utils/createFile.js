const fs = require('fs');
const path = require('path');

const createFile = (message, base) => {
  const ruta = path.join(__dirname, `tabla-${base}.txt`)
  return new Promise((resolve, reject) => {
    fs.writeFile(
      ruta.replace('utils', 'output'),
      message,
      (err) => {
        err
          ? reject('-> Algo salio mal, no se guardo el archivo')
          : resolve('-> Archivo guardado con éxito')
      });
  });
}

module.exports = createFile;