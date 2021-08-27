//importar los modelos que vamos a manejar

const Tarea = require("../models/Tareas");


const getAll = async (req, res)=>{
    // let prueba = {
    //     text: 'Estas en el controlador SelectAll'
    // }
    // res.status(200).json(prueba);
    try {
        const Tareas = await Tarea.find();

        res.status(200).json(Tareas);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const getOne = async (req, res)=>{

    const id = req.params.id;
    try {
        const uneTarea = await Tarea.findById(id);

        res.status(200).json(uneTarea);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
    console.log(id);
    res.json({message: 'estas obteniendo una tarea'})
}

const create = async (req, res)=>{
    const {tarea, done} = req.body
    const newTarea = new Tarea({
        tarea : tarea,
        done : done
    });
try {
    
    await newTarea.save();
    res.status(201).json({
            message: 'creaste una nueva tarea',
            error: false,
            status : 201,
            data : newTarea
        })
} catch (error) {
    res.status(500).json({
        message: error.message,
        error : true,
        status : 500,
        data : newTarea
    })
}
}

const update = async (req, res)=>{
    const id = req.params.id;
    const {tarea, done} = req.body
    try {
       const upTarea = await Tarea.findOneAndUpdate(id, {
            tarea,
            done
        })
        res.status(201).json({
            message: 'La tarea se actualizo correctamente',
            error: false,
            status : 201,
            data : upTarea
        })

    } catch (error) {
        res.status(500).json({
            message: error.message,
            error : true,
            status : 500
        })
    }
    
}

const del = async (req, res)=>{
    const id = req.params.id;

    try {
        
        const del = await Tarea.findOneAndDelete(id);
       
        res.status(201).json({
            message: 'se borró la tarea',
            error: false,
            status : 201,
            data : del
        })

    } catch (error) {
        res.status(500).json({
            message: error.message,
            error : true,
            status : 500
        })
    }
}

module.exports = {getAll, getOne, create, update, del}