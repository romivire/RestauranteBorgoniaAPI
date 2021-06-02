const { Router } = require('express');
const router = Router();
let multer = require('multer');
let upload = multer();

const { getReservaByID, getPlatos, updateReserva, getImagePlatos, createReserva, getPlatosByCategoria, getPlatosVegetarianos, getPlatosNoVegetarianos } = require('../controllers/index.controller');

router.get('/reserva/:id', getReservaByID);
router.get('/platos', getPlatos);
router.get('/platos/:categoria', getPlatosByCategoria);
router.get('/platosVegetarianos', getPlatosVegetarianos);
router.get('/platosNoVegetarianos', getPlatosNoVegetarianos);
router.get('/platos/images/:id', getImagePlatos);
router.post('/reserva/create',upload.none(), createReserva);
router.post('/reserva/:id', upload.none(), updateReserva);



module.exports = router;
