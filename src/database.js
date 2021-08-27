const mongoose = require('mongoose');

//para llamar a las variables de entorno tengo que usar el process.env de node y cargar el valor contenido en .env
const URLDB = process.env.MONOGODB_URI;

mongoose.connect(URLDB, {
    useUnifiedTopology: true,
    useNewUrlParser:true,
    useCreateIndex: true,
    useFindAndModify: false
});

const conn = mongoose.connection;

conn.once('open', ()=>{
    console.log('Date base conectado!');
})