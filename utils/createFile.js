const fs = require('fs');
const path = require('path');

const createFile = (message, base) => {
  const ruta = path.join(__dirname, `tabla-${base}.txt`);
  return new Promise((resolve, reject) => {
    fs.writeFile(
      ruta.replace('utils', 'output'),
      message,
      (err) => {
        if (err) {
          reject(new Error('-> Algo salio mal, no se guardo el archivo'));
        } else { resolve('-> Archivo guardado con éxito'); }
      },
    );
  });
};

module.exports = createFile;
