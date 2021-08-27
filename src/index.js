
//primero cargo las variables de entorno antes de ejecutar cualquier codigo
require('dotenv').config();

//cargo las dependencias 
const app = require('./app');
require('./database');

//levanto el servidor

async function main(){
  await  app.listen(app.get('port'));
  console.log(`servidor arriba y escuchando el puerto ${app.get('port')}`);
}

//ejecuto la funcion

main();

