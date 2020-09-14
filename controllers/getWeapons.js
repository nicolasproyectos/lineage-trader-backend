const {response} = require('express');
const Weapon = require('../models/Weapon');
const Armor = require('../models/Armor');
const Set = require('../models/Set');


const getWeapons = async(req,res = response)=>{
    const respuesta = await Weapon.find().sort('-rango nombre');
    res.json({
        ok: true,
        respuesta
    });
}

const getArmor = async(req,res = response)=>{
    const respuesta = await Armor.find().sort('-rango nombre');
    res.json({
        ok: true,
        respuesta
    });
}
const getSets = async(req,res = response)=>{
    const respuesta = await Set.find();
    
    res.json({
        ok: true,
        respuesta
    });
}

module.exports = {
    getWeapons,
    getArmor,
    getSets
}