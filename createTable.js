// Requiere
const fs = require('fs');
const path = require('path');

// Definir ruta del archivo
const ruta = path.join(__dirname, 'tabla-5.txt')

// usar fs para guardar la tabla y terminar el programa
const createFile = (message) => {
  fs.writeFile(ruta, message, function (err) {
    if (err) throw err;
    console.log('Archivo creado');
  });
}

module.exports = createFile;