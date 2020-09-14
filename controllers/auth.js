const {response} = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const {generarJWT} = require('../helpers/jwt');

const crearUsuario = async(req,res = response )=>{
    const {email,password} = req.body;
    try{
        let usuario = await Usuario.findOne({email});
        if(usuario){
            return res.status(400).json({
                ok: false,
                msg: 'correo existente'
            });
        }
        usuario = new Usuario(req.body);

        //Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync( password,salt );

        //Generar JWT
        const token = await generarJWT( usuario.id, usuario.name );

        await usuario.save();
        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "hable con el administrador"
        })
    }
}
const login = async(req,res = response )=>{

    const {email,password} = req.body;
    try {
        let usuario = await Usuario.findOne({email});
        if(!usuario){
            return res.status(400).json({
                ok: false,
                msg: 'usuario o contraseña incorrecto'
            });
        }
        //Validar password
        const validPassword = bcrypt.compareSync( password, usuario.password );
        if(!validPassword){
            return res.status(400).json({
                ok: false,
                msg: 'usuario o contraseña incorrecto'
            });
        }

        //Generar nuestro JWT
        const token = await generarJWT( usuario.id, usuario.name );

        res.json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        });

    }catch(error){
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "hable con el administrador"
        })
    }
    
}
const renovarToken = async(req,res = response )=>{
    const{ name,uid} = req;
    const token = await generarJWT(uid, name );
    res.json({
        ok: true,
        uid,
        name,
        token
    });
}

module.exports = {
    crearUsuario,
    login,
    renovarToken
}