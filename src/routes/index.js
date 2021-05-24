const { Router } = require('express');
const router = Router();
let multer = require('multer');
let upload = multer();

const { getReservaByID, getPlatos, updateReserva } = require('../controllers/index.controller');

router.get('/reserva/:id', getReservaByID);
router.get('/platos', getPlatos);
router.post('/reserva/:id', upload.none(), updateReserva);


module.exports = router;
