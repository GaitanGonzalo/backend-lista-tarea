const {Schema, model} = require("mongoose");

const tareaSchema = new Schema({

    tarea: {
        type: String,
        require: true
    },
    done : Boolean
});

const Tarea = model('Tarea', tareaSchema);

module.exports =  Tarea;