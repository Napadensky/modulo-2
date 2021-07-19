// Requiere
const fs = require('fs');
const path = require('path');

// usar fs para guardar la tabla y terminar el programa
const createFile = (message,base) => {
  const ruta = path.join(__dirname, `tabla-${base}.txt`)
  return new Promise((resolve, reject) => {
    fs.writeFile(ruta, message, (err) => err ? reject(err) : resolve('Todo salio bien') );
  });
}

module.exports = createFile; // Exportar la funcion