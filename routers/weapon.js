const { Router } = require('express');
const {getWeapons,getArmor,getSets} = require('../controllers/getWeapons');
const {altaVenta} = require('../controllers/altaVenta');
const rounter = Router();


rounter.get('/weapons', getWeapons);
rounter.get('/setss', getSets);
rounter.get('/armors', getArmor);
rounter.post('/venta', altaVenta ); 

module.exports = rounter;
