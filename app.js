// Requiere
const fs = require('fs');
const path = require('path');

// Definir ruta del archivo
const ruta = path.join(__dirname, 'tabla-5.txt')

// crear variable para acumular tabla de 5
let message = '';

// for para iterar y crear tabla
for (let index = 0; index < 10; index++) {
  message = `${message}5 X ${index + 1} = ${5 * (index + 1)} \n`
}

// usar fs para guardar la tabla y terminar el programa
fs.writeFile(ruta, message, function(err) {
  if(err) throw err;
  console.log('Archivo creado');
});