const {Router} = require('express');
// Importar todos los routers;
const { postProductHandler} = require('../handlers/postHandler');
const { getAllPlate } = require('../handlers/getAllHandlers')
const {typesDiets} = require('../controllers/postControllers')
const router = Router();

//enviamos a la request por diferentes rutas para modularizar

router.use("/types", typesDiets)
router.post("/create", postProductHandler);
router.use("/all", getAllPlate)


module.exports = router;