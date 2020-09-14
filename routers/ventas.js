/* 
    Rutas de Ventas
    /api/venta
*/

const { Router } = require('express');
const {nuevaVenta} = require('../controllers/ventas');
const { check } = require('express-validator');
const {validarCampos} = require('../middlewares/validar-campos');
const router = Router();

router.post('/nueva',[
    check('nombre','El nombre es requerido').not().isEmpty(),
    check('tipo','El tipo es requerido o incorrecto').isIn(['weapon','armor','item','sets']),
    validarCampos
] ,nuevaVenta ); 

module.exports = router;