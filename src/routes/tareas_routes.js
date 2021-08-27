const  {Router} = require('express'); //importo desde express el router
const { getAll, getOne, create, update, del } = require("../controllers/TareasController");

//defino el router
const router = Router();

//es buena practica separar las rutas absolutas de las que reciben variables
//router.route('/')
//rutas absolutas get, post
//rutas con variables get/:id, put/:id, delete/:id
router.route('/api/tareas')
    .get(getAll)
    .post(create)
router.route('/api/tareas/:id')
    .get(getOne)
    .put(update)
    .delete(del)

//exporto el modulo

module.exports = router;