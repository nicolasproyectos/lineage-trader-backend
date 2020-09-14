/* 
    Rutas de Usuarios /auth
    host + /api/auth
*/
const { Router } = require('express');
const { crearUsuario,login,renovarToken} = require('../controllers/auth');
const router = Router();
const {check} = require('express-validator');
const {validarCampos} = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

router.post(
    '/crear', 
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('password', 'Password incorrecto').isLength({min: 6}),
        check('email', 'El email es obligatorio').isEmail(),
        validarCampos

    ] 
    ,crearUsuario 
);
router.post(
    '/',
    [
        check('password', 'Password incorrecto').isLength({min: 6}),
        check('email', 'El email es obligatorio').isEmail(),
        validarCampos
    ]
    ,login );
router.get('/renovar' ,validarJWT, renovarToken );

module.exports = router;

