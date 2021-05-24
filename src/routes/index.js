const { Router } = require('express');
const router = Router();

const { getReservaByID, getPlatos } = require('../controllers/index.controller');

router.get('/reserva/:id', getReservaByID);
router.get('/platos', getPlatos);


module.exports = router;
