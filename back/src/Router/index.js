const {Router} = require('express');
// Importar todos los routers;
const { postProductHandler} = require('../handlers/postHandler');
const { getAllPlate, getId } = require('../handlers/getAllHandlers')
const { createProduct} = require('../controllers/postControllers');
const { deletePlate } = require('../controllers/getControllers');
const router = Router();

//enviamos a la request por diferentes rutas para modularizar


router.post("/create", createProduct);
router.use("/delete/:id", deletePlate);
router.use("/all", getAllPlate);
router.use("/plate/:id", getId);


module.exports = router;