// Requiere
const fs = require('fs');
const path = require('path');

// Definir ruta del archivo
const ruta = path.join(__dirname, 'tabla-5.txt')

// usar fs para guardar la tabla y terminar el programa
const createFile = (message) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(ruta, message, (err) => err ? reject(err) : resolve('Todo salio bien') );
  });
}

// Exportar la funcion
module.exports = createFile;